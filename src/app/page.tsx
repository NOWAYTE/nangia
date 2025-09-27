import LandingPage from "@/components/landing/page";
import Link from "next/link";
import YouTubeParallax from "@/components/ui/YouTubeParallax";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-visible relative pt-3">
      <LandingPage />

      {/* Overlapping content block (spans only) */}
      <div className="relative z-30 -mt-24 px-4">
        {/* Gradient border wrapper for a luxe feel */}
        <div className="mx-auto max-w-4xl rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
          <div className="relative rounded-3xl bg-[#111111] backdrop-blur-md ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-20 overflow-hidden">
            {/* Leather background image */}
            <div className="absolute inset-0 opacity-15">
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
              {/* Luxury subtle inner top highlight */}
              <span className="block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

              {/* Enhanced Headline CTA */}
              <div className="text-center mb-8">
                <h1
                  className="text-white leading-tight tracking-wide text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
                >
                  <span className="text-white/95">STEAL MY</span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">$3.4M+</span>{" "}
                  <span className="text-white/95">SKILLSET</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
                  <span className="text-white/70">That Took Me From A Chronic</span>{" "}
                  <span className="uppercase tracking-wider text-white/60 font-semibold">DOOM SCROLLER</span>{" "}
                  <span className="text-white/70">To A</span>{" "}
                  <span className="uppercase tracking-wider text-white font-semibold">MULTI-MILLIONAIRE</span>{" "}
                  <span className="text-white/70">By The Age of</span>{" "}
                  <span className="text-white font-bold text-2xl">20.</span>
                </p>
              </div>

              {/* Scarcity Timer */}
              <div className="mb-6 text-center">
                <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                  <p className="text-white/90 font-semibold text-sm uppercase tracking-wide">
                    ⚡ Limited Time: Price Increases in 48 Hours
                  </p>
                </div>
              </div>

              {/* Enhanced Primary CTA */}
              <div className="mt-12 flex flex-col items-center gap-4">
                {/* Main CTA Button */}
                <Link
                  href="/"
                  aria-label="Get Instant Access"
                  className="group relative inline-flex items-center justify-center rounded-full px-12 py-5 text-lg md:text-xl font-bold tracking-wide text-black bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 hover:from-yellow-300 hover:via-amber-200 hover:to-yellow-300 shadow-[0_15px_50px_-15px_rgba(255,215,0,0.6)] ring-2 ring-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(255,215,0,0.8)] backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    GET INSTANT ACCESS
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Link>
                
                {/* Trust indicators */}
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Instant Download
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    30-Day Guarantee
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2,847+ Students
                  </span>
                </div>
              </div>

              {/* Luxury subtle inner bottom highlight */}
              <span className="block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12" />

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
      </div>

      {/* Sections below video */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Value Stack Section */}
        <section className="px-4 py-16">
          <div className="rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
            <div className="relative rounded-3xl bg-[#111111] ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-16 overflow-hidden">
              {/* Leather background */}
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src="/images/original-black-leather-texture-background.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-white">What&apos;s Inside</span>
                </h2>
                <p className="text-white/70 text-lg mb-12">Everything you need to build your content empire</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Complete Creator Blueprint", value: "$2,497", desc: "Step-by-step system that generated millions" },
                    { title: "AI Automation Tools", value: "$997", desc: "Cut editing time by 90% with our exclusive AI workflows" },
                    { title: "Viral Hook Templates", value: "$497", desc: "200+ proven hooks that guarantee attention" },
                    { title: "Distribution Playbook", value: "$797", desc: "Multi-platform strategy for maximum reach" },
                    { title: "Monetization Mastery", value: "$1,497", desc: "Turn views into revenue streams" },
                    { title: "Private Community", value: "$297", desc: "Network with other successful creators" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="text-left">
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                      <div className="text-white/90 font-bold text-xl">${item.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/20 pt-8">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-white">Total Value:</span>
                    <span className="text-white/60 line-through">$6,582</span>
                  </div>
                  <div className="flex justify-between items-center text-3xl font-bold mt-2">
                    <span className="text-white">Your Price Today:</span>
                    <span className="text-white">$197</span>
                  </div>
                  <p className="text-white/90 text-lg font-semibold mt-2">You Save $6,385 (97% Off)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Benefits />
        
        {/* Divider */}
        <div className="px-4">
          <span className="block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Results Timeline Section */}
        <section className="px-4 py-16">
          <div className="rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-white/0">
            <div className="relative rounded-3xl bg-[#111111] ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] p-12 md:p-16 overflow-hidden">
              {/* Leather background */}
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src="/images/original-black-leather-texture-background.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-white">Your 90-Day Transformation</span>
                  </h2>
                  <p className="text-white/70 text-lg">Here&apos;s exactly what happens when you follow the system</p>
                </div>
                
                <div className="space-y-8">
                  {[
                    { day: "Days 1-7", title: "Foundation Setup", desc: "Set up your content system and create your first viral-ready clips", color: "text-white/90" },
                    { day: "Days 8-30", title: "Content Acceleration", desc: "Post consistently using AI automation, see your first viral moments", color: "text-white/80" },
                    { day: "Days 31-60", title: "Audience Building", desc: "Build a loyal following, start seeing real engagement and growth", color: "text-white/70" },
                    { day: "Days 61-90", title: "Monetization Phase", desc: "Launch your first products, see your first $1K+ months", color: "text-white/60" }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full bg-white/40 mt-2 flex-shrink-0`}></div>
                      <div>
                        <div className={`font-bold ${phase.color} text-sm uppercase tracking-wide`}>{phase.day}</div>
                        <h3 className="text-white text-xl font-semibold mt-1">{phase.title}</h3>
                        <p className="text-white/70 mt-1">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        {/* FAQ Enhanced with Risk Reversal */}
        <FAQ />
        
        {/* Final CTA with Urgency */}
        <section className="px-4 py-16">
          <div className="rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-white/15 to-white/5">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] ring-1 ring-white/20 shadow-[0_20px_60px_-20px_rgba(255,255,255,0.1)] p-12 md:p-16 overflow-hidden">
              {/* Enhanced leather background with overlay */}
              <div className="absolute inset-0 opacity-25">
                <Image 
                  src="/images/original-black-leather-texture-background.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                  <p className="text-white/90 font-semibold text-sm uppercase tracking-wide">
                    🚨 Last Chance: Price Increases Tonight
                  </p>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
                  Don&apos;t Let This <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-white">Opportunity</span> Slip Away
                </h2>
                
                <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
                  Join 2,847+ creators who&apos;ve already transformed their lives. 
                  <strong className="text-white"> This exact system generated $3.4M+</strong> and it&apos;s yours for just $197 today.
                </p>
                
                {/* Enhanced Final CTA */}
                <Link
                  href="/"
                  className="group relative inline-flex items-center justify-center rounded-full px-16 py-6 text-xl md:text-2xl font-bold tracking-wide text-black bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 hover:from-yellow-300 hover:via-amber-200 hover:to-yellow-300 shadow-[0_25px_70px_-15px_rgba(255,215,0,0.6)] ring-4 ring-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_-10px_rgba(255,215,0,0.8)] backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    CLAIM YOUR SPOT NOW - $197
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Link>
                
                <div className="mt-8 space-y-2">
                  <p className="text-white/80 font-semibold">✅ Instant Access - Download Immediately</p>
                  <p className="text-white/80 font-semibold">✅ 30-Day Money-Back Guarantee</p>
                  <p className="text-white/80 font-semibold">✅ Join 2,847+ Successful Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Bottom shade overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#111111e6] z-10" />
    </div>
  );
}
