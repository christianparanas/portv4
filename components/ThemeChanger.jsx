import { useState } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "react-dark-mode-toggle";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme == "light" ? false : true);

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
      <DarkModeToggle onChange={changeTheme} checked={isDarkMode} size={60} />
    
  );
}
