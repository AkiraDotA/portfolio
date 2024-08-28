module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'xo',
		'@nuxt/eslint-config',
		'plugin:nuxt/recommended',
	],
	ignorePatterns: [
		'*.min.js',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
	],
	rules: {
		'vue/max-attributes-per-line': ['error', {
			singleline: 2,
			multiline: 1,
		}],
		'object-curly-spacing': ['error', 'always'],
		'vue/no-v-html': 0,
	},
};
