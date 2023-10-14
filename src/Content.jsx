import { HeroSection } from "./HeroSection";

function Content({ navHeight }) {
  console.log(navHeight);
  return (
    <main className="mx-auto w-2/3 pt-[64px] text-primaryColor">
      <HeroSection />
      {/* <main className={`mx-auto w-2/3 pt-[${navHeight}px] text-primaryColor`}>
        <HeroSection />
      </main> */}
    </main>
  );
}
export default Content;
