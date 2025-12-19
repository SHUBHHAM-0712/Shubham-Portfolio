type ContactPayload = {
  name: string
  email: string
  message: string
}

const inMemoryMessages: Array<ContactPayload & { id: number; timestamp: string }> = []

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function sendContactMessage(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.message) {
    throw new Error('All fields are required')
  }

  await delay(700)

  const entry = {
    ...payload,
    id: Date.now(),
    timestamp: new Date().toISOString(),
  }

  inMemoryMessages.unshift(entry)
  return entry
}

export function getContactMessages() {
  return [...inMemoryMessages]
}
