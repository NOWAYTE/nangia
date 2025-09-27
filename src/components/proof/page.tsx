import Image from "next/image";

export const Proof = () => {
  return (
    <section className="px-4 py-20">
      {/* Full-width luxury wrapper (consistent with other sections) */}
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
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-white">This Legit Works.</span>
              </h2>
              <p className="text-neutral-300/80 text-lg">
                Just Ask My Students...
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
              {Array.from({ length: 8 }, (_, index) => {
                const isRightColumn = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`flex justify-center ${
                      isRightColumn ? "mt-8" : ""
                    }`}
                  >
                    <Image
                      src={`/images/proof${index + 1}.webp`}
                      alt={`Proof image ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 object-cover ring-1 ring-white/10
                        ${isRightColumn ? "w-80" : "w-90"} h-auto`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
