"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { Send, CheckCircle2, Mail, Clock } from "lucide-react";

const projectTypes = [
  "Website Development",
  "Web App / SaaS Product",
  "MVP Build",
  "UI Engineering",
  "AI-Enabled Features",
  "Other",
];

const budgetRanges = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $60,000",
  "$60,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Flexible",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  brief: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  brief: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // Replace with actual key
          subject: `New Project Inquiry — ${form.projectType || "General"}`,
          from_name: form.name,
          ...form,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-sm px-4 py-3 text-sm text-white placeholder-[#444444] focus:outline-none focus:border-[#D81B60] transition-colors duration-200";

  const labelBase = "block text-xs font-semibold uppercase tracking-widest text-[#555555] mb-2";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center gap-5 py-20"
      >
        <div className="w-14 h-14 rounded-full bg-[#D81B60]/15 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-[#D81B60]" />
        </div>
        <h3 className="text-xl font-bold text-white">Message received.</h3>
        <p className="text-sm text-[#666666] max-w-xs">
          We review every inquiry and typically respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelBase}>Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="you@company.com"
            className={inputBase}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelBase}>Company / Project</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={set("company")}
          placeholder="Company name or project codename"
          className={inputBase}
        />
      </div>

      {/* Project type */}
      <div>
        <label htmlFor="projectType" className={labelBase}>Project Type *</label>
        <select
          id="projectType"
          required
          value={form.projectType}
          onChange={set("projectType")}
          className={`${inputBase} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select a type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className={labelBase}>Budget Range</label>
          <select
            id="budget"
            value={form.budget}
            onChange={set("budget")}
            className={`${inputBase} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelBase}>Timeline</label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={set("timeline")}
            className={`${inputBase} appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select a timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Brief */}
      <div>
        <label htmlFor="brief" className={labelBase}>Brief *</label>
        <textarea
          id="brief"
          required
          rows={5}
          value={form.brief}
          onChange={set("brief")}
          placeholder="Tell us what you're building, what the key challenge is, and what a successful outcome looks like."
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:hello@jenwin.com" className="underline">hello@jenwin.com</a>.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D81B60] text-white text-sm font-semibold rounded-sm hover:bg-[#b01550] hover:shadow-[0_0_28px_rgba(216,27,96,0.4)] transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
