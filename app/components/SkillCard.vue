<script setup>
const { skillIcon } = defineProps({
	skillIcon: {
		type: String,
		required: true,
	},
	iconCollection: {
		type: String,
		default: 'simple-icons',
	},
});

const cardContainer = ref(null);
const { elementX, elementY } = useSharedMouseInElement(cardContainer);
</script>

<template>
	<BorderGradientHover
		ref="cardContainer"
		:x="elementX"
		:y="elementY"
	>
		<div class="group relative flex items-center bg-neutral-100 dark:bg-neutral-800 text-nowrap cursor-default p-4">
			<UIcon
				:name="`i-${iconCollection}-${skillIcon}`"
				class="text-3xl max-lg:text-2xl text-accent me-5 z-10"
			/>
			<span class="text-lg max-lg:text-base z-10"><slot /></span>
			<div class="transition-opacity ease-out duration-300 group-hover:opacity-100 opacity-0 bg-gradient-to-l from-accent-200 dark:from-accent-400 to-50% w-full h-full absolute top-0 left-0" />
		</div>
	</BorderGradientHover>
</template>

<style scoped>
</style>
