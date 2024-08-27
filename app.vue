<script setup>
const currentTitle = ref('');
useHead({
	titleTemplate(pageTitle) {
		currentTitle.value = pageTitle ? `${pageTitle} | Zac Holly` : 'Zac Holly';
		return currentTitle.value;
	},
});
</script>

<template>
  <div class="font-poppins max-w-screen-2xl mx-auto">
    <NuxtLayout>
      <main>
        <h1 class="sr-only">
          {{ currentTitle }}
        </h1>
        <NuxtPage />
      </main>
    </NuxtLayout>

    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
