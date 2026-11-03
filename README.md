<!-- title({ titleCase: true }) -->

# Obsidian Note Splitter

<!-- /title -->

<!-- badges({ githubRelease: true, npm: false }) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)
[![CI](https://github.com/kitschpatrol/obsidian-note-splitter/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/obsidian-note-splitter/actions/workflows/ci.yml)
[![GitHub Release](https://img.shields.io/github/v/release/kitschpatrol/obsidian-note-splitter?label=Release)](https://github.com/kitschpatrol/obsidian-note-splitter/releases/latest)

<!-- /badges -->

<!-- short-description -->

**Obsidian plugin to split one note into many based on a delimiter.**

<!-- /short-description -->

<!-- toc({ depth: 2 }) -->

## Table of contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Usage](#usage)
- [Settings](#settings)
- [Maintainers](#maintainers)
- [Acknowledgments](#acknowledgments)
- [Contributing](#contributing)
- [License](#license)

<!-- /toc -->

## Overview

Split the active note in Obsidian into separate Markdown files using a delimiter. The default delimiter is a new line, so each nonempty line becomes its own note.

This is a fork of [Obsidian Note Splitter](https://github.com/decaf-dev/obsidian-note-splitter) by [DecafDev](https://github.com/decaf-dev) with some minor changes. This fork is distributed through GitHub releases and will not be published to Obsidian's community plugin registry.

## Quick start

1. **Prerequisites**

   The [Obsidian desktop application](https://obsidian.md/download).

2. **Plugin installation**

   Download the ZIP from the [latest GitHub release](https://github.com/kitschpatrol/obsidian-note-splitter/releases/latest) and extract the `note-splitter` folder into your vault's `.obsidian/plugins` folder. Restart Obsidian, then enable **Note Splitter** under **Settings → Community plugins**.

3. **Configure**

   Open **Settings → Note Splitter** to choose an output folder and delimiter. The defaults save split notes in the `note-splitter` folder and split on new lines. See [Settings](#settings) for naming and deletion options.

4. **Split a note**

   Open the note you want to split, open the command palette with `Cmd+P` on macOS or `Ctrl+P` on Windows or Linux, and run **`Note Splitter: Split by delimiter`**.

## Usage

### Commands

Note Splitter provides one command, which splits the active note at the configured delimiter and saves each nonempty section as a new note:

**`Note Splitter: Split by delimiter`**

Whitespace at the start and end of each section is trimmed, and empty sections are skipped. At least two nonempty sections are required to split a note.

The original note is kept unless [Delete original](#delete-original) is enabled. The new notes are saved in the configured [output folder](#folder-path).

For example, with the default settings, a note containing:

```text
First note
Second note
Third note
```

produces three notes in the `note-splitter` folder, with a timestamp in each filename. Enable [Use content as title](#use-content-as-title) to name the notes from their content instead.

Frontmatter is ignored when splitting a note. Only the content after the frontmatter block is split, and the frontmatter is not copied into the new notes.

## Settings

### Folder path

Folder to save the split notes to. The default is `note-splitter`.

Setting this field to an empty string will save split notes to the same folder as the original note.

### Delimiter

The delimiter to split by can be configured in the plugin settings. The default delimiter is a new line `\n`.

### Use content as title

If enabled, use each split section's content as the name for the new note, cleaning up filename characters and shortening long names. If a note with that name already exists, a unique conflict filename is used. If disabled, a timestamp is used.

Disabled by default.

### Delete original

If enabled, the original note will be deleted after all split notes have been created successfully.

Disabled by default.

## Maintainers

[kitschpatrol](https://github.com/kitschpatrol)

## Acknowledgments

Thanks to [DecafDev](https://github.com/decaf-dev) for creating the original [Obsidian Note Splitter](https://github.com/decaf-dev/obsidian-note-splitter).

<!-- contributing -->

## Contributing

[Issues](https://github.com/kitschpatrol/obsidian-note-splitter/issues) are welcome and appreciated.

Please open an issue to discuss changes before submitting a pull request. Unsolicited PRs (especially AI-generated ones) are unlikely to be merged.

This repository uses [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) (via its `ksc` CLI) for linting and formatting, plus [MDAT](https://github.com/kitschpatrol/mdat) for readme placeholder expansion.

<!-- /contributing -->

<!-- license -->

## License

[MIT](LICENSE) © [Eric Mika](https://ericmika.com)

<!-- /license -->
