import type { App, SettingDefinitionItem } from 'obsidian'
import { PluginSettingTab } from 'obsidian'
import type NoteSplitterPlugin from '../main'

export type NoteSplitterSettings = {
	appendToSplitContent: string
	deleteOriginalNote: boolean
	delimiter: string
	removeDelimiter: boolean
	saveFolderPath: string
	useContentAsTitle: boolean
}

export const DEFAULT_SETTINGS: NoteSplitterSettings = {
	appendToSplitContent: '',
	deleteOriginalNote: false,
	delimiter: '\\n',
	removeDelimiter: true,
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
					defaultValue: DEFAULT_SETTINGS.removeDelimiter,
					key: 'removeDelimiter',
					type: 'toggle',
				},
				desc: 'If enabled, the delimiter will not be included in the content of split notes.',
				name: 'Remove delimiter',
			},
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.useContentAsTitle,
					key: 'useContentAsTitle',
					type: 'toggle',
				},
				desc: 'If enabled, the first line of each split note will be used as its title, otherwise a timestamp will be used e.g. split-note-1702591910.',
				name: 'Use content as title',
			},
			{
				control: {
					defaultValue: DEFAULT_SETTINGS.appendToSplitContent,
					key: 'appendToSplitContent',
					type: 'text',
				},
				desc: 'Text to append to the content of each split note.',
				name: 'Append to split content',
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
