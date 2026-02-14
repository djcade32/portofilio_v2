import { isValidEmail } from "@/components/utils";
import { sendMessage } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message)
    return NextResponse.json(
      { success: false, error: "Missing either name, email or, message in request body" },
      { status: 400 },
    );

  if (!isValidEmail(email))
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });

  try {
    await sendMessage({ email, name, message });
    console.log(`Message sent successfully`);
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
