<script setup>
</script>

<template>
  <UCard class="lg:me-6 lg:mb-0 mb-6 transition-all" :ui="{ body: { padding: 'px-0 lg:py-6 pt-6' } }">
    <div class="text-center">
      <div class="lg:block flex max-sm:flex-col justify-between max-lg:mb-6 max-sm:mb-0 mx-6">
        <NavigationProfile class="max-sm:mb-4" />
        <div class="max-sm:flex max-sm:justify-between max-sm:my-2 sm:space-y-2 sm:my-auto sm:ms-4 sm:text-end">
          <NavigationSocials class="lg:hidden" />
          <NavigationPoweredBy class="lg:hidden" />
        </div>
      </div>

      <div class="max-sm:absolute max-sm:bottom-0 max-sm:left-0 w-full">
        <div class="nav-topper bg-darkred h-8 mt-6 max-lg:hidden" />
        <nav class="max-lg:flex w-full">
          <NavigationButton to="/" class="bg-darkred-100 lg:border-x-2 border-y-2 border-s-2 border-darkred-100">
            Home
          </NavigationButton>
          <NavigationButton to="/skills" class="bg-darkred-200 lg:border-x-2 border-y-2 border-darkred-200">
            Skills
          </NavigationButton>
          <NavigationButton to="/projects" class="bg-darkred-300 lg:border-x-2 border-y-2 border-darkred-300">
            Projects
          </NavigationButton>
          <NavigationButton to="/resume" class="bg-darkred-400 lg:border-x-2 border-y-2 border-darkred-400">
            Resume
          </NavigationButton>
          <NavigationButton to="/contact" class="bg-darkred-500 lg:border-x-2 border-y-2 border-e-2 border-darkred-500">
            Contact
          </NavigationButton>
        </nav>
        <div class="nav-ender bg-darkred-600 h-8 mb-6 max-lg:hidden" />
      </div>

      <NavigationSocials class="max-lg:hidden" />
      <NavigationPoweredBy class="mt-4 max-lg:hidden" />
    </div>
  </UCard>
</template>

<style scoped>
.nav-topper {
  clip-path: polygon(100% 100%, 25% 100%, 0 100%, 0 0, 50% 35%, 100% 0);
}

.nav-ender {
  clip-path: polygon(100% 100%, 50% 65%, 0 100%, 0 0, 50% 0, 100% 0);
}
</style>
