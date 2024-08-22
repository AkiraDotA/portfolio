<script setup>
const { projectCategory } = defineProps({
	projectCategory: {
		type: Object,
		required: true,
	},
});
</script>

<template>
  <h3 v-if="projectCategory.category" class="text-xl py-0.5 bg-gradient-to-r from-darkred-200 mt-8 mb-4 ps-4 xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 transition-all duration-300">
    {{ projectCategory.category }}
  </h3>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
    <slot />
  </div>
</template>

<style scoped>

</style>
