<script setup>
const { to } = defineProps({
	to: {
		type: String,
		required: true,
	},
});

const route = useRoute();
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block hover:!bg-neutral-800 transition duration-300 lg:text-lg sm:text-sm max-sm:text-xs w-full lg:p-4 p-2 max-sm:py-3"
  >
    <span
      :class="{'bg-[length:100%_2px]': route.path === to}"
      class="bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 group-hover:from-darkred group-hover:to-darkred bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-0.5"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<style scoped>
</style>
