"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { QuestionSchema } from "@/lib/validation";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", `${process.env.NEXT_PUBLIC_ACCESS_KEY}`);
      formData.append("name", values.title);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("phone", values.phone);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("I will get back to you ASAP.");
        form.reset();
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }

      const myTimeout = setTimeout(() => {
        if (myTimeout) clearTimeout(myTimeout);
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-[75%] max-lg:w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus text-2xl paragraph-regular outline-none"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <div className="line w-full h-[1px] bg-black mt-2"></div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl className="mt-3.5">
                <Input
                  type="text"
                  className="no-focus text-2xl paragraph-regular outline-none"
                  placeholder="Phone number"
                  {...field}
                />
              </FormControl>
              <div className="line w-full h-[1px] bg-black mt-2"></div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl className="mt-3.5">
                <Input
                  type="email"
                  className="no-focus text-2xl paragraph-regular outline-none"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <div className="line w-full h-[1px] bg-black mt-2"></div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus text-2xl paragraph-regular outline-none"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <div className="line w-full h-[1px] bg-black mt-2"></div>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className="text-center text-green-500">{submitMessage}</span>
        <div className="flex justify-end">
          <Button
            disabled={isSubmitting}
            className="w-full cursor-pointer text-xl transition-all hover:text-yellow-500 rounded-none py-8 ll"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
