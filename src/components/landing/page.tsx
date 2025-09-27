import React from "react";
import Image from "next/image";
import Ticker from "@/components/ui/Ticker";

export default function LandingPage() {
  const sources = [
    "/images/p5.png",
    "/images/p6.png",
    "/images/p7.png",
    "/images/p8.png"
  ];

  const items = sources.map((src, i) => (
    <div key={src} className="w-[621px] h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
      <Image src={src} alt={`p${i + 1}`} width={621} height={480} className="w-full h-full object-cover" />
    </div>
  ));

  return (
    <div className="w-full flex justify-center">
      <Ticker
        items={items}
        direction="ltr"
        speedPercent={97}
        gapClassName="gap-5"
        paddingClassName="p-4"
        clipWidthPx={621 * 7}
        fade
        fadeWidthPercent={5}
        fadeInsetPercent={0}
        fadeOpacity={0.8}
        className="w-auto"
      />
    </div>
  );
}
