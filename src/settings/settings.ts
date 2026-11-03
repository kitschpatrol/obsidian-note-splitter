import type { App, SettingDefinitionItem } from 'obsidian'
import { PluginSettingTab } from 'obsidian'
import type NoteSplitterPlugin from '../main'

export type NoteSplitterSettings = {
	deleteOriginalNote: boolean
	delimiter: string
	saveFolderPath: string
	useContentAsTitle: boolean
}

export const DEFAULT_SETTINGS: NoteSplitterSettings = {
	deleteOriginalNote: false,
	delimiter: '\\n',
	saveFolderPath: 'note-splitter',
	useContentAsTitle: false,
}

export class NoteSplitterSettingsTab extends PluginSettingTab {
	plugin: NoteSplitterPlugin

	constructor(app: App, plugin: NoteSplitterPlugin) {
		super(app, plugin)
		this.plugin = plugin
	}

	override getSettingDefinitions(): Array<SettingDefinitionItem<keyof NoteSplitterSettings>> {
		return [
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.saveFolderPath,
					key: 'saveFolderPath',
					type: 'text',
				},
				desc: 'The path to the folder that split notes will be placed in. If left empty, the folder of the original note will be used.',
				name: 'Folder path',
			},
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.delimiter,
					key: 'delimiter',
					type: 'text',
				},
				desc: 'The delimiter to split by.',
				name: 'Delimiter',
			},
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.useContentAsTitle,
					key: 'useContentAsTitle',
					type: 'toggle',
				},
				desc: 'If true, the first sentence will be used as the title of the note, otherwise a timestamp will be used e.g. note-splitter-1702591910.',
				name: 'Use content as title',
			},
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.deleteOriginalNote,
					key: 'deleteOriginalNote',
					type: 'toggle',
				},
				desc: 'Delete the original note after a successful split.',
				name: 'Delete original',
			},
		]
	}
}
