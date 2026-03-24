"use client";

import { useState, useRef, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(1, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(1, "Enter a message"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "General Inquiry",
  "Quote Request",
  "DVBE Documentation",
  "Other",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Focus error summary when submit error occurs
  useEffect(() => {
    if (submitError && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [submitError]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "There was an error sending your message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
          <Check className="h-6 w-6 text-success" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          id={`${formId}-name`}
          {...register("name")}
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
        />
        {errors.name && (
          <p id={`${formId}-name-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id={`${formId}-email`}
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-sm font-medium text-foreground">
          Phone <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id={`${formId}-phone`}
          type="tel"
          {...register("phone")}
          placeholder="(555) 555-5555"
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor={`${formId}-subject`} className="mb-1.5 block text-sm font-medium text-foreground">
          Subject <span className="text-destructive">*</span>
        </label>
        <select
          id={`${formId}-subject`}
          {...register("subject")}
          aria-invalid={errors.subject ? "true" : undefined}
          aria-describedby={errors.subject ? `${formId}-subject-error` : undefined}
          className="h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id={`${formId}-subject-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id={`${formId}-message`}
          {...register("message")}
          placeholder="How can we help?"
          rows={5}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-1 text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-destructive/20 bg-destructive/5 p-3 focus:outline-none focus:ring-2 focus:ring-destructive/50"
        >
          <p className="text-sm text-destructive">{submitError}</p>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
