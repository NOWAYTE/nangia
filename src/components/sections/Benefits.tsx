import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Premium Frameworks",
    desc: "Battle-tested systems to find, clip, and publish high-retention moments.",
  },
  {
    title: "Automation Playbook",
    desc: "Templates and workflows so you spend minutes, not hours, per clip.",
  },
  {
    title: "Distribution Secrets",
    desc: "Turn clips into compounding attention across platforms without guesswork.",
  },
];

export default function Benefits() {
  return (
    <section className="px-4 py-20">
      {/* Full-width luxury wrapper (like CTA) */}
      <div className="rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
        <div className="relative rounded-3xl bg-[#111111] ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-20 overflow-hidden">
          {/* Leather background image */}
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/images/original-black-leather-texture-background.jpg"
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
          </div>
          
          {/* Content overlay */}
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-white">What You Get</span>
              </h2>
              <p className="mt-3 text-neutral-300/80">
                Tools, templates, and timeless strategy—refined for speed and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-transparent"
                >
                  <div className="h-full rounded-2xl bg-[#111111]/90 backdrop-blur-sm ring-1 ring-white/10 p-6">
                    <h3 className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                    <p className="mt-2 text-neutral-300/80">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
