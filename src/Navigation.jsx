import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDark } from "./hooks/useDark";

function Navigation({ setNavHeight }) {
  const { isDark, setIsDark } = useDark();
  const navEl = useRef(null);
  useEffect(
    function () {
      setNavHeight(navEl.current.clientHeight);
    },
    [setNavHeight],
  );

  return (
    <nav
      ref={navEl}
      className={twMerge(
        `fixed z-10 w-full border-b  backdrop-blur-sm`,
        `${
          isDark
            ? "border-b-secondaryColor  bg-primaryBg/20"
            : "border-b-slate-300  bg-primaryColor/20"
        }`,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold">TechDevs</h1>
        <div className="flex items-center  space-x-16">
          <ul className="flex items-center  space-x-4">
            <li className="cursor-pointer">
              <a className="flex items-center gap-1 font-semibold" href="#home">
                <span
                  className={twMerge(
                    `flex items-center  justify-center rounded-full  px-3 py-1`,
                    `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
                  )}
                >
                  1
                </span>
                <span>Home</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="flex  items-center gap-1 font-semibold"
                href="#services"
              >
                <span
                  className={twMerge(
                    `flex items-center  justify-center rounded-full  px-3 py-1`,
                    `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
                  )}
                >
                  2
                </span>
                <span>Services</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="flex  items-center gap-1 font-semibold"
                href="#home"
              >
                <span
                  id="about-us"
                  className={twMerge(
                    `flex items-center  justify-center rounded-full  px-3 py-1`,
                    `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
                  )}
                >
                  3
                </span>
                <span>About us</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="flex items-center gap-1 font-semibold" href="#">
                <span
                  className={twMerge(
                    `flex items-center  justify-center rounded-full  px-3 py-1`,
                    `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
                  )}
                >
                  4
                </span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsDark((d) => !d)}
            className={twMerge(
              `flex h-[32px] w-[56px] cursor-pointer items-center justify-between rounded-full   p-[5px] 
               duration-300`,
              `${isDark ? "bg-secondaryBg " : "bg-slate-100"}`,
            )}
          >
            <span className="pl-1 font-semibold">L</span>
            <div
              className={`absolute h-[24px] w-[24px] rounded-full 
              ${isDark ? "translate-x-full bg-primaryBg " : "bg-primaryColor"}
               duration-300`}
            ></div>
            <span className="pr-1 font-semibold text-secondaryColor">D</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
