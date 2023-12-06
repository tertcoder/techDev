import { createContext, useState } from "react";

export const themeContext = createContext();
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <themeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </themeContext.Provider>
  );
}
export default ThemeProvider;
