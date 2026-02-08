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
  <div class="relative overflow-hidden transition duration-300 ease-out p-0.5 bg-neutral-800 hover:bg-darkred-400">
    <div class="slotContainer h-full">
      <slot />
    </div>
    <div
      v-if="!isMobileOrTablet"
      v-show="x || y"
      class="absolute translate-y-[-50%] translate-x-[-50%] pointer-events-none size-112.5 bg-[radial-gradient(circle_closest-side,color-mix(in_srgb,var(--color-darkred)_100%,transparent),transparent)]"
      :class="radialGradientClasses"
      :style="{top: `${y}px`, left: `${x}px`}"
    />
  </div>
</template>

<style scoped>
:deep(.slotContainer) > * {
  z-index: 10;
}
</style>
