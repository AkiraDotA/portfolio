import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/max-attributes-per-line': ['error', {
			singleline: 2,
			multiline: 1,
		}],
		'object-curly-spacing': ['error', 'always'],
		'vue/no-v-html': 'off',
	},
});
