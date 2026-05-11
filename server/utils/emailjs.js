const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const {
  EMAILJS_OTP_SERVICE_ID,
  EMAILJS_CONTACT_SERVICE_ID,
  EMAILJS_OTP_TEMPLATE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_AUTOREPLY_TEMPLATE_ID,
  EMAILJS_OTP_PUBLIC_KEY,
  EMAILJS_OTP_PRIVATE_KEY,
  EMAILJS_CONTACT_PUBLIC_KEY,
  EMAILJS_CONTACT_PRIVATE_KEY,
} = process.env;

function requireEnv(value, name) {
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

async function sendEmailJsTemplate({
  serviceId,
  templateId,
  templateParams,
  publicKey,
  privateKey,
}) {
  const userId = requireEnv(publicKey, "EMAILJS_PUBLIC_KEY");
  const accessToken = requireEnv(privateKey, "EMAILJS_PRIVATE_KEY");

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      accessToken,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`EmailJS failed: ${response.status} ${text}`);
  }
}

async function sendOtpEmail(email, otp) {
  const serviceId = requireEnv(
    EMAILJS_OTP_SERVICE_ID,
    "EMAILJS_OTP_SERVICE_ID",
  );
  const templateId = requireEnv(
    EMAILJS_OTP_TEMPLATE_ID,
    "EMAILJS_OTP_TEMPLATE_ID",
  );
  const publicKey = requireEnv(
    EMAILJS_OTP_PUBLIC_KEY,
    "EMAILJS_OTP_PUBLIC_KEY",
  );
  const privateKey = requireEnv(
    EMAILJS_OTP_PRIVATE_KEY,
    "EMAILJS_OTP_PRIVATE_KEY",
  );

  await sendEmailJsTemplate({
    serviceId,
    templateId,
    templateParams: { email, otp },
    publicKey,
    privateKey,
  });
}

async function sendContactEmails({ name, email, subject, message }) {
  const serviceId = requireEnv(
    EMAILJS_CONTACT_SERVICE_ID,
    "EMAILJS_CONTACT_SERVICE_ID",
  );
  const mainTemplateId = requireEnv(EMAILJS_TEMPLATE_ID, "EMAILJS_TEMPLATE_ID");
  const autoTemplateId = requireEnv(
    EMAILJS_AUTOREPLY_TEMPLATE_ID,
    "EMAILJS_AUTOREPLY_TEMPLATE_ID",
  );
  const publicKey = requireEnv(
    EMAILJS_CONTACT_PUBLIC_KEY,
    "EMAILJS_CONTACT_PUBLIC_KEY",
  );
  const privateKey = requireEnv(
    EMAILJS_CONTACT_PRIVATE_KEY,
    "EMAILJS_CONTACT_PRIVATE_KEY",
  );

  const templateParams = {
    name,
    email,
    subject,
    message,
  };

  await sendEmailJsTemplate({
    serviceId,
    templateId: mainTemplateId,
    templateParams,
    publicKey,
    privateKey,
  });
  await sendEmailJsTemplate({
    serviceId,
    templateId: autoTemplateId,
    templateParams,
    publicKey,
    privateKey,
  });
}

module.exports = {
  sendOtpEmail,
  sendContactEmails,
};
