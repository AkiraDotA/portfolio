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
	isOutside: {
		type: Boolean,
		default: false,
	},
	radialGradientClasses: {
		type: String,
		default: '',
	},
});
const { x, y } = toRefs(props);

</script>

<template>
  <div class="relative overflow-hidden z-10 transition-all duration-200 ease-out h-full">
    <div class="slotContainer h-full">
      <slot />
    </div>
    <div
      v-if="!isOutside"
      class="absolute w-[300px] h-[300px] translate-y-[-50%] translate-x-[-50%] bg-[radial-gradient(circle_closest-side,var(--tw-gradient-stops))] from-darkred-400 opacity-20 pointer-events-none"
      :style="{top: `${y}px`, left: `${x}px`}"
    />
  </div>
</template>

<style scoped>
:deep(.slotContainer) * * {
  position: relative;
  z-index: 10;
}
</style>
