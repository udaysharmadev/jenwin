"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check, Globe, Zap, Rocket, Cpu, Clock, Calendar, Coffee, Loader2 } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { createClient } from "@/utils/supabase/client";

// ─── STEP DEFINITIONS ──────────────────────────────────────────────
const STEPS = [
  {
    id: "type",
    question: "What are you looking to build?",
    hint: "Choose the option that fits best",
    type: "choice" as const,
    options: [
      { id: "website", label: "Marketing Website", desc: "Brand site, landing page, portfolio", icon: Globe },
      { id: "webapp", label: "Web Application", desc: "Dashboard, portal, SaaS product", icon: Zap },
      { id: "mvp", label: "MVP / Startup", desc: "Zero to launch, fast", icon: Rocket },
      { id: "ai", label: "AI Product", desc: "LLM integrations, AI workflows", icon: Cpu },
    ],
  },
  {
    id: "timeline",
    question: "When do you need it live?",
    hint: "Be honest — we'll make it work",
    type: "choice" as const,
    options: [
      { id: "asap", label: "ASAP", desc: "< 4 weeks, let's sprint", icon: Rocket },
      { id: "medium", label: "1–2 months", desc: "Solid timeline, great quality", icon: Calendar },
      { id: "flexible", label: "3+ months", desc: "We can be thorough", icon: Clock },
      { id: "exploring", label: "Just exploring", desc: "No rush, let's talk first", icon: Coffee },
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    hint: "No wrong answers — helps us scope correctly",
    type: "choice" as const,
    options: [
      { id: "small", label: "Under ₹1 Lakh", desc: "~$1,200 USD", icon: null },
      { id: "medium", label: "₹1L – ₹3L", desc: "~$1,200 – $3,600", icon: null },
      { id: "large", label: "₹3L – ₹7L", desc: "~$3,600 – $8,400", icon: null },
      { id: "enterprise", label: "₹7L+", desc: "Let's build something big", icon: null },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge?",
    hint: "This helps us prepare for the call",
    type: "choice" as const,
    options: [
      { id: "launch", label: "Need to launch fast", desc: "Time is the key constraint", icon: Rocket },
      { id: "agency", label: "Previous agency failed me", desc: "Need someone accountable", icon: null },
      { id: "scratch", label: "Starting from scratch", desc: "Just an idea right now", icon: null },
      { id: "scaling", label: "Scaling what exists", desc: "Need to level up", icon: null },
    ],
  },
  {
    id: "contact",
    question: "How should we reach you?",
    hint: "We'll send confirmation to your email",
    type: "form" as const,
  },
  {
    id: "meeting",
    question: "Pick a time for our call",
    hint: "30-min strategy call · No sales pitch",
    type: "meeting" as const,
  },
];

// ─── PROPS ──────────────────────────────────────────────────────────
interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── COMPONENT ──────────────────────────────────────────────────────
export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", project: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentStep = STEPS[step];
  const totalSteps = STEPS.length;
  const progress = ((step) / (totalSteps - 1)) * 100;

  function selectChoice(stepId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }));
    // Auto-advance after short delay
    setTimeout(() => goNext(), 300);
  }

  function goNext() {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    const supabase = createClient();
    
    // Map answer IDs to actual labels
    const projectType = STEPS[0].options?.find(o => o.id === answers.type)?.label || 'N/A';
    const timeline = STEPS[1].options?.find(o => o.id === answers.timeline)?.label || 'N/A';
    const budget = STEPS[2].options?.find(o => o.id === answers.budget)?.label || 'N/A';
    const challenge = STEPS[3].options?.find(o => o.id === answers.challenge)?.label || 'N/A';

    await supabase.from("leads").insert({
      name: contact.name,
      email: contact.email,
      project_name: contact.project,
      project_type: projectType,
      timeline: timeline,
      budget: budget,
      challenge: challenge,
    });

    setIsSubmitting(false);
    goNext();
  }

  function handleClose() {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setStep(0);
      setAnswers({});
      setContact({ name: "", email: "", project: "" });
    }, 400);
  }

  const canProceedForm =
    contact.name.trim().length > 1 && contact.email.includes("@");

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.96 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 md:inset-x-auto top-[5%] md:top-1/2 md:-translate-y-1/2 z-[301] max-w-xl mx-auto w-full md:w-[600px]"
          >
            <div className="bg-[#080808] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)] max-h-[90vh] flex flex-col">

              {/* Top bar */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#111]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {STEPS.map((_, i) => (
                      <div
                        key={i}
                        className="h-1 rounded-full transition-all duration-300"
                        style={{
                          width: i === step ? 24 : 6,
                          background: i <= step ? "#DC143C" : "#1e1e1e",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest">
                    {step + 1} / {totalSteps}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1e1e1e] text-[#555] hover:text-white hover:border-[#333] transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Content area */}
              <div className="min-h-[420px] overflow-y-auto flex-1 flex flex-col">
                  {/* ── STEP CONTENT ── */}
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-1 flex flex-col p-5 md:p-8"
                    >
                      {/* Question */}
                      <div className="mb-6">
                        <p className="text-[10px] font-mono text-[#DC143C] uppercase tracking-[0.2em] mb-3">
                          {currentStep.hint}
                        </p>
                        <h2 className="text-xl lg:text-2xl font-display font-bold text-white leading-snug">
                          {currentStep.question}
                        </h2>
                      </div>

                      {/* CHOICE STEP */}
                      {currentStep.type === "choice" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                          {currentStep.options?.map((opt) => {
                            const Icon = opt.icon;
                            const isSelected = answers[currentStep.id] === opt.id;
                            return (
                              <button
                                key={opt.id}
                                onClick={() => selectChoice(currentStep.id, opt.id)}
                                className={`flex sm:flex-col items-center sm:items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 group relative overflow-hidden ${
                                  isSelected
                                    ? "border-[#DC143C] bg-[#DC143C]/10"
                                    : "border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a2a2a] hover:bg-[#111]"
                                }`}
                              >
                                {isSelected && (
                                  <motion.div
                                    layoutId="choice-indicator"
                                    className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#DC143C] flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                  >
                                    <Check size={9} className="text-white" />
                                  </motion.div>
                                )}
                                {Icon && (
                                  <Icon
                                    size={20}
                                    className={`shrink-0 ${isSelected ? "text-[#DC143C]" : "text-[#555] group-hover:text-[#888]"}`}
                                  />
                                )}
                                <div>
                                  <p className={`text-sm font-bold leading-tight ${isSelected ? "text-white" : "text-[#ccc]"}`}>
                                    {opt.label}
                                  </p>
                                  <p className="text-[11px] text-[#555] mt-0.5 line-clamp-1 sm:line-clamp-none">{opt.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* FORM STEP */}
                      {currentStep.type === "form" && (
                        <div className="flex flex-col gap-4 flex-1">
                          {[
                            { key: "name" as const, label: "Your Name", placeholder: "e.g. Rahul Mehta", type: "text" },
                            { key: "email" as const, label: "Email Address", placeholder: "rahul@yourcompany.com", type: "email" },
                            { key: "project" as const, label: "Project / Company Name", placeholder: "Optional", type: "text" },
                          ].map((field) => (
                            <div key={field.key}>
                              <label className="block text-[11px] font-mono text-[#555] uppercase tracking-widest mb-2">
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                value={contact[field.key]}
                                onChange={(e) =>
                                  setContact((prev) => ({ ...prev, [field.key]: e.target.value }))
                                }
                                className="w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#DC143C]/50 focus:bg-[#111] transition-all"
                              />
                            </div>
                          ))}
                          <div className="mt-auto pt-4">
                            <button
                              onClick={handleSubmit}
                              disabled={!canProceedForm || isSubmitting}
                              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DC143C] text-white text-sm font-bold rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF0040] transition-all duration-200 active:scale-[0.98]"
                            >
                              {isSubmitting ? (
                                <Loader2 size={16} className="animate-spin" />
                              ) : (
                                <>
                                  Next — Pick a time
                                  <ArrowRight size={15} />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}

                      {/* MEETING STEP */}
                      {currentStep.type === "meeting" && (
                        <div className="flex flex-col flex-1 h-[700px] -mx-5 md:-mx-8 -mb-5 md:-mb-8 mt-2 rounded-b-2xl overflow-hidden bg-white">
                          <InlineWidget 
                            url="https://calendly.com/jenwinwork/30min"
                            prefill={{
                              name: contact.name,
                              email: contact.email,
                              customAnswers: {
                                a1: `Project Type: ${STEPS[0].options?.find(o => o.id === answers.type)?.label || 'N/A'}\nTimeline: ${STEPS[1].options?.find(o => o.id === answers.timeline)?.label || 'N/A'}\nBudget: ${STEPS[2].options?.find(o => o.id === answers.budget)?.label || 'N/A'}\nChallenge: ${STEPS[3].options?.find(o => o.id === answers.challenge)?.label || 'N/A'}\nCompany/Details: ${contact.project || 'N/A'}`
                              }
                            }}
                            pageSettings={{
                              backgroundColor: 'ffffff',
                              hideEventTypeDetails: true,
                              hideLandingPageDetails: true,
                              primaryColor: 'dc143c',
                              textColor: '000000'
                            }}
                            styles={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
              </div>

              {/* Bottom nav — only for choice steps */}
              {currentStep.type === "choice" && (
                <div className="px-6 pb-5 flex items-center justify-between border-t border-[#0f0f0f] pt-4">
                  <button
                    onClick={goBack}
                    disabled={step === 0}
                    className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#888] disabled:opacity-0 transition-all"
                  >
                    <ArrowLeft size={13} />
                    Back
                  </button>
                  <button
                    onClick={goNext}
                    disabled={!answers[currentStep.id]}
                    className="flex items-center gap-1.5 text-sm text-[#DC143C] disabled:opacity-30 hover:text-[#FF0040] transition-colors font-bold"
                  >
                    {answers[currentStep.id] ? "Continue" : "Select an option"}
                    {answers[currentStep.id] && <ArrowRight size={13} />}
                  </button>
                </div>
              )}

              {/* Back nav for form/meeting steps */}
              {currentStep.type !== "choice" && step > 0 && (
                <div className="px-6 pb-5 border-t border-[#0f0f0f] pt-4">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#888] transition-all"
                  >
                    <ArrowLeft size={13} />
                    Back
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
