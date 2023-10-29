import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";
import fig from "../assets/figma.svg";

function Services() {
  const { isDark } = useDark();
  return (
    <section
      id="services"
      className="flex h-screen flex-col items-center pt-40"
    >
      <h2 className="mb-8 text-center text-4xl font-semibold">Our Services</h2>
      <div className="grid grid-cols-2 justify-items-center gap-8">
        <div
          className={twMerge(
            `rounded-lg border border-highlight/30 p-4`,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <img src={fig} alt="design" className="w-12" />
            <span className="text-xl">UI Design</span>
          </div>

          <p className="text-lg">
            Let us develop transformative user experiences across all platforms
            and Your brand’s touchpoints. The kind that will make your clients
            re-visit you.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/30 p-4`,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <img src={fig} alt="design" className="w-12" />
            <span className="text-xl">Front-End</span>
          </div>

          <p className="text-lg">
            Let us develop transformative user experiences across all platforms
            and Your brand’s touchpoints. The kind that will make your clients
            re-visit you.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/30 p-4 `,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <img src={fig} alt="design" className="w-12" />
            <span className="text-xl">Back-End</span>
          </div>

          <p className="text-lg">
            Let us develop transformative user experiences across all platforms
            and Your brand’s touchpoints. The kind that will make your clients
            re-visit you.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/30 p-4 `,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <img src={fig} alt="design" className="w-12" />
            <span className="text-xl">Contribute</span>
          </div>

          <p className="text-lg">
            Let us develop transformative user experiences across all platforms
            and Your brand’s touchpoints. The kind that will make your clients
            re-visit you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
