"use client";

import { useState, useRef, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const quoteSchema = z.object({
  equipment: z.array(z.string()).min(1, "Select at least one option"),
  projectType: z.string().min(1, "Select a project type"),
  projectLocation: z.string().min(1, "Enter a project location"),
  zipCode: z.string().min(5, "Enter a valid zip code"),
  startDate: z.string().min(1, "Select a start date"),
  duration: z.string().min(1, "Select a duration"),
  deliveryPreference: z.string().min(1, "Select a delivery preference"),
  companyName: z.string().optional(),
  contactName: z.string().min(1, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  hearAboutUs: z.string().optional(),
  notes: z.string().optional(),
  needDvbeDocs: z.boolean().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const equipmentOptions = [
  { value: "elise-1200", label: "FirstGreen Elise 1200", price: "$525/day" },
  { value: "cbl-1200", label: "FirstGreen CBL 1200", price: "$450/day" },
  { value: "drone-lidar", label: "Drone LiDAR Services", price: "" },
  { value: "not-sure", label: "Not sure - need guidance", price: "" },
];

const projectTypes = [
  "Construction",
  "Landscaping",
  "Demolition",
  "Municipal/Government",
  "Other",
];

const durations = [
  "1 day",
  "2-3 days",
  "1 week",
  "2 weeks",
  "1 month",
  "Longer",
];

const deliveryOptions = [
  { value: "pickup-salinas", label: "Pickup from Salinas" },
  { value: "pickup-lodi", label: "Pickup from Lodi" },
  { value: "delivery", label: "Delivery needed" },
];

const hearAboutOptions = [
  "Search Engine",
  "Referral",
  "Government Database",
  "Social Media",
  "Trade Show",
  "Other",
];

const steps = [
  { title: "Equipment", description: "Select equipment" },
  { title: "Project", description: "Project details" },
  { title: "Contact", description: "Your information" },
];

export function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      equipment: [],
      needDvbeDocs: false,
    },
  });

  const selectedEquipment = watch("equipment") || [];

  // Focus error summary when submit error occurs
  useEffect(() => {
    if (submitError && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [submitError]);

  const toggleEquipment = (value: string) => {
    const current = selectedEquipment;
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue("equipment", updated, { shouldValidate: true });
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    if (currentStep === 0) fieldsToValidate = ["equipment"];
    if (currentStep === 1)
      fieldsToValidate = [
        "projectType",
        "projectLocation",
        "zipCode",
        "startDate",
        "duration",
        "deliveryPreference",
      ];

    const valid = await trigger(fieldsToValidate);
    if (valid) setCurrentStep((s) => Math.min(s + 1, 2));
  };

  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("form-name", "quote-request");
      formDataToSend.append("equipment", data.equipment.join(", "));
      formDataToSend.append("projectType", data.projectType);
      formDataToSend.append("projectLocation", data.projectLocation);
      formDataToSend.append("zipCode", data.zipCode);
      formDataToSend.append("startDate", data.startDate);
      formDataToSend.append("duration", data.duration);
      formDataToSend.append("deliveryPreference", data.deliveryPreference);
      formDataToSend.append("companyName", data.companyName || "");
      formDataToSend.append("contactName", data.contactName);
      formDataToSend.append("email", data.email);
      formDataToSend.append("phone", data.phone);
      formDataToSend.append("hearAboutUs", data.hearAboutUs || "");
      formDataToSend.append("notes", data.notes || "");
      formDataToSend.append("needDvbeDocs", data.needDvbeDocs ? "Yes" : "No");

      const response = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToSend.toString(),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "There was an error submitting your request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-lg text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <Check className="h-8 w-8 text-success" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Quote Request Submitted
        </h2>
        <p className="mt-3 text-muted-foreground">
          We&apos;ll respond within 1 business day. If you need a faster
          response, call us directly.
        </p>
        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
          <p className="font-mono text-sm text-muted-foreground">
            (831) 262-2847
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            alex@frontline.rentals
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Steps */}
      <nav aria-label="Quote form progress" className="mb-10">
        <ol className="flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <li key={step.title} className="flex items-center gap-2">
              <div
                aria-current={index === currentStep ? "step" : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  index <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index < currentStep ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <span aria-hidden="true">{index + 1}</span>
                )}
                <span className="sr-only">
                  Step {index + 1}: {step.title}
                  {index < currentStep ? " (completed)" : index === currentStep ? " (current)" : ""}
                </span>
              </div>
              <span
                aria-hidden="true"
                className={`hidden text-sm sm:inline ${
                  index <= currentStep
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Step 1: Equipment Selection */}
        {currentStep === 0 && (
          <fieldset>
            <legend className="mb-2 font-heading text-xl font-semibold text-foreground">
              What equipment do you need?
            </legend>
            <p className="mb-6 text-sm text-muted-foreground">
              Select all that apply
            </p>
            <div className="space-y-3" role="group" aria-describedby={errors.equipment ? `${formId}-equipment-error` : undefined}>
              {equipmentOptions.map((option) => {
                const isSelected = selectedEquipment.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="checkbox"
                    aria-checked={isSelected}
                    onClick={() => toggleEquipment(option.value)}
                    className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className={`flex h-5 w-5 items-center justify-center rounded border ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      >
                        {isSelected && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">
                        {option.label}
                      </span>
                    </div>
                    {option.price && (
                      <span className="font-mono text-sm text-muted-foreground">
                        {option.price}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.equipment && (
              <p id={`${formId}-equipment-error`} className="mt-2 text-sm text-destructive" role="alert">
                {errors.equipment.message}
              </p>
            )}
          </fieldset>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 1 && (
          <fieldset>
            <legend className="mb-6 font-heading text-xl font-semibold text-foreground">
              Tell us about your project
            </legend>
            <div className="space-y-4">
              <div>
                <label htmlFor={`${formId}-projectType`} className="mb-1.5 block text-sm font-medium text-foreground">
                  Project Type <span className="text-destructive">*</span>
                </label>
                <select
                  id={`${formId}-projectType`}
                  {...register("projectType")}
                  aria-invalid={errors.projectType ? "true" : undefined}
                  aria-describedby={errors.projectType ? `${formId}-projectType-error` : undefined}
                  className="h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p id={`${formId}-projectType-error`} className="mt-1 text-sm text-destructive" role="alert">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-projectLocation`} className="mb-1.5 block text-sm font-medium text-foreground">
                    Project Location <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={`${formId}-projectLocation`}
                    {...register("projectLocation")}
                    placeholder="City or street address"
                    aria-invalid={errors.projectLocation ? "true" : undefined}
                    aria-describedby={errors.projectLocation ? `${formId}-projectLocation-error` : undefined}
                  />
                  {errors.projectLocation && (
                    <p id={`${formId}-projectLocation-error`} className="mt-1 text-sm text-destructive" role="alert">
                      {errors.projectLocation.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={`${formId}-zipCode`} className="mb-1.5 block text-sm font-medium text-foreground">
                    Zip Code <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={`${formId}-zipCode`}
                    {...register("zipCode")}
                    placeholder="93901"
                    inputMode="numeric"
                    maxLength={10}
                    aria-invalid={errors.zipCode ? "true" : undefined}
                    aria-describedby={errors.zipCode ? `${formId}-zipCode-error` : undefined}
                  />
                  {errors.zipCode && (
                    <p id={`${formId}-zipCode-error`} className="mt-1 text-sm text-destructive" role="alert">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-startDate`} className="mb-1.5 block text-sm font-medium text-foreground">
                    Preferred Start Date <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={`${formId}-startDate`}
                    type="date"
                    {...register("startDate")}
                    aria-invalid={errors.startDate ? "true" : undefined}
                    aria-describedby={errors.startDate ? `${formId}-startDate-error` : undefined}
                  />
                  {errors.startDate && (
                    <p id={`${formId}-startDate-error`} className="mt-1 text-sm text-destructive" role="alert">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={`${formId}-duration`} className="mb-1.5 block text-sm font-medium text-foreground">
                    Estimated Duration <span className="text-destructive">*</span>
                  </label>
                  <select
                    id={`${formId}-duration`}
                    {...register("duration")}
                    aria-invalid={errors.duration ? "true" : undefined}
                    aria-describedby={errors.duration ? `${formId}-duration-error` : undefined}
                    className="h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
                  >
                    <option value="">Select duration</option>
                    {durations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.duration && (
                    <p id={`${formId}-duration-error`} className="mt-1 text-sm text-destructive" role="alert">
                      {errors.duration.message}
                    </p>
                  )}
                </div>
              </div>

              <fieldset>
                <legend className="mb-1.5 text-sm font-medium text-foreground">
                  Delivery Preference <span className="text-destructive">*</span>
                </legend>
                <div className="space-y-2" role="radiogroup" aria-describedby={errors.deliveryPreference ? `${formId}-delivery-error` : undefined}>
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-md border border-border p-3 hover:border-primary/30 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("deliveryPreference")}
                        className="h-4 w-4 text-primary accent-primary"
                      />
                      <span className="text-sm text-foreground">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.deliveryPreference && (
                  <p id={`${formId}-delivery-error`} className="mt-1 text-sm text-destructive" role="alert">
                    {errors.deliveryPreference.message}
                  </p>
                )}
              </fieldset>
            </div>
          </fieldset>
        )}

        {/* Step 3: Contact Information */}
        {currentStep === 2 && (
          <fieldset>
            <legend className="mb-6 font-heading text-xl font-semibold text-foreground">
              Contact Information
            </legend>
            <div className="space-y-4">
              <div>
                <label htmlFor={`${formId}-companyName`} className="mb-1.5 block text-sm font-medium text-foreground">
                  Company Name{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id={`${formId}-companyName`}
                  {...register("companyName")}
                  placeholder="Your company"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor={`${formId}-contactName`} className="mb-1.5 block text-sm font-medium text-foreground">
                  Contact Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id={`${formId}-contactName`}
                  {...register("contactName")}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={errors.contactName ? "true" : undefined}
                  aria-describedby={errors.contactName ? `${formId}-contactName-error` : undefined}
                />
                {errors.contactName && (
                  <p id={`${formId}-contactName-error`} className="mt-1 text-sm text-destructive" role="alert">
                    {errors.contactName.message}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id={`${formId}-phone`}
                    type="tel"
                    {...register("phone")}
                    placeholder="(555) 555-5555"
                    autoComplete="tel"
                    aria-invalid={errors.phone ? "true" : undefined}
                    aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                  />
                  {errors.phone && (
                    <p id={`${formId}-phone-error`} className="mt-1 text-sm text-destructive" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor={`${formId}-hearAboutUs`} className="mb-1.5 block text-sm font-medium text-foreground">
                  How did you hear about us?{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <select
                  id={`${formId}-hearAboutUs`}
                  {...register("hearAboutUs")}
                  className="h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50"
                >
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={`${formId}-notes`} className="mb-1.5 block text-sm font-medium text-foreground">
                  Additional Notes{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <Textarea
                  id={`${formId}-notes`}
                  {...register("notes")}
                  placeholder="Anything else we should know about your project?"
                  rows={3}
                />
              </div>

              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-md border border-border p-3 hover:border-primary/30 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input
                  type="checkbox"
                  {...register("needDvbeDocs")}
                  className="h-4 w-4 rounded accent-primary"
                />
                <span className="text-sm text-foreground">
                  I need DVBE documentation for my bid
                </span>
              </label>
            </div>

            {submitError && (
              <div
                ref={errorSummaryRef}
                tabIndex={-1}
                role="alert"
                className="mt-4 rounded-md border border-destructive/20 bg-destructive/5 p-3 focus:outline-none focus:ring-2 focus:ring-destructive/50"
              >
                <p className="text-sm text-destructive">{submitError}</p>
              </div>
            )}
          </fieldset>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {currentStep > 0 ? (
            <Button type="button" variant="outline" onClick={prevStep}>
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden="true" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 2 ? (
            <Button type="button" onClick={nextStep}>
              Next
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
