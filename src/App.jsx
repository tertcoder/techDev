import { useState } from "react";
import Content from "./Content";
import Navigation from "./Navigation";
import { useDark } from "./hooks/useDark";
import { twMerge } from "tailwind-merge";

function App() {
  const [navHeight, setNavHeight] = useState(null);
  const { isDark } = useDark();
  return (
    <div
      className={twMerge(
        `main-content relative min-h-screen  font-sans duration-100`,
        `${
          isDark
            ? "bg-primaryBg text-primaryColor/90"
            : "bg-primaryColor text-primaryBg/80"
        }`,
      )}
    >
      <Navigation setNavHeight={setNavHeight} />
      <Content navHeight={navHeight} />
    </div>
  );
}

export default App;
