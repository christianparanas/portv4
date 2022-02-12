import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [navOverlay, setNavOverlay] = useState("nav_overlay");

  useEffect(() => {
    if (isOpen) {
      setNavOverlay("nav_overlay open_overlay");
      return
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
        <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={navOverlay}>
        <div className="items">
          <Link href="/">
            <div className="item" onClick={closeNav}>
              About Me
            </div>
          </Link>
          <Link href="/blog">
            <div className="item" onClick={closeNav}>
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div className="item" onClick={closeNav}>
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
            <div className="sideItem">About Me</div>
          </Link>
          <Link href="/">
            <div className="sideItem">Blog</div>
          </Link>
          <Link href="/projects">
            <div className="sideItem">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
