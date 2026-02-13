import { createSharedComposable, useMouse, useWindowScroll } from '@vueuse/core';

export const useSharedMouse = createSharedComposable(() => {
	const { x, y } = useMouse({ type: 'client' });
	const { x: scrollX, y: scrollY } = useWindowScroll();
	return { x, y, scrollX, scrollY };
});
