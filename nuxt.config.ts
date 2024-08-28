// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/color-mode',
		'@nuxtjs/eslint-module',
		'@nuxt/ui',
		'@nuxtjs/device',
		'nuxt-nodemailer',
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
	nodemailer: {
		host: process.env.NUXT_MAIL_SMPT,
		port: process.env.NUXT_MAIL_PORT,
		secure: true,
		auth: {
			user: process.env.NUXT_MAIL_USERNAME,
			pass: process.env.NUXT_MAIL_PASSWORD,
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: 'bg-waveblack',
			},
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap',
				},
			],
			script: [
				{ src: '/js/three.r134.min.js' },
				{ src: '/js/vanta.waves.min.js' },
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
		mailUsername: process.env.NUXT_MAIL_USERNAME,
	},
	compatibilityDate: '2024-08-25',
});
