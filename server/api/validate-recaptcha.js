/* eslint-disable no-undef */

export default defineEventHandler(async event => {
	const { token: recaptchaToken } = await readBody(event);
	const { recaptchaSecretKey } = useRuntimeConfig();

	const apiRoute = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;
	console.log('apiRoute:', apiRoute);
	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
		{
			method: 'POST',
		},
	);

	const responseData = await response.json();
	console.log('reCAPTCHA API Response:', response);
	console.log('reCAPTCHA API Response JSON:', responseData);

	// The score dictates how likely it is that the user is a bot.
	return Boolean(responseData.success && responseData.score >= 0.5);
});
