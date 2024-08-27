// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/color-mode',
		'@nuxtjs/eslint-module',
		'@nuxt/ui',
		'@nuxtjs/device',
		['nuxt-mail', {
			message: {
				to: process.env.NUXT_MAIL_USERNAME,
			},
			smtp: {
				host: process.env.NUXT_MAIL_SMPT,
				port: process.env.NUXT_MAIL_PORT,
				secure: true,
				auth: {
					user: process.env.NUXT_MAIL_USERNAME,
					pass: process.env.NUXT_MAIL_PASSWORD,
				},
			},
		}],
	],
	imports: {
		presets: [
			{
				from: '@vueuse/core',
				imports: ['breakpointsTailwind', 'useBreakpoints', 'useElementSize', 'useMouseInElement'],
			},
		],
	},
	devServer: {
		host: 'localhost',
		port: 3030,
	},
	colorMode: {
		preference: 'dark',
		classSuffix: '',
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap',
				},
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
	runtimeConfig: {
		public: {
			recaptchaSiteKey: process.env.NUXT_RECAPTCHA_SITE_KEY,
		},
		recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
	},
	compatibilityDate: '2024-08-25',
});
