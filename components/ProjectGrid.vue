<script setup>
const { projectCategory } = defineProps({
	projectCategory: {
		type: Object,
		required: true,
	},
});
</script>

<template>
  <SubsectionTitle v-if="projectCategory.category">
    {{ projectCategory.category }}
  </SubsectionTitle>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
    <slot />
  </div>
</template>

<style scoped>
</style>
