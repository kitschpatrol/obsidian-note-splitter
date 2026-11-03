import { normalizePath, Notice, Platform, Plugin } from 'obsidian'
import type { NoteSplitterSettings } from './settings/settings'
import { DEFAULT_SETTINGS, NoteSplitterSettingsTab } from './settings/settings'
import {
	escapeInvalidFileNameChars,
	findFrontmatterEndIndex,
	getErrorMessage,
	trimForFileName,
} from './utilities'

export default class NoteSplitterPlugin extends Plugin {
	override settings: NoteSplitterSettings = { ...DEFAULT_SETTINGS }

	override async onload() {
		await this.loadSettings()

		this.addSettingTab(new NoteSplitterSettingsTab(this.app, this))

		this.addCommand({
			editorCallback: async (_editor, view) => {
				const { file } = view
				if (file === null) {
					return
				}

				// Interpret the escaped newline stored in the settings.
				const delimiter = this.settings.delimiter.replace(/\\n/gu, '\n')

				if (delimiter === '') {
					new Notice('No delimiter set. Please set a delimiter in the settings.')
					return
				}

				const fileData = await this.app.vault.cachedRead(file)
				const frontmatterEndIndex = findFrontmatterEndIndex(fileData)

				let dataWithoutFrontmatter = fileData
				//Ignore frontmatter
				if (frontmatterEndIndex !== -1) {
					dataWithoutFrontmatter = dataWithoutFrontmatter.slice(frontmatterEndIndex + 1)
				}

				if (dataWithoutFrontmatter === '') {
					new Notice('No content to split.')
					return
				}

				const splitLines = dataWithoutFrontmatter
					.split(delimiter)
					.map((line) => line.trim())
					.filter((line) => line !== '')
					// Re-attach the delimiter after filtering so empty sections stay empty.
					.map((line) => (this.settings.removeDelimiter ? line : line + delimiter))

				if (splitLines.length === 0) {
					new Notice('No content to split.')
					return
				}

				if (splitLines.length === 1) {
					new Notice('Only one section of content found. Nothing to split.')
					return
				}

				const folderPath =
					this.settings.saveFolderPath === ''
						? (file.parent?.path ?? '')
						: this.settings.saveFolderPath

				try {
					await this.app.vault.createFolder(folderPath)
				} catch {
					//Folder already exists
				}

				let filesCreated = 0
				for (const [i, line] of splitLines.entries()) {
					const content = line + this.settings.appendToSplitContent

					let fileName: string
					if (this.settings.useContentAsTitle) {
						// Use only the first line so multi-line sections produce valid filenames.
						fileName = line.split('\n', 1)[0] ?? ''
						fileName = escapeInvalidFileNameChars(fileName, Platform.isWin)
						fileName = trimForFileName(fileName, '.md')
					} else {
						fileName = `split-note-${Date.now() + i}`
					}

					const filePath = normalizePath(`${folderPath}/${fileName}.md`)

					try {
						await this.app.vault.create(filePath, content)
						filesCreated++
					} catch (error) {
						if (getErrorMessage(error).includes('already exists')) {
							const newFilePath = `${folderPath}/Split conflict ${crypto.randomUUID()}.md`
							try {
								await this.app.vault.create(newFilePath, content)
								filesCreated++
							} catch (conflictError) {
								console.error(conflictError)
								new Notice(`Error creating file: ${getErrorMessage(conflictError)}`)
							}

							continue
						}

						new Notice(`Error creating file: ${getErrorMessage(error)}`)
						console.log(error)
					}
				}

				if (filesCreated === splitLines.length && this.settings.deleteOriginalNote) {
					await this.app.vault.delete(file)
				}

				new Notice('Split into ' + filesCreated + ' note' + (filesCreated > 1 ? 's' : '') + '.')
			},
			id: 'split-by-delimiter',
			name: 'Split by delimiter',
		})
	}

	async loadSettings() {
		const savedSettings = (await this.loadData()) as Partial<NoteSplitterSettings>
		this.settings = { ...DEFAULT_SETTINGS, ...savedSettings }
	}
}
