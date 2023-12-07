import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDark } from "../hooks/useDark";
import { HiBars3 } from "react-icons/hi2";

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
        <div className="hidden items-center space-x-16  md:flex">
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
                href="#about"
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
              <a
                className="flex items-center gap-1 font-semibold"
                href="#contact"
              >
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
        <div>
          <button
            className={twMerge(
              `flex h-8 w-8 items-center justify-center rounded-full`,
              `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
            )}
          >
            <HiBars3 className="text-xl" />
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          ` absolute flex flex-col gap-4 rounded-md p-4 shadow-sm shadow-secondaryColor`,
          `${isDark ? "bg-secondaryBg" : "bg-slate-100"}`,
        )}
      >
        <a className="flex items-center gap-1 font-semibold" href="#home">
          Home
        </a>
        <a className="flex  items-center gap-1 font-semibold" href="#services">
          Services
        </a>
        <a className="flex  items-center gap-1 font-semibold" href="#about">
          About us
        </a>
        <a className="flex items-center gap-1 font-semibold" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
