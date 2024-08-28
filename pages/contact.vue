<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';

useHead({
	title: 'Contact Me',
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
			color: 'green',
			icon: 'i-mdi-check-circle',
			timeout: 7500,
		});
	} catch (error) {
		toast.add({
			id: 'contact-recaptcha-failed',
			title: 'Failed to Send Message',
			description: 'Please try again later.',
			color: 'red',
			icon: 'i-mdi-alert-circle',
			timeout: 5000,
		});
	} finally {
		clearForm();
	}
};
</script>

<template>
  <div>
    <SectionTitle>Contact Me</SectionTitle>

    <div
      class="border-gray-700 border-2 my-8"
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
        icon="i-mdi-send-outline"
        class="flex !text-gray-300 ms-auto duration-300 max-sm:w-full justify-center"
        :loading="submissionLoading"
      >
        Submit
      </UButton>
    </UForm>
  </div>
</template>
