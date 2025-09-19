import { X } from "lucide-react";
import Image from "next/image";


export default function Info() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Badge */}
      <div className="mb-6">
        <span className="bg-neutral-800 text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-neutral-700 text-white">
          What is AI Clipping Method 2.0?
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-md md:text-3xl font-extrabold text-center leading-tight max-w-4xl">
        What If You Got{" "}
        <span className="text-green-400">Paid</span>{" "}
        <span className="italic">Every Time</span> Someone Watched The{" "}
        <span className="text-pink-400 italic underline">&quot;Good Parts&quot;</span>{" "}
        You Found In Long Videos?
      </h1>

      {/* Image previews */}
      <div className="flex gap-4 my-10">
        <Image
          src="/images/info.avif"
          alt="info image"
          height={500}
          width={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Sub section */}
      <div className="max-w-2xl text-center md:text-left">
        <p className="italic text-gray-600 mb-4 text-center">Picture this...</p>
        <p className="mb-4">
          You wake up, grab your phone, and see{" "}
          <span className="text-green-400 font-bold">$423</span> deposited into
          your account <span className="italic">overnight</span>.
        </p>

        {/* List */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>Not from your <span className="font-bold">job</span>.</span>
          </li>
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>Not from your <span className="font-bold">boss</span>.</span>
          </li>
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>Not from complicated <span className="font-bold">side hustles</span>.</span>
          </li>
        </ul>

        <p className="mb-4">
          From posting <span className="font-bold">30-second clips yesterday</span>{" "}
          that people love to watch.
        </p>
        <p className="mb-6 text-gray-600 italic">
          Here’s the crazy part, you didn’t create anything original.
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>No <span className="font-bold">camera</span>.</span>
          </li>
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>No <span className="font-bold">editing skills</span>.</span>
          </li>
          <li className="flex items-start gap-2">
            <X className="text-red-500 mt-1" size={16} /> 
            <span>No <span className="font-bold">followers</span> needed.</span>
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mt-10 bg-neutral-800 border border-neutral-700 px-6 py-4 rounded-lg max-w-md text-sm italic text-gray-100 items-start">
        &quot;Made $1,200 my first month – finally got financial breathing room!&quot;
        <br />
        <span className="not-italic text-white font-bold">– Alim K.</span>
      </div>
      {/* <Button className="text-white font-bold mt-4">
        Get instant access
      </Button> */}
       <div className="mt-4 mb-8">
        <Image
          height={170}
          width={170}
          src="/images/star1.webp"
          alt="star"
          className="text-yellow-400"
        />
      </div>
    </section>
  );
}
