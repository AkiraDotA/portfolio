export default defineNuxtRouteMiddleware(to => {
	if (to.meta.disabled) {
		return navigateTo('/');
	}
});
