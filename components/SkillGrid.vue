<script setup>
const { skillCategory } = defineProps({
	skillCategory: {
		type: Object,
		required: true,
	},
});
</script>

<template>
  <SubsectionTitle v-if="skillCategory.category">
    {{ skillCategory.category }}
  </SubsectionTitle>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <slot />
  </div>
</template>

<style scoped>
</style>
