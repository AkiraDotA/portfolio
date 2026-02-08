<script setup>
</script>

<template>
  <div class="max-lg:flex items-center max-sm:mb-4">
    <div
      class="relative z-10 lg:min-w-[195px] sm:min-w-[120px] w-[105px] lg:mx-auto me-8 flex overflow-hidden p-1"
    >
      <div
        class="animate-rotate absolute inset-0 bg-[conic-gradient(#991b1b_20deg,#4D0F0F_270deg)]"
      />
      <img
        src="/images/profile.png"
        alt="Zac Holly"
        class="z-20"
      >
    </div>
    <h2 class="text-2xl max-sm:text-xl lg:my-4">
      Zac Holly
      <br class="lg:hidden">
      <UBadge
        color="neutral"
        variant="subtle"
        size="lg"
        class="mt-2"
      >
        Software Engineer
      </UBadge>
    </h2>
  </div>
</template>

<style scoped>
</style>
