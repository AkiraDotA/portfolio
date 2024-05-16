export default defineAppConfig({
	ui: {
		primary: 'red',
		gray: 'cool',
		card: {
			background: 'bg-white dark:bg-gradient-to-br from-neutral-900 to-neutral-800',
			ring: 'ring-1 ring-gray-200 dark:ring-neutral-800',
			rounded: 'rounded-0',
		},
		badge: {
			color: {
				gray: {
					solid: 'ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-800',
				},
			},
		},
	},
});
