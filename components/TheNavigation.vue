<script setup>
</script>

<template>
  <div class="max-sm:z-50 max-sm:fixed bottom-0 left-0 w-full">
    <div class="nav-topper bg-darkred h-8 mt-6 max-lg:hidden" />
    <nav class="max-lg:flex">
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
</template>

<style scoped>
.nav-topper {
  clip-path: polygon(100% 100%, 25% 100%, 0 100%, 0 0, 50% 35%, 100% 0);
}

.nav-ender {
  clip-path: polygon(100% 100%, 50% 65%, 0 100%, 0 0, 50% 0, 100% 0);
}
</style>
