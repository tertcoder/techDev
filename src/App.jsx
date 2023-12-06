import { useState } from "react";
import Content from "./ui/Content";
import Navigation from "./ui/Navigation";
import { useDark } from "./hooks/useDark";
import { twMerge } from "tailwind-merge";
import Footer from "./sections/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
