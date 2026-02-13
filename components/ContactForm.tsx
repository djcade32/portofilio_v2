"use client";

import React, { FormEvent, useMemo, useState } from "react";
import Input from "./core/Input";
import Button from "./core/Button";
import Textarea from "./core/Textarea";
import { BsFillSendFill } from "react-icons/bs";
import { sendMessage } from "@/api/contactAPI";
import { ToastContainer, toast } from "react-toastify";
import { BadgeCheck, CircleAlert } from "lucide-react";

function isValidEmail(email: string) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isValidForm: boolean = useMemo(() => {
    return !!(name.length && email.length && message.length && isValidEmail(email));
  }, [name, email, message]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault();
    let success = undefined;
    try {
      success = await sendMessage(name, email, message);
      if (success) {
        setSubmitting(false);
        clearForm();
      }
    } catch (error) {
      console.log(`Error sending email from ${email}: ${error}`);
    } finally {
      showToast(success ? "success" : "error");
      success
        ? console.log(`Sent email from ${email}`)
        : console.log(`Error sending email from ${email}`);
    }
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  const showToast = (status: "success" | "error") =>
    status
      ? toast.success("Sent Message", {
          position: "bottom-right",
          className: "bg-card! border! border-secondary! text-foreground!",
          hideProgressBar: true,
          closeButton: false,
        })
      : toast.error("Error Sending Message", {
          position: "bottom-right",
          className: "bg-card! border! border-secondary! text-foreground!",
          hideProgressBar: true,
          closeButton: false,
        });

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Textarea
        rows={6}
        placeholder="Tell me about your project"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className="w-full flex justify-center items-center gap-2"
        type="submit"
        disabled={!isValidForm || submitting}
      >
        {submitting ? (
          <p>Sending...</p>
        ) : (
          <>
            <p>Send Message</p>
            <BsFillSendFill />
          </>
        )}
      </Button>
      <ToastContainer
        icon={({ type }) => {
          switch (type) {
            case "error":
              return <CircleAlert className="stroke-red-500" />;
            case "success":
              return <BadgeCheck className="stroke-accent" />;
            default:
              return null;
          }
        }}
      />
    </form>
  );
};

export default ContactForm;
