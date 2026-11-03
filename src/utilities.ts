const FRONTMATTER_REGEX = /^---\n[\s\S]*?\n---/u

export const findFrontmatterEndIndex = (value: string): number => {
	const match = FRONTMATTER_REGEX.exec(value)
	return match ? match[0].length : -1
}

/**
 * Escapes characters invalid for a file name.
 *
 * @param value - Text to use as a file name.
 * @param isWindows - Also remove characters that are only invalid on Windows.
 */
export const escapeInvalidFileNameChars = (value: string, isWindows = false): string => {
	// Replace colons with hyphens, slashes with spaces, and remove reserved characters.
	let escaped = value
		.replace(/:/gu, '-')
		.replace(/[\\/]/gu, ' ')
		.replace(/[\^[\]#|]/gu, '')

	if (isWindows) {
		// Remove characters Windows does not allow in file names.
		escaped = escaped.replace(/[?<>"*`]/gu, '')
	}

	return escaped.trim()
}

/**
 * Trims the string to the maximum length allowed for a file name
 */
export const trimForFileName = (value: string, extension: string): string => {
	const MAX_LENGTH_MAC_OS = 255
	return value.slice(0, Math.max(0, MAX_LENGTH_MAC_OS - extension.length - 1))
}

export const getErrorMessage = (error: unknown): string =>
	error instanceof Error ? error.message : String(error)
