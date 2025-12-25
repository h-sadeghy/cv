import { MdDarkMode } from "react-icons/md";

import { AiFillMoon, AiFillSun } from "react-icons/ai";

import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-info btn-circle btn-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <AiFillSun className="h-5 w-5" />
      ) : (
        <AiFillMoon className="h-5 w-5" />
      )}
    </button>
  );
}
