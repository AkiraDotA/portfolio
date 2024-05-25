<script setup>
const { label } = defineProps({
	label: {
		type: String,
		default: '',
	},
});
</script>

<template>
  <h3 v-if="label" class="text-lg font-bold bg-gradient-to-r from-darkred-200 mt-8 mb-4 ps-4 xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 transition-all duration-300">
    {{ label }}
  </h3>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <slot />
  </div>
</template>

<style scoped>

</style>
