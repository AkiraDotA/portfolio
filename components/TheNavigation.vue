<script setup>
const availableTints = [
	'bg-darkred',
	'bg-darkred-100',
	'bg-darkred-200',
	'bg-darkred-300',
	'bg-darkred-400',
	'bg-darkred-500',
	'bg-darkred-600',
];
</script>

<template>
  <div class="max-sm:z-50 max-sm:fixed bottom-0 left-0 w-full">
    <div class="nav-topper h-8 mt-6 max-lg:hidden" :class="availableTints[0]" />
    <nav class="max-lg:flex">
      <NavigationButton
        v-for="(navItem, index) of NAVIGATION"
        :key="index"
        :to="navItem.route"
        :class="availableTints[index + 1]"
      >
        {{ navItem.label }}
      </NavigationButton>
    </nav>
    <div class="nav-ender h-8 mb-6 max-lg:hidden" :class="availableTints[NAVIGATION.length + 1] ?? 'bg-darkred-600'" />
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
