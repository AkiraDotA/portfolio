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
</script>

<template>
  <div class="group relative flex items-center bg-gray-800 ring-1 ring-gray-700 text-nowrap cursor-default p-4">
    <UIcon
      dynamic
      :name="`i-${iconCollection}-${skillIcon}`"
      class="text-3xl text-darkred me-5 z-10"
    />
    <span class="text-lg z-10"><slot /></span>
    <div class="transition-opacity ease-out duration-300 group-hover:opacity-100 opacity-0 bg-gradient-to-l from-darkred-200 to-50% w-full h-full absolute top-0 left-0" />
  </div>
</template>

<style scoped>
</style>
