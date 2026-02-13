export async function sendMessage(name: string, email: string, message: string) {
  const response = await fetch("/api/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message, name }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}
