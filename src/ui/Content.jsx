import { twMerge } from "tailwind-merge";
import HeroSection from "../sections/HeroSection";
import Services from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

function Content({ navHeight }) {
  // console.log(navHeight);
  return (
    <main className={twMerge(`mx-auto w-2/3 `, ` pt-[${navHeight}px]  `)}>
      <HeroSection />
      <Services />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
export default Content;
