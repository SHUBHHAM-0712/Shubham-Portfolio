type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
  otp: string
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined) ||
  ""

async function requestApi(path: string, body: unknown) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    const message =
      typeof errorBody.message === "string"
        ? errorBody.message
        : "Request failed"
    const error = new Error(message) as Error & { retryAfterMs?: number }
    if (typeof errorBody.retryAfterMs === "number") {
      error.retryAfterMs = errorBody.retryAfterMs
    }
    throw error
  }

  return response.json().catch(() => ({}))
}

export async function sendOtp(email: string) {
  if (!email) {
    throw new Error("Email is required")
  }

  return requestApi("/api/send-otp", { email })
}

export async function sendContactMessage(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    throw new Error("All fields are required")
  }

  if (!payload.otp) {
    throw new Error("OTP is required")
  }

  const response = await requestApi("/api/send-contact", payload)

  return {
    ...payload,
    timestamp: new Date().toISOString(),
    ...response,
  }
}
