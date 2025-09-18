import Image from "next/image";

export default function Vid() {
  return (
    <div className="flex flex-row gap-6 p-6">
      {/* Left column with video thumbnail */}
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-black shadow-lg">
        <div className="bg-black p-1 rounded-xl">
          <a
            href="https://start.aiclipping.io/ai-clipping-method-2-0-lander?wvideo=3ka4r9qab1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://embed-ssl.wistia.com/deliveries/1df4a0989d7d51cd5c1146618eaa93b1.jpg?image_play_button_size=2x&image_crop_resized=960x1707&image_play_button_rounded=1&image_play_button_color=BDFF1Ae0"
              alt="AI Clipping Method 2.0 Video"
              width={400}
              height={711}
              className="rounded-xl shadow-md"
            />
          </a>
        </div>
      </div>

      {/* Right column with description */}
      <div className="flex flex-col gap-2 max-w-2xl mx-auto items-center pt-4 px-6 bg-gray-100 rounded-2xl">
        {/* Logo and intro */}
        <div className="flex flex-col items-center gap-3">
          <Image src="/images/setup.avif" alt="Setup Icon" width={200} height={200} />
          <div className="flex flex-col font-semibold">
            <p className="text-sm text-center text-blue-800">Introducing</p>
            <h2 className="text-xl font-semibold">
              AI Clipping Method 2.0
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-700 text-xs text-center">
          Your complete guide to go from <br/> zero to viral clips in 2025 in{" "}
          <span className="font-semibold text-black">less than 2 hours</span>.
        </p>

        {/* Form */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-center text-xs text-gray-700">Get Started Now</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Instant Access
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center">
            Join 10,000+ students already earning
          </p>
        </div>
      </div>
    </div>
  );
}
