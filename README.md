# Obsidian Note Splitter

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22note-splitter%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Note splitter is an [Obsidian.md](https://obsidian.md) plugin for desktop only. It allows you to split an Obsidian note into individual notes based on a specified sequence of characters (a delimiter). The default delimiter is a new line.

## About

-   [Installation](#installation)
-   [Usage](#usage)
-   [Settings](#settings)

## Installation

1. In Obsidian, open **Settings**
2. Go to **Community plugins**
3. Select **Browse**
4. Search for **Note Splitter** by DecafDev
5. Select **Install**
6. Then select **Enable**

## Usage

1. Open a note that you want to split
2. Open the Obsidian command prompt (cmd + shift + p)
3. Type `Split by delimiter`
4. Press enter

Splitting a note will not modify the original note. (Unless the [delete original](#delete-original) setting is enabled.) It will create a new notes in an output folder that you specify.

### Frontmatter

When splitting a note, this plugin will ignore frontmatter. Only the content after the frontmatter block will be split.

## Settings

### Folder path

Folder to save the split notes to. The default is `note-splitter`.

Setting this field to an empty string will save split notes to the same folder as the original note.

### Delimiter

The delimiter to split by can be configured in the plugin settings. The default delimiter is a new line `\n`.

### Use content as title

If enabled, use the first line of the split section as the name for new notes, handling any name collisions automatically. If disabled, a timestamp is used.

Disabled by default.

### Delete original

If enabled, the original note will be deleted after the split.

Disabled by default.
