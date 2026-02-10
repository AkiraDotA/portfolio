<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';

useSeoMeta({
	title: 'Contact Me',
	ogTitle: 'Contact Me | Zac Holly',
	ogDescription: 'Contact Zac Holly for inquiries, general feedback, or simply to get in touch. Fill out the form on this page to send him a message.',
	description: 'Contact Zac Holly for inquiries, general feedback, or simply to get in touch. Fill out the form on this page to send him a message.',
});

const contactFormData = reactive({
	name: null,
	email: null,
	subject: null,
	message: null,
});

const submissionLoading = ref(false);
const clearForm = () => {
	contactFormData.name = null;
	contactFormData.email = null;
	contactFormData.subject = null;
	contactFormData.message = null;
	submissionLoading.value = false;
};

const validateForm = () => {
	const errors = [];
	if (!contactFormData.name) {
		errors.push({ name: 'name', message: 'Required' });
	}

	if (!contactFormData.email) {
		errors.push({ name: 'email', message: 'Required' });
	}

	if (!contactFormData.message) {
		errors.push({ name: 'message', message: 'Required' });
	}

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(contactFormData.email)) {
		errors.push({ name: 'email', message: 'Invalid email' });
	}

	return errors;
};

const { recaptchaLoaded, executeRecaptcha } = useReCaptcha();
const recaptcha = async () => {
	await recaptchaLoaded();
	return executeRecaptcha('contact');
};

const toast = useToast();
const submitForm = async () => {
	submissionLoading.value = true;

	const token = await recaptcha();
	const mailData = {
		from: `${contactFormData.name} [${contactFormData.email}] via Contact Form <${contactFormData.email}>`,
		subject: contactFormData.subject || 'Website Contact',
		text: contactFormData.message,
		token,
	};

	try {
		const result = await $fetch('/api/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: mailData,
		});

		if (!result) {
			throw new Error('Failed to send message');
		}

		toast.add({
			id: 'contact-message-sent',
			title: 'Message Sent',
			description: 'Your message has been sent successfully. I will get back to you at my earliest convenience.',
			color: 'success',
			icon: 'i-mdi-check-circle',
			duration: 7500,
		});
	}
	catch (error) {
		console.error(error);
		toast.add({
			id: 'contact-recaptcha-failed',
			title: 'Failed to Send Message',
			description: 'Please try again later.',
			color: 'error',
			icon: 'i-mdi-alert-circle',
			duration: 5000,
		});
	}
	finally {
		clearForm();
	}
};
</script>

<template>
	<div>
		<SectionTitle>Contact Me</SectionTitle>

		<div
			class="border-neutral-300 dark:border-neutral-700 border-2 my-8"
			role="presentation"
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762032.1517892706!2d-88.59300068467155!3d41.74882010539418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e444c8c99e083%3A0xda7b840a9a579334!2sChicago%20Metropolitan%20Area!5e0!3m2!1sen!2sus!4v1724714568712!5m2!1sen!2sus"
				class="grayscale dark:invert w-full h-80 max-sm:h-64"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				tabindex="-1"
			/>
		</div>

		<UForm
			class="space-y-6"
			:state="contactFormData"
			:validate="validateForm"
			:validate-on="['submit']"
			@submit="submitForm"
		>
			<UFormField
				label="Your Name"
				name="name"
				size="xl"
				required
			>
				<UInput
					v-model.trim="contactFormData.name"
					placeholder="John Doe"
					size="lg"
					icon="i-mdi-account-outline"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				label="Your Email"
				name="email"
				size="xl"
				required
			>
				<UInput
					v-model.trim="contactFormData.email"
					placeholder="johndoe@example.com"
					size="lg"
					type="email"
					icon="i-mdi-email-outline"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				label="Subject"
				name="subject"
				size="xl"
			>
				<UInput
					v-model.trim="contactFormData.subject"
					placeholder="Contacting you for..."
					size="lg"
					class="w-full"
				/>
			</UFormField>

			<UFormField
				label="Message"
				name="message"
				size="xl"
				required
			>
				<UTextarea
					v-model.trim="contactFormData.message"
					placeholder="Hello, I would like to discuss..."
					size="lg"
					:rows="5"
					autoresize
					:maxrows="10"
					class="w-full"
				/>
			</UFormField>

			<div class="text-neutral-400 dark:text-neutral-500 text-xs !mt-2">
				This site is protected by reCAPTCHA and the Google
				<a
					href="https://policies.google.com/privacy"
					target="_blank"
					class="link-accent"
				>Privacy Policy</a> and
				<a
					href="https://policies.google.com/terms"
					target="_blank"
					class="link-accent"
				>Terms of Service</a> apply.
			</div>

			<UButton
				type="submit"
				size="lg"
				icon="i-mdi-send-outline"
				class="flex !text-neutral-100 ms-auto duration-300 max-sm:w-full justify-center"
				:loading="submissionLoading"
			>
				Submit
			</UButton>
		</UForm>
	</div>
</template>
