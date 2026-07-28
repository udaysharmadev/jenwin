import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[10rem] font-black text-[#0d0d0d] leading-none select-none">404</p>
        <h1 className="text-2xl font-bold text-white mb-3 -mt-4">Nothing here.</h1>
        <p className="text-sm text-[#555555] mb-8">
          This page doesn&apos;t exist, or may have moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-[#D81B60] text-white text-sm font-semibold rounded-sm hover:bg-[#b01550] transition-colors duration-200"
        >
          Back to Home
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
