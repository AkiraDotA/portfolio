// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-nodemailer', '@nuxtjs/device'],
	imports: {
		dirs: ['~/utils/constants'],
		presets: [
			{
				from: '@vueuse/core',
				imports: ['breakpointsTailwind', 'useBreakpoints', 'useElementSize', 'useMouseInElement', 'useMouse'],
			},
		],
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: 'bg-wave',
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
	css: ['~/assets/css/main.css'],
	colorMode: {
		preference: 'system',
		classSuffix: '',
	},
	runtimeConfig: {
		public: {
			recaptchaSiteKey: process.env.NUXT_RECAPTCHA_SITE_KEY,
		},
		recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
		mailUsername: process.env.NUXT_MAIL_USERNAME,
	},
	devServer: {
		host: 'localhost',
		port: 3030,
	},
	compatibilityDate: '2026-02-08',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	nodemailer: {
		host: process.env.NUXT_MAIL_SMTP,
		port: Number(process.env.NUXT_MAIL_PORT),
		secure: true,
		auth: {
			user: process.env.NUXT_MAIL_USERNAME,
			pass: process.env.NUXT_MAIL_PASSWORD,
		},
	},
});
