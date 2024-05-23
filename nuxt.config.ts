// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/eslint-module', '@nuxt/ui'],
	devServer: {
		host: 'localhost',
		port: 3030,
	},
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap' },
			],
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
	},
	ui: {
		icons: ['mdi', 'simple-icons', 'hugeicons'],
	},
});
