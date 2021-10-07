module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true
	},
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': [ 'error', 'always' ],
	}
};
