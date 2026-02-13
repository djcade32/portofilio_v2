import nodemailer from "nodemailer";

type EmailMessageData = {
  email: string;
  name: string;
  message: string;
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
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
