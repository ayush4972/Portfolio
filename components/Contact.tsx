"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [toast, setToast] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setToast("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setToast("Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setToast(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="section-shell scroll-mt-16 pb-28">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Let&apos;s Build Something</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card p-6 sm:p-8">
          <Mail className="h-8 w-8 text-accent" />
          <h3 className="mt-5 text-2xl font-semibold text-white">
            Reach Ayush
          </h3>
          <div className="mt-5 space-y-3 text-gray-400">
            <p>
              <a
                href="mailto:ayushchaudhary4972@gmail.com"
                className="transition hover:text-accent"
              >
                ayushchaudhary4972@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+9779804536105" className="transition hover:text-accent">
                +977 9804536105
              </a>
            </p>
            <p>B.Tech Computer Science, Vellore Institute of Technology</p>
            <p>CGPA: 8.17 | 2022 - 2026</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-gray-300">Name</span>
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-300">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-medium text-gray-300">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
              placeholder="Tell me about your project"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-hover hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {toast ? (
            <p
              role="status"
              className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-red-400/40 bg-red-400/10 text-red-200"
              }`}
            >
              {toast}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
