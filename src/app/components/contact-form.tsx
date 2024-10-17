"use client";

import {FormEvent, useState} from "react";
import SendEmailAction from "../actions/send-email-action";
import validateContent from "../validation/contact-form";
import {useSearchParams} from "next/navigation";
import {Toaster} from "react-hot-toast";
import toast from "react-hot-toast";
import {twMerge} from "tailwind-merge";

export default function ContactForm({variant}: {variant: string}) {
  const params = useSearchParams();
  const currentName = params.get("name");
  const currentEmail = params.get("email");
  const currentMessage = params.get("message");
  const [name, setName] = useState(currentName ? currentName : "");
  const [email, setEmail] = useState(currentEmail ? currentEmail : "");
  const [message, setMessage] = useState(currentMessage ? currentMessage : "");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const valid = validateContent(name, email, message);
    if (!valid.success) {
      toast.error(`${valid.error}`, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setName(name);
      setEmail(email);
      setMessage(message);
      setIsLoading(false);
      return;
    }
    const emailSent = await SendEmailAction(name, email, message, variant);
    if (!emailSent.success) {
      toast.error(`${emailSent.message}`, {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setName(name);
      setEmail(email);
      setMessage(message);
      setIsLoading(false);
      return;
    }
    toast.success("Email Sent", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl self-start">Contact Us </h1>
      <form action="" onSubmit={handleFormSubmit} encType="text/plain" className="flex flex-col justify-between py-6">
        <div className="flex flex-col justify-center w-full">
          <label htmlFor="name" className="py-1 text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="email" className="py-1 text-lg">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full"
          />
        </div>
        <div className="flex flex-col justify-center max-w-3xl">
          <label htmlFor="message" className="py-1 text-lg">
            Message
          </label>
          <textarea
            name="message"
            rows={8}
            cols={200}
            value={message}
            autoCorrect="on"
            onChange={(e) => setMessage(e.target.value)}
            required
            className="dark:bg-gray-800 rounded-md border-solid focus:border-gray-500 border-2 w-full resize-none"
          />
        </div>
        <div className="flex flex-row justify-center max-w-3xl">
          <input
            disabled={isLoading}
            type="submit"
            value="Send"
            className={twMerge(
              "m-4 rounded-md bg px-6 border-2 border-solid",
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            )}
          />
          <input
            disabled={isLoading}
            type="reset"
            value="Reset"
            className={twMerge(
              "m-4 rounded-md bg px-6 border-2 border-solid",
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            )}
          />
        </div>
      </form>
    </div>
  );
}
