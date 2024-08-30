<script setup>
const { error } = defineProps({
	error: { type: Object, default() {} },
});
</script>

<template>
  <div class="flex my-64">
    <div class="mx-auto w-80">
      <h1 class="text-9xl font-bold after:block after:bg-darkred after:mt-4 after:mb-6 after:py-1 after:w-16">
        {{ error.statusCode }}
      </h1>

      <div class="text-2xl text-gray-300">
        <div v-if="error.statusCode !== 404">
          <p>Oops, something went wrong!</p>
          <p class="text-xl text-gray-400 mt-4">
            {{ error.message }}
          </p>
        </div>
        <p v-else>
          {{ error.message }}
        </p>
      </div>

      <NavigationButton
        to="/"
        hide-active
        class="!text-base text-center bg-darkred-300 mt-8 !py-3"
      >
        Go back home
      </NavigationButton>
    </div>
  </div>
</template>
