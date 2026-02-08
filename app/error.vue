<script setup>
const { error } = defineProps({
	error: { type: Object, default() {} },
});
</script>

<template>
  <div class="absolute top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-80 max-sm:w-full max-sm:px-16">
    <h1 class="text-9xl max-sm:text-8xl font-bold after:block after:bg-darkred after:mt-4 after:mb-6 after:py-1 after:w-16">
      {{ error.statusCode }}
    </h1>

    <div class="text-2xl max-sm:text-xl text-neutral-300">
      <div v-if="error.statusCode !== 404">
        <p>Oops, something went wrong!</p>
      </div>
      <p v-else>
        {{ error.message }}
      </p>
    </div>

    <NavigationButton
      to="/"
      hide-active
      class="!text-base max-sm:!text-sm text-center bg-darkred-300 mt-8 !py-3 max-sm:!py-2"
    >
      Go back home
    </NavigationButton>
  </div>
</template>
