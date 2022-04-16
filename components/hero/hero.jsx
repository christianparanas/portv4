import GitHubCalendar from "react-github-calendar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import styles from "./hero.module.scss";

const THEME = [
  {
    level4: "#216e39",
    level3: "#30a14e",
    level2: "#40c463",
    level1: "#9be9a8",
    level0: "#ebedf0",
  },
  {
    level4: "rgb(76 29 149)",
    level3: "rgb(91 33 182)",
    level2: "rgb(109 40 217)",
    level1: "rgb(167 139 250)",
    level0: "#1f2937",
  },
];

const Hero = ({ title, description, children }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
      {children}
      <GitHubCalendar
        username="christianparanas"
        theme={theme == "light" ? THEME[0] : THEME[1]}
      />
    </div>
  );
};

export default Hero;
