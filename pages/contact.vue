<script setup>
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

const form = ref(null);
const submitForm = async () => {
	const mail = useMail();
	mail.send({
		from: `${contactFormData.name} [${contactFormData.email}] via Contact Form <${contactFormData.email}>`,
		subject: contactFormData.subject || 'Website Contact',
		text: contactFormData.message,
	});

	clearForm();
};
</script>

<template>
  <div>
    <SectionTitle>Contact</SectionTitle>
    <UForm
      ref="form"
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
          :rows="4"
          autoresize
          :maxrows="8"
          required
        />
      </UFormGroup>

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
