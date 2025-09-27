"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Do I need prior editing experience?",
    a: "No. The system is built so a beginner can publish high-retention clips using templates and a clear workflow.",
  },
  {
    q: "How much time does this take per day?",
    a: "Most students spend 30–60 minutes daily once the workflow is set up. Your consistency compounds results.",
  },
  {
    q: "What platforms does this work for?",
    a: "Short-form everywhere: TikTok, Reels, Shorts. The frameworks generalize across platforms.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-transparent">
      <div className="rounded-2xl bg-[#111111] ring-1 ring-white/10">
        <button
          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-white font-medium" style={{ fontFamily: "var(--font-display)" }}>{q}</span>
          <span className="text-neutral-400">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div className="px-5 pb-5 text-neutral-300/85">
            {a}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-white">Frequently Asked Questions</span>
          </h2>
          <p className="mt-3 text-neutral-300/80">Everything you need to know before you start.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
