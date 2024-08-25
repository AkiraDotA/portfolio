<script setup>
const availableTints = [
	'border-darkred bg-darkred',
	'border-darkred-100 bg-darkred-100',
	'border-darkred-200 bg-darkred-200',
	'border-darkred-300 bg-darkred-300',
	'border-darkred-400 bg-darkred-400',
	'border-darkred-500 bg-darkred-500',
	'border-darkred-600 bg-darkred-600',
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
        class="lg:border-x-2 border-y-2"
        :class="[availableTints[index + 1], {'border-s-2': index === 0}, {'border-e-2': index === NAVIGATION.length - 1}]"
      >
        {{ navItem.label }}
      </NavigationButton>
    </nav>
    <div class="nav-ender h-8 mb-6 max-lg:hidden" :class="availableTints[NAVIGATION.length + 1]" />
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
