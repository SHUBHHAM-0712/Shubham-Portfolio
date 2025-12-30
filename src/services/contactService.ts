import emailjs from '@emailjs/browser'

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

export async function sendContactMessage(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    throw new Error('All fields are required')
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !AUTOREPLY_TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('Email service is not configured correctly')
  }

  const templateParams = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
  }

  // Send main notification to you
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  })

  // Send auto-reply to the user
  await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  })

  return {
    ...payload,
    timestamp: new Date().toISOString(),
  }
}
