import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function Navigation({ setNavHeight }) {
  const [isDark, setIsDark] = useState(false);

  const navEl = useRef(null);
  useEffect(
    function () {
      console.log(navEl.current.clientHeight);
      setNavHeight(navEl.current.clientHeight);
    },
    [setNavHeight],
  );

  return (
    <nav
      ref={navEl}
      className="fixed w-full border-b border-b-secondaryColor  bg-primaryBg/20 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4 text-primaryColor">
        <h1 className="text-xl font-bold">TechDevs</h1>
        <div className="flex items-center  space-x-16">
          <ul className="flex items-center  space-x-4">
            <li className="cursor-pointer">
              <a className="flex items-center gap-1 font-semibold" href="#">
                <span className="flex items-center justify-center rounded-full bg-secondaryBg px-3 py-1 text-primaryColor">
                  1
                </span>
                <span> Home</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                className="flex  items-center gap-1 font-semibold"
                href="#home"
              >
                <span className="flex items-center  justify-center rounded-full bg-secondaryBg px-3 py-1 text-primaryColor">
                  2
                </span>
                <span>About us</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="flex items-center gap-1 font-semibold" href="#">
                <span className="flex items-center  justify-center rounded-full bg-secondaryBg px-3 py-1 text-primaryColor">
                  3
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
              `${isDark ? "bg-secondaryBg " : "bg-slate-300"}`,
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
