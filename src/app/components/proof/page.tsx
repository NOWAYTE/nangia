import Image from "next/image";

export const Proof = () => {
  return (
    <div className="min-h-screen bg-gray-100 max-w-7xl mx-auto flex flex-col items-center p-6 rounded-xs">
      <div className="text-center mb-8">
        <h1 className="text-xs font-bold text-gray-900 mb-2 font-semibold items-center justify center rounded-lg italic">Proof</h1>
                <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[24px] 2xl:text-[24px] 
               leading-snug font-semibold tracking-tight text-gray-900">
          This legit <span className="font-semibold text-blue-600">Works</span>.
          Just Ask My Students...
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
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
                className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 object-cover
                  ${isRightColumn ? "w-80" : "w-90"} h-auto`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
