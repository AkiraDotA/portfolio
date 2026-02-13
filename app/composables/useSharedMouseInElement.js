export function useSharedMouseInElement(target) {
	const { x: mouseX, y: mouseY, scrollX, scrollY } = useSharedMouse();

	const resolveEl = () => toValue(target)?.$el ?? toValue(target);

	const elementX = computed(() => {
		scrollX.value;
		scrollY.value;
		const el = resolveEl();
		if (!el) return 0;
		return mouseX.value - el.getBoundingClientRect().left;
	});

	const elementY = computed(() => {
		scrollX.value;
		scrollY.value;
		const el = resolveEl();
		if (!el) return 0;
		return mouseY.value - el.getBoundingClientRect().top;
	});

	const isOutside = computed(() => {
		scrollX.value;
		scrollY.value;
		const el = resolveEl();
		if (!el) return true;
		const rect = el.getBoundingClientRect();
		return mouseX.value < rect.left || mouseX.value > rect.right
			|| mouseY.value < rect.top || mouseY.value > rect.bottom;
	});

	return { elementX, elementY, isOutside };
}
