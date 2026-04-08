"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showForm]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
      // Show form after first assistant response
      if (messages.length === 0) {
        setShowForm(true);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please call us at (831) 262-2847 or email alex@frontline.rentals for assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get the first user question and assistant answer for context
      const firstQuestion = messages.find(m => m.role === "user")?.content || "";
      const firstAnswer = messages.find(m => m.role === "assistant")?.content || "";

      const formDataToSend = new URLSearchParams();
      formDataToSend.append("form-name", "chat-lead");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("question", firstQuestion);
      formDataToSend.append("answer", firstAnswer);

      const response = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToSend.toString(),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setFormSubmitted(true);
      setShowForm(false);
    } catch {
      // Still show success to user
      setFormSubmitted(true);
      setShowForm(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-foreground text-white"
            : "bg-primary text-white hover:bg-primary-light"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl transition-all duration-300 sm:w-[400px]",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        {/* Header */}
        <div className="bg-primary p-4">
          <h3 className="font-heading font-bold text-white">
            Frontline Assistant
          </h3>
          <p className="text-sm text-white/70">
            Ask about equipment, pricing, or services
          </p>
        </div>

        {/* Messages */}
        <div className="h-[300px] overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <MessageCircle className="mb-3 h-10 w-10 text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground">
                Hi! I can help answer questions about our electric skid steers,
                drone services, and rentals.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {[
                  "What equipment do you have?",
                  "What are your rates?",
                  "Do you deliver?",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setInput(suggestion);
                      inputRef.current?.focus();
                    }}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                      message.role === "user"
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-muted px-4 py-2.5">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}

              {/* Lead Capture Form */}
              {showForm && !formSubmitted && !isLoading && (
                <div className="rounded-xl bg-teal-light/50 p-4">
                  <p className="mb-3 text-sm font-medium text-foreground">
                    Want us to follow up?
                  </p>
                  <form onSubmit={handleFormSubmit} className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                    <div className="flex gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
                      >
                        Skip
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Success Message */}
              {formSubmitted && (
                <div className="rounded-xl bg-lime/20 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-semibold">Thanks! We'll be in touch soon.</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="border-t border-border p-4">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white transition-all hover:bg-primary-light disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            AI-powered • Call{" "}
            <a href="tel:8312622847" className="text-primary hover:underline">
              (831) 262-2847
            </a>{" "}
            for immediate help
          </p>
        </form>
      </div>
    </>
  );
}
