/* eslint-disable no-undef */

export default defineEventHandler(async event => {
	const { from, subject, text, token } = await readBody(event);

	const result = await $fetch('/api/validate-recaptcha', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { token },
	});

	if (!result) {
		return new Response('Invalid token', { status: 400 });
	}

	const { sendMail } = useNodeMailer();
	const { mailUsername } = useRuntimeConfig();
	const mailResult = await sendMail({ from, subject, text, to: mailUsername });
	return mailResult?.accepted?.length > 0 ? new Response('Mail sent', { status: 200 }) : new Response('Mail not sent', { status: 500 });
});
