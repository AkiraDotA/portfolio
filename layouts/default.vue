<script setup>
</script>

<template>
  <div class="flex lg:flex-row flex-col my-16 max-sm:mt-4 mx-8 max-sm:mx-3">
    <TheMenu class="lg:max-h-[800px]" />
    <UCard class="w-full">
      <slot />
    </UCard>
  </div>
</template>

<style scoped>
</style>
