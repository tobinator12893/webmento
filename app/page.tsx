import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { CTASection } from "@/components/sections/CTASection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Process />
      <Pricing />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
