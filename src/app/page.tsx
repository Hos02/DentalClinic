import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DoctorsSection } from "@/components/DoctorsSection";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DoctorsSection />
      <PricingSection />
    </>
  );
}
