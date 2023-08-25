// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: ['@nuxtjs/eslint-module', '@nuxthq/ui'],
	devServer: {
		host: 'localhost',
		port: 3030,
	},
});
