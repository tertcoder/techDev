import { useEffect, useRef, useState } from "react";

function Navigation({ setNavHeight }) {
  const [isDark, setIsDark] = useState(true);
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
              <a className="flex  items-center gap-1 font-semibold" href="#">
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
            className="flex h-[32px] w-[56px] cursor-pointer items-center rounded-full bg-secondaryBg  p-[5px]"
          >
            <div
              className={`h-[24px] w-[24px] duration-300 ${
                isDark ? "translate-x-full" : ""
              }  rounded-full bg-primaryBg`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
