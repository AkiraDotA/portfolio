<script setup>
</script>

<template>
  <UCard class="text-center lg:me-6 lg:mb-0 mb-6 transition-all" :ui="{ body: { padding: '!px-0 lg:!py-6 pt-6 !pb-0' } }">
    <div class="lg:block flex max-sm:flex-col justify-between max-lg:mb-6 max-sm:mb-0 mx-6">
      <MenuProfile />
      <div class="max-sm:flex max-sm:justify-between max-sm:my-2 sm:space-y-2 sm:my-auto sm:ms-4 sm:text-end">
        <MenuSocials class="lg:hidden" />
        <MenuPoweredBy class="lg:hidden" />
      </div>
    </div>

    <TheNavigation />

    <MenuSocials class="max-lg:hidden" />
    <MenuPoweredBy class="mt-4 max-lg:hidden" />
  </UCard>
</template>

<style scoped>
</style>
