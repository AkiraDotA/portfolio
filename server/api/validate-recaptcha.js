/* eslint-disable no-undef */

export default defineEventHandler(async event => {
	const { token: recaptchaToken } = await readBody(event);
	const { recaptchaSecretKey } = useRuntimeConfig();

	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
		{
			method: 'POST',
		},
	);

	const responseData = await response.json();

	// The score dictates how likely it is that the user is a bot.
	return Boolean(responseData.success && responseData.score >= 0.5);
});
