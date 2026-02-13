<script setup>
const { to } = defineProps({
	to: {
		type: String,
		required: true,
	},
	hideActive: {
		type: Boolean,
		default: false,
	},
});

const route = useRoute();
</script>

<template>
	<NuxtLink
		:to="to"
		class="group block text-neutral-200 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 lg:text-lg sm:text-sm max-sm:text-xs w-full lg:p-4 p-2 max-sm:py-3"
	>
		<span
			:class="{ 'bg-[length:100%_2px]': (route.path === to || (to !== '/' && route.path.startsWith(to))) && !hideActive }"
			class="bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 group-hover:from-accent group-hover:to-accent bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-0.5"
		>
			<slot />
		</span>
	</NuxtLink>
</template>

<style scoped>
</style>
