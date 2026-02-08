export async function validateRecaptcha(token) {
	const { recaptchaSecretKey } = useRuntimeConfig();

	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`,
		{ method: 'POST' },
	);

	const responseData = await response.json();

	return Boolean(responseData.success && responseData.score >= 0.5);
}
