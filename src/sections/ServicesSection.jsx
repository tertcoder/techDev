import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";
import BackendIcon from "../ui/BackendIcon";
import FigmaIcon from "../ui/FigmaIcon";
import FrontendIcon from "../ui/FrontendIcon";
import ContributeIcon from "../ui/ContributeIcon";

function ServicesSection() {
  const { isDark } = useDark();
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center px-8 pt-40 xl:px-0"
    >
      <h2 className="mb-8 text-center text-4xl font-semibold">Our Services</h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:gap-8">
        <div
          className={twMerge(
            `rounded-lg border border-highlight/10 p-4 shadow-sm shadow-highlight/10`,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <div className="mr-4 h-12">
              <FigmaIcon isDark={isDark} />
            </div>
            <span className="text-xl">UI Design</span>
          </div>

          <p className="text-lg">
            Crafting visually stunning and user-centric interfaces tailored to
            elevate digital experiences for websites and mobile apps.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/10 p-4 shadow-sm shadow-highlight/10`,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <div className="mr-4 w-12">
              <FrontendIcon isDark={isDark} />
            </div>
            <span className="text-xl">Front-End</span>
          </div>

          <p className="text-lg">
            Bringing designs to life with seamless and responsive front-end
            development, ensuring a captivating and user-friendly online
            presence.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/10 p-4 shadow-sm shadow-highlight/10 `,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <div className="mr-4 h-12 w-12">
              <BackendIcon isDark={isDark} />
            </div>
            <span className="text-xl">Back-End</span>
          </div>

          <p className="text-lg">
            Empowering your digital infrastructure with robust and efficient
            back-end solutions, ensuring seamless functionality and data
            management behind the scenes.
          </p>
        </div>
        <div
          className={twMerge(
            `rounded-lg  border border-highlight/10 p-4 shadow-sm shadow-highlight/10 `,
            `${isDark ? "bg-secondaryBg/50" : "bg-slate-100"}`,
          )}
        >
          <div className="mb-4 flex items-center font-semibold">
            <div className="mr-4 h-12 w-12">
              <ContributeIcon isDark={isDark} />
            </div>
            <span className="text-xl">Contribute</span>
          </div>

          <p className="text-lg">
            Collaborating and leveraging our expertise to enhance diverse
            projects, fostering innovation and achieving collective success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
