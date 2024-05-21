<script setup>
</script>

<template>
  <div class="flex lg:flex-row flex-col my-16 max-sm:my-4 mx-8 max-sm:mx-3">
    <TheNavigation />
    <UCard class="w-full">
      <slot />
    </UCard>
  </div>
</template>

<style scoped>
</style>
