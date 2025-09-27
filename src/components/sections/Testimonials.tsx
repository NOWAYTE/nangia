import React from "react";

const testimonials = [
    {
        quote:
            "Turned casual scrolling into consistent income. First 30 days paid for the program twice over.",
        name: "Ava R.",
    },
    {
        quote:
            "Finally a repeatable process. No guesswork — just post, iterate, and scale.",
        name: "Marcus V.",
    },
    {
        quote:
            "Went from 0 to 50k weekly views without editing experience.",
        name: "Noah T.",
    },
];

export default function Testimonials() {
    return (
        <section className="px-4 py-20">
            {/* Full-width luxury wrapper (like CTA) */}
            <div className="rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
                <div className="rounded-3xl bg-[#111111] ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-white">Proof It Works</span>
                        </h2>
                        <p className="mt-3 text-neutral-300/80">Real outcomes from people who applied the system exactly as shown.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <figure key={i} className="rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-transparent">
                                <blockquote className="h-full rounded-2xl bg-[#111111] ring-1 ring-white/10 p-6 text-neutral-200/90">
                                    <p className="italic">“{t.quote}”</p>
                                    <figcaption className="mt-4 text-sm text-neutral-400">— {t.name}</figcaption>
                                </blockquote>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
