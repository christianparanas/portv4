import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import ThemeChanger from "./ThemeChanger";

export default function Nav() {
  const { theme, setTheme } = useTheme();

  const { asPath } = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [navOverlay, setNavOverlay] = useState("nav_overlay");

  useEffect(() => {
    if (isOpen) {
      setNavOverlay("nav_overlay open_overlay");
      return;
    }

    setNavOverlay("nav_overlay");
  }, [isOpen, theme]);

  const closeNav = () => {
    setNavOverlay("nav_overlay");
    setOpen(false);
  };

  return (
    <div className="nav">
      <div className="ham">
        <div className="leftham">
          <Link href="/">
            <div className="name" onClick={closeNav}>
              Christian Paranas
            </div>
          </Link>
          <div className="prof">Web Developer</div>
        </div>
        <div className="ops">
          <ThemeChanger />
          <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={navOverlay}>
        <div className="items">
          <Link href="/">
            <div
              className={`item ${asPath == "/" ? "activePage" : ""}`}
              onClick={closeNav}
            >
              About Me
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`item ${asPath == "/blog" ? "activePage" : ""}`}
              onClick={closeNav}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`item ${asPath == "/projects" ? "activePage" : ""}`}
              onClick={closeNav}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`item ${asPath == "/guestbook" ? "activePage" : ""}`}
              onClick={closeNav}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

      <div className="sidebar">
        <div className="sideHead">
          <div className="name">Christian Paranas</div>
          <div className="prof">Web Developer</div>
        </div>
        <div className="sideItems">
          <Link href="/">
            <div className={`sideItem ${asPath == "/" ? "activePage" : ""}`}>
              About Me
            </div>
          </Link>
          <Link href="/blog">
            <div className={`sideItem ${asPath == "/blog" ? "activePage" : ""}`}>
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`sideItem ${
                asPath == "/projects" ? "activePage" : ""
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`sideItem ${
                asPath == "/guestbook" ? "activePage" : ""
              }`}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

        <div className="toogle">
          <span>{theme == "dark" ? "Dark mode" : "Light mode"}</span>
          <div className="tog-con">
            <ThemeChanger /> 
          </div>
        </div>
    </div>
  );
}

