import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "./icons";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    setIsDarkMode(theme == "light" ? false : true);
  }, [theme]);

  function changeTheme() {
    if (theme == "light") {
      setIsDarkMode(true);
      setTheme("dark");
      return;
    }

    setIsDarkMode(false);
    setTheme("light");
  }

  return (
    <div className="themeChanger" onClick={changeTheme}>
      {isDarkMode ? <Moon /> : <Sun />}
    </div>
  );
}
