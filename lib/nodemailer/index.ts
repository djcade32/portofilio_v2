import nodemailer from "nodemailer";

type EmailMessageData = {
  email: string;
  name: string;
  message: string;
};

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASSWORD;

if (!email || !password) {
  throw new Error("Missing NODEMAILER_EMAIL or NODEMAILER_PASSWORD environment variables");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const sendMessage = async ({ email, name, message }: EmailMessageData) => {
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    replyTo: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `Portfolio Inquiry from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);
};
