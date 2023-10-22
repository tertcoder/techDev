import { twMerge } from "tailwind-merge";
import { HeroSection } from "./HeroSection";

function Content({ navHeight }) {
  // console.log(navHeight);
  return (
    <main
      className={twMerge(
        `mx-auto w-2/3  text-primaryColor`,
        ` pt-[${navHeight}px] `,
      )}
    >
      <HeroSection />
      {/* <main className={`mx-auto w-2/3 pt-[${navHeight}px] text-primaryColor`}>
        <HeroSection />
      </main> */}
    </main>
  );
}
export default Content;
