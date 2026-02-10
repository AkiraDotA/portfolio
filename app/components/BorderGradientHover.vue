<script setup>
const props = defineProps({
	x: {
		type: Number,
		default: 0,
	},
	y: {
		type: Number,
		default: 0,
	},
	radialGradientClasses: {
		type: String,
		default: '',
	},
});
const { x, y } = toRefs(props);

const { isMobileOrTablet } = useDevice();
</script>

<template>
	<div class="relative overflow-hidden transition duration-300 ease-out p-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-accent-200 dark:hover:bg-accent-400">
		<div class="slotContainer h-full">
			<slot />
		</div>
		<div
			v-if="!isMobileOrTablet"
			v-show="x || y"
			class="gradient-overlay size-112.5 bg-[radial-gradient(circle_closest-side,color-mix(in_srgb,var(--color-accent)_100%,transparent),transparent)]"
			:class="radialGradientClasses"
			:style="{ top: `${y}px`, left: `${x}px` }"
		/>
	</div>
</template>

<style scoped>
:deep(.slotContainer) > * {
  z-index: 10;
}
</style>
