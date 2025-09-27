export default function Footer() {
  return (
    <footer className="px-4 py-12">
      <div className="text-center text-neutral-400/70 text-sm max-w-2xl mx-auto leading-relaxed">
        <p>
          Disclaimer: The results and figures shared on this site are for
          educational and illustrative purposes only. Past performance is not a
          guarantee of future results. Always do your own research before making
          financial or business decisions.
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
