<script setup>
const currentTitle = ref('');
useSeoMeta({
	titleTemplate(pageTitle) {
		currentTitle.value = pageTitle ? `${pageTitle} | Zac Holly` : 'Zac Holly';
		return currentTitle.value;
	},
	ogSiteName: 'Zac Holly - Portfolio',
	ogUrl: 'https://zacholly.dev',
	ogImage: 'https://zacholly.dev/_nuxt/profile.BR-H94gZ.png',
});

const { isMobileOrTablet } = useDevice();
const colorMode = useColorMode();
const showVanta = ref(true);
const vantaEffect = ref(null);

const getVantaColors = (mode) => {
	if (mode === 'dark') {
		return { color: 0x0b0b0b, backgroundColor: 0x121212 };
	}
	return { color: 0xd0d0d0, backgroundColor: 0xf0f0f0 };
};

onMounted(() => {
	if (isMobileOrTablet.value) {
		return;
	}

	window.addEventListener('beforeunload', () => {
		showVanta.value = false;
	});

	const colors = getVantaColors(colorMode.value);
	vantaEffect.value = VANTA.WAVES({
		el: '#vanta-background',
		mouseControls: false,
		touchControls: false,
		gyroControls: false,
		scale: 1.00,
		color: colors.color,
		backgroundColor: colors.backgroundColor,
		shininess: 0,
		waveHeight: 20.00,
		waveSpeed: 0.25,
		zoom: 0.80,
	});

	watch(() => colorMode.value, (mode) => {
		if (!vantaEffect.value) return;
		const newColors = getVantaColors(mode);
		vantaEffect.value.setOptions({
			color: newColors.color,
			backgroundColor: newColors.backgroundColor,
		});
	});
});
</script>

<template>
	<UApp>
		<div class="font-poppins max-w-screen-2xl mx-auto">
			<div
				v-if="showVanta"
				id="vanta-background"
				class="w-full h-full fixed top-0 left-0 -z-10"
			/>

			<NuxtLayout>
				<main>
					<h1 class="sr-only">
						{{ currentTitle }}
					</h1>
					<NuxtPage />
				</main>
			</NuxtLayout>
		</div>
	</UApp>
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
