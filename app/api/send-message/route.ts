import { sendMessage } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await sendMessage({ email, name, message });
    console.log(`Sent email from ${email}`);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error?.message || error);
    console.error("Error details:", {
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      command: error?.command,
    });

    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send" },
      { status: 500 },
    );
  }
}
