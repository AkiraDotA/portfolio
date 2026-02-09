<script setup>
const availableTints = [
	'bg-accent',
	'bg-accent-100',
	'bg-accent-200',
	'bg-accent-300',
	'bg-accent-400',
	'bg-accent-500',
	'bg-accent-600',
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
				class="max-sm:!bg-opacity-75 max-sm:!backdrop-blur"
			>
				{{ navItem.label }}
			</NavigationButton>
		</nav>
		<div class="nav-ender h-8 mb-6 max-lg:hidden" :class="availableTints[NAVIGATION.length + 1] ?? 'bg-accent-600'" />
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
