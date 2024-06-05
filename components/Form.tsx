"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { Toaster, toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Email must be valid!" }).min(1),
  title: z.string().min(1, { message: "Title can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" }),
});

export function Form() {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors({
        email: validationErrors.email?._errors[0] || "",
        title: validationErrors.title?._errors[0] || "",
        message: validationErrors.message?._errors[0] || "",
      });
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-sm md:max-w-xl mx-auto p-4 md:p-0">
      <Toaster richColors />
      <p className="text-md max-w-lg text-center mt-6">
        If you are interested in hiring me, please fill out the form below.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="gitjohan5@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Landing Page"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            name="message"
            placeholder="Hey! I would need your skills to bring my idea to life. It needs to be beautiful, responsive, and user-friendly. I would love to work with you and build this site!"
            type="textarea"
            textarea={true}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </LabelInputContainer>

        <button
          className="relative group/btn block w-40 mx-auto rounded-md h-10 font-medium bg-[#131313] text-white hover:bg-[#FF5733] hover:text-black hover:shadow-xl hover:shadow-[#FF5733]/50 transition duration-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
