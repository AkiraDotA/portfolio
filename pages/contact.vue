<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';

const contactFormData = reactive({
	name: null,
	email: null,
	subject: null,
	message: null,
});

const clearForm = () => {
	contactFormData.name = null;
	contactFormData.email = null;
	contactFormData.subject = null;
	contactFormData.message = null;
};

const validateForm = () => {
	const errors = [];
	if (!contactFormData.name) {
		errors.push({ path: 'name', message: 'Required' });
	}

	if (!contactFormData.email) {
		errors.push({ path: 'email', message: 'Required' });
	}

	if (!contactFormData.message) {
		errors.push({ path: 'message', message: 'Required' });
	}

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(contactFormData.email)) {
		errors.push({ path: 'email', message: 'Invalid email' });
	}

	return errors;
};

const { recaptchaLoaded, executeRecaptcha } = useReCaptcha();
const recaptcha = async () => {
	await recaptchaLoaded();
	return executeRecaptcha('submit-contact');
};

const toast = useToast();
const submitForm = async () => {
	const token = await recaptcha();

	const result = await $fetch('/api/validate-recaptcha', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: { token },
	});

	if (!result) {
		toast.add({
			id: 'contact-recaptcha-failed',
			title: 'Failed to Send Message',
			description: 'Please try again later.',
			color: 'red',
			icon: 'i-mdi-alert-circle',
			timeout: 5000,
		});
		clearForm();
		return;
	}

	const mail = useMail();
	mail.send({
		from: `${contactFormData.name} [${contactFormData.email}] via Contact Form <${contactFormData.email}>`,
		subject: contactFormData.subject || 'Website Contact',
		text: contactFormData.message,
	});

	toast.add({
		id: 'contact-message-sent',
		title: 'Message Sent',
		description: 'Your message has been sent successfully. I will get back to you at my earliest convenience.',
		color: 'green',
		icon: 'i-mdi-check-circle',
		timeout: 7500,
	});
	clearForm();
};
</script>

<template>
  <div>
    <SectionTitle>Contact</SectionTitle>
    <UForm
      class="space-y-6"
      :state="contactFormData"
      :validate="validateForm"
      :validate-on="['submit']"
      @submit="submitForm"
    >
      <UFormGroup
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
          required
        />
      </UFormGroup>

      <UFormGroup
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
          required
        />
      </UFormGroup>

      <UFormGroup
        label="Subject"
        name="subject"
        size="xl"
      >
        <UInput
          v-model.trim="contactFormData.subject"
          placeholder="Contacting you for..."
          size="lg"
        />
      </UFormGroup>

      <UFormGroup
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
          required
        />
      </UFormGroup>

      <div class="text-gray-500 text-xs !mt-2">
        This site is protected by reCAPTCHA and the Google
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          class="text-darkred hover:underline"
        >Privacy Policy</a> and
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          class="text-darkred hover:underline"
        >Terms of Service</a> apply.
      </div>

      <UButton
        type="submit"
        color="darkred"
        size="lg"
        class="!text-gray-300"
      >
        Submit
      </UButton>
    </UForm>
  </div>
</template>
