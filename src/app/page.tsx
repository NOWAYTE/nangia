import LandingPage from "@/components/landing/page";
import Link from "next/link";
import YouTubeParallax from "@/components/ui/YouTubeParallax";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="overflow-visible relative pt-3">
      <LandingPage />

      {/* Overlapping content block (spans only) */}
      <div className="relative z-30 -mt-24 px-4">
        {/* Gradient border wrapper for a luxe feel */}
        <div className="mx-auto max-w-4xl rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
          <div className="rounded-3xl bg-[#111111] backdrop-blur-md ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-20">
            {/* Luxury subtle inner top highlight */}
            <span className="block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Headline CTA (spans only) */}
            <p
              className="text-center text-white leading-relaxed tracking-wide text-2xl md:text-2xl lg:text-3xl font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white/90">STEAL MY</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">$3.4M+</span>{" "}
              <span className="text-white/90">Skillset</span>{" "}
              <span className="text-white/60">That Took Me From A Chronic</span>{" "}
              <span className="uppercase tracking-widest text-neutral-300">DOOM SCROLLER</span>{" "}
              <span className="text-white/60">To A</span>{" "}
              <span className="uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">mULTi-MILLIONAIRE</span>{" "}
              <span className="text-white/60">BY</span>{" "}
              <span className="text-white/90">THE</span>{" "}
              <span className="text-white/90">AGE</span>{" "}
              <span className="text-white/90">OF</span>{" "}
              <span className="text-white">20.</span>
            </p>

            {/* Primary CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                aria-label="Get Instant Access"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm md:text-base font-semibold tracking-wide text-[#111] bg-gradient-to-r from-neutral-200 to-white hover:from-white hover:to-white shadow-[0_8px_30px_-12px_rgba(255,255,255,0.35)] ring-1 ring-white/40 transition-colors duration-200"
              >
                <span>Get Instant Access</span>
              </Link>
            </div>

            {/* Luxury subtle inner bottom highlight */}
            <span className="block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10" />

            {/* YouTube parallax video as part of CTA block */}
            <div className="mt-12">
              <YouTubeParallax
                url="https://www.youtube.com/watch?v=gbJU5NqGDSk"
                height="60vh"
                speed={0.25}
                maxScale={1.06}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sections below video */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <Benefits />
        {/* Divider */}
        <div className="px-4">
          <span className="block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <Testimonials />
        <FAQ />
        <Footer />
      </div>

      {/* Bottom shade overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#111111e6] z-10" />
    </div>
  );
}
