# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-11-03

No notable changes.

## [1.3.0] - 2026-11-03

### Added

- Add a `Remove delimiter` toggle, enabled by default; disabling it appends the interpreted delimiter to each nonempty split note.
- Add `Append to split content` to append custom text to every generated note without including that text in content-based filenames; default to empty text.

### Fixed

- Use only the first line for content-based filenames, preventing multiline sections from producing filenames containing newlines.
- Sanitize content-based filenames for Windows and trim surrounding whitespace after filename cleanup.

### Documentation

- Document the new settings and filename-cleanup rules, and correct content-title help to describe first-line naming.
- Distinguish the original plugin’s MIT attribution from attribution for fork changes in the README.

### Maintenance

- Correct the fork’s copyright period in the MIT license to 2024–2026.

## [1.0.0] - 2026-11-03

### Added

- Provide a `Split by delimiter` editor command with configurable literal delimiters and escaped-newline support; trim sections, skip empty content, and require at least two nonempty sections.
- Exclude frontmatter from generated notes while retaining each section’s Markdown and links.
- Save split notes to a configurable folder, creating it when needed; leave the folder setting empty to save beside the source note.
- Use timestamp filenames by default, with optional content-based filenames that sanitize reserved characters and shorten long names.
- Resolve filename collisions with unique conflict names, display creation errors, and report the number of notes actually saved.
- Offer optional source-note deletion only after every split note is created successfully; preserve the source by default.
- Persist folder, delimiter, naming, and deletion preferences through Obsidian’s declarative settings interface.
- Ship a desktop-only plugin for Obsidian 1.15.0 or newer, distributed as plugin files and installation ZIPs through GitHub releases.

### Documentation

- Add installation and usage guides, settings explanations, splitting examples, and a description of fork-specific behavior.
- Add a demo vault with sample notes and instructions for trying different splitting settings.

### Maintenance

- Establish pnpm with refreshed TypeScript/esbuild tooling, manifest generation, demo-vault watch builds, shared linting, cross-platform CI, release automation, and scheduled upstream synchronization.

[1.0.0]: https://github.com/kitschpatrol/obsidian-note-splitter/releases/tag/1.0.0
[1.3.0]: https://github.com/kitschpatrol/obsidian-note-splitter/compare/1.0.0...1.3.0
[2.0.0]: https://github.com/kitschpatrol/obsidian-note-splitter/compare/1.3.0...2.0.0
