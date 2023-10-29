import { useContext } from "react";
import { themeContext } from "../context/themeContext";

export function useDark() {
  return useContext(themeContext);
}
