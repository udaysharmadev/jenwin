import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WhyJenwin from "@/components/sections/WhyJenwin";
import ProcessPreview from "@/components/sections/ProcessPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Jenwin — Development Agency",
  description:
    "Jenwin builds digital experiences that look sharp, work fast, and scale cleanly. Engineering, product thinking, and design discipline for founders and growth-stage businesses.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedWork />
      <WhyJenwin />
      <ProcessPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
