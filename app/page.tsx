import SunSky from "@/components/Backgrounds/SunSky";
import StarField from "@/components/Backgrounds/StarField";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import CalligraphyAnimation from "@/components/CalligraphyAnimation";
import Portfolio from "@/components/Portfolio";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <SunSky />
      <StarField />
      <Navigation />
      <Hero />

      <ParallaxSection>
        <Stats />
      </ParallaxSection>

      <ParallaxSection>
        <Courses />
      </ParallaxSection>

      <ParallaxSection>
        <CalligraphyAnimation />
      </ParallaxSection>

      <ParallaxSection>
        <Portfolio />
      </ParallaxSection>

      <ParallaxSection>
        <Story />
      </ParallaxSection>

      <ParallaxSection>
        <Testimonials />
      </ParallaxSection>

      <ParallaxSection>
        <Pricing />
      </ParallaxSection>

      <ParallaxSection>
        <FAQ />
      </ParallaxSection>

      <ParallaxSection>
        <CTA />
      </ParallaxSection>

      <Footer />
    </main>
  );
}
