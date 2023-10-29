import { twMerge } from "tailwind-merge";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";

function Content({ navHeight }) {
  // console.log(navHeight);
  return (
    <main className={twMerge(`mx-auto w-2/3 `, ` pt-[${navHeight}px]  `)}>
      <HeroSection />
      <Services />
    </main>
  );
}
export default Content;
