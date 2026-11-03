const FRONTMATTER_REGEX = /^---\n[\s\S]*?\n---/u

export const findFrontmatterEndIndex = (value: string): number => {
	const match = FRONTMATTER_REGEX.exec(value)
	return match ? match[0].length : -1
}

/**
 * Escapes characters invalid for a file name.
 *
 * @param value - Text to use as a file name.
 */
export const escapeInvalidFileNameChars = (value: string): string =>
	// Replace colons with hyphens, slashes with spaces, and remove reserved characters.
	value
		.replace(/:/gu, '-')
		.replace(/[\\/]/gu, ' ')
		.replace(/[\^[\]#|]/gu, '')

/**
 * Trims the string to the maximum length allowed for a file name
 */
export const trimForFileName = (value: string, extension: string): string => {
	const MAX_LENGTH_MAC_OS = 255
	return value.slice(0, Math.max(0, MAX_LENGTH_MAC_OS - extension.length - 1))
}

export const getErrorMessage = (error: unknown): string =>
	error instanceof Error ? error.message : String(error)
