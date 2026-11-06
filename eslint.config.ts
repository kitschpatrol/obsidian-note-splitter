import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig(
	{
		ignores: ['examples/Note Splitter Demo Vault/**', '**/changelog.md'],
		ts: {
			overrides: {
				'jsdoc/require-jsdoc': 'off',
				'no-new': 'off',
				'perfectionist/sort-classes': 'off',
			},
		},
	},
	{
		files: ['README.md'],
		rules: { 'unicorn/filename-case': 'off' },
	},
	{
		files: ['src/**/*.ts'],
		rules: {
			// Keep emitted code compatible with the existing ES2018 target.
			'require-unicode-regexp': ['error', { requireFlag: 'u' }],
			'unicorn/prefer-string-replace-all': 'off',
		},
	},
)
