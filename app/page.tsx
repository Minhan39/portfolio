import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { TechMarquee } from "@/components/tech-marquee";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SocialSidebar } from "@/components/social-sidebar";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navigation />
      <SocialSidebar />
      <main className="relative">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
