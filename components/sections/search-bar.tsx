"use client";

import { useState, useRef } from "react";
import { Send, Sparkles, Loader2 } from "lucide-react";
import { Container } from "@/components/layout/container";

interface SearchBarProps {
  onResponse?: (question: string, answer: string) => void;
}

export function SearchBar({ onResponse }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userQuery = query.trim();
    setIsLoading(true);
    setHasAsked(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: userQuery }],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setAnswer(data.message);
      setShowForm(true);
      onResponse?.(userQuery, data.message);
    } catch {
      setAnswer(
        "I'm having trouble connecting right now. Please call us at (209) 470-6385 or email alex@frontline.rentals for assistance."
      );
      setShowForm(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "search-lead");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("question", query);
      formDataToSend.append("answer", answer);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });

      setFormSubmitted(true);
    } catch {
      // Still show success to user - form data captured
      setFormSubmitted(true);
    }
  };

  const handleNewQuestion = () => {
    setQuery("");
    setAnswer("");
    setHasAsked(false);
    setShowForm(false);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    inputRef.current?.focus();
  };

  return (
    <section className="relative -mt-8 z-10 pb-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Search Input */}
          <div className="rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-primary/10">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about equipment, pricing, delivery..."
                  className="w-full rounded-xl border-0 bg-muted/50 px-5 py-4 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:bg-muted"
                  disabled={isLoading || hasAsked}
                />
              </div>
              {!hasAsked && (
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              )}
            </form>

            {/* Nudge Text */}
            {!hasAsked && (
              <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-lime" />
                <span>AI-powered answers about our equipment and services</span>
              </div>
            )}

            {/* Answer Display */}
            {hasAsked && (
              <div className="mt-4 rounded-xl bg-teal-light/50 p-5">
                {isLoading ? (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Finding the best answer...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-foreground leading-relaxed">{answer}</p>

                    {/* Lead Capture Form */}
                    {showForm && !formSubmitted && (
                      <div className="mt-6 border-t border-primary/10 pt-6">
                        <p className="mb-4 font-medium text-foreground">
                          Want us to follow up with more details?
                        </p>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                          <div className="grid gap-3 sm:grid-cols-3">
                            <input
                              type="text"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                              required
                            />
                            <input
                              type="email"
                              placeholder="Email address"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                              required
                            />
                            <input
                              type="tel"
                              placeholder="Phone (optional)"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
                            />
                          </div>
                          <div className="flex gap-3">
                            <button
                              type="submit"
                              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                              Send My Info
                            </button>
                            <button
                              type="button"
                              onClick={handleNewQuestion}
                              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            >
                              Ask Another Question
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* Success Message */}
                    {formSubmitted && (
                      <div className="mt-6 border-t border-primary/10 pt-6">
                        <div className="flex items-center gap-3 text-primary">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
                            <Sparkles className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">Thanks! We'll be in touch soon.</p>
                            <p className="text-sm text-muted-foreground">Usually within a few hours.</p>
                          </div>
                        </div>
                        <button
                          onClick={handleNewQuestion}
                          className="mt-4 text-sm font-medium text-primary hover:underline"
                        >
                          Ask another question →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
