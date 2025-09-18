import Image from "next/image";
import Vid from "./vid";
import { Proof } from "../proof/page";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Top Star */}
      <div className="mb-8">
        <Image
          height={400}
          width={400}
          src="/images/star.webp"
          alt="star"
          className="text-yellow-400"
        />
      </div>

      {/* Main Heading */}
      <div className="text-center mb-2 bg-green-100 rounded-sm">
        <p className="text-sm font-thin text-gray-700 leading-tight p-1 italic">
          <span className="font-semibold text-black p-2 bg-green-200 rounded-lg">
            NEW
          </span>{" "}
          THE LAZIEST WAY TO EARN IN 2025
        </p>
      </div>

      {/* Revenue Claim */}
      <div className="text-center mb-2">
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[42px] 2xl:text-[42px] 
               leading-snug font-bold tracking-tight text-gray-900">
  How I make{" "}
  <span className="text-green-600 font-bold">$2400-$4800</span>{" "}
  <span className="italic">Every Day</span>
  <br className="hidden md:block" />
  Turning{" "}
  <span className="underline decoration-gray-400">Long Videos</span>{" "}
  into{" "}
  <span className="text-blue-800">
    Viral Clips
  </span>
</h1>


      </div>

      {/* Benefits */}
      <div className="text-center mb-2 max-w-2xl">
        <p className="text-lg text-gray-600 leading-relaxed tracking-tight">
          <span className="font-semibold text-gray-800">No Camera.</span>
          <span className="font-semibold text-gray-800"> No Editing.</span>
          <span className="font-semibold text-gray-800"> No Following Required.</span>
          <span className="font-semibold text-gray-800"> Completely Faceless.</span>
          <br className="mb-2" />
          Just find the 30-second "Good Parts" Hidden in Long Videos
        </p>
      </div>

      {/* Bottom Star */}
      <div className="mt-2 mb-8">
        <Image
          height={170}
          width={170}
          src="/images/star1.webp"
          alt="star"
          className="text-yellow-400"
        />
      </div>
      <Vid />
      <Proof />
    </div>
  );
}
