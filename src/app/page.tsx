import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { TechStack } from "@/components/ui/tech-stack";
import { Workflow } from "@/components/ui/workflow";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TechStack />
        <Workflow />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
