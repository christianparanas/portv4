import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";

import ThemeChanger from "./ThemeChanger";

export default function Nav() {
  const { asPath } = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [navOverlay, setNavOverlay] = useState("nav_overlay");

  useEffect(() => {
    if (isOpen) {
      setNavOverlay("nav_overlay open_overlay");
      return;
    }

    setNavOverlay("nav_overlay");
  }, [isOpen]);

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
          <div className="prof">Software Developer</div>
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
              className={`item ${asPath == "/blogs" ? "activePage" : ""}`}
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
        </div>
      </div>

      <div className="sidebar">
        <div className="sideHead">
          <div className="name">Christian Paranas</div>
          <div className="prof">Software Developer</div>
        </div>
        <div className="sideItems">
          <Link href="/">
            <div className={`sideItem ${asPath == "/" ? "activePage" : ""}`}>
              About Me
            </div>
          </Link>
          <Link href="/">
            <div
              className={`sideItem ${asPath == "/blogs" ? "activePage" : ""}`}
            >
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
        </div>
        <div className="toogle">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}
