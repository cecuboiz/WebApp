import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground font-display">
          © 2026 Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
