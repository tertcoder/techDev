import { useState } from "react";
import Content from "./Content";
import Navigation from "./Navigation";

function App() {
  const [navHeight, setNavHeight] = useState(null);
  return (
    <div className="relative min-h-screen bg-primaryBg font-sans ">
      <Navigation setNavHeight={setNavHeight} />
      <Content navHeight={navHeight} />
    </div>
  );
}

export default App;
