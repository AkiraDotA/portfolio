<script setup>
const currentTitle = ref('');
useHead({
	titleTemplate(pageTitle) {
		currentTitle.value = pageTitle ? `${pageTitle} | Zac Holly` : 'Zac Holly';
		return currentTitle.value;
	},
});

const { isMobileOrTablet } = useDevice();
onMounted(() => {
	if (isMobileOrTablet) {
		return;
	}

	VANTA.WAVES({
		el: '#vanta-background',
		mouseControls: false,
		touchControls: false,
		gyroControls: false,
		scale: 1.00,
		color: 0x0b0b0b,
		shininess: 0,
		waveHeight: 20.00,
		waveSpeed: 0.25,
		zoom: 0.80,
	});
});
</script>

<template>
  <div class="font-poppins max-w-screen-2xl mx-auto">
    <div id="vanta-background" class="w-full h-full fixed top-0 left-0 -z-10" />

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
