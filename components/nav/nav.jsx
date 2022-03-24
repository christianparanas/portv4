import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import clsx from "classnames";

import ThemeChanger from "components/ThemeChanger";
import styles from './nav.module.scss'

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {

  }, [isOpen, theme]);

  const navoverlay = clsx({
    [[styles.overlay, styles.open_overlay].join(" ")]: isOpen,
    [styles["overlay"]]: !isOpen,
  });


  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.ham}>
        <div className={styles.leftham}>
          <Link href="/">
            <div className={styles.name} onClick={closeNav}>
              Christian Paranas
            </div>
          </Link>
          <div className={styles.prof}>Web Developer</div>
        </div>
        <div className={styles.ops}>
          <div className={styles.togCon1}><ThemeChanger /></div>
          <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={navoverlay}>
        <div className={styles.items}>
          <Link href="/">
            <div
              className={`${styles.item} ${asPath == "/" ? styles.activePage : ""}`}
              onClick={closeNav}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`${styles.item} ${asPath == "/about" ? styles.activePage : ""}`}
              onClick={closeNav}
            >
              About
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`${styles.item} ${asPath == "/blog" ? styles.activePage : ""}`}
              onClick={closeNav}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`${styles.item} ${asPath == "/projects" ? styles.activePage : ""}`}
              onClick={closeNav}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`${styles.item} ${asPath == "/guestbook" ? styles.activePage : ""}`}
              onClick={closeNav}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.sideHead}>
          <div className={styles.name}>Christian Paranas</div>
          <div className={styles.prof}>Web Developer</div>
        </div>
        <div className={styles.sideItems}>
          <Link href="/">
            <div className={`${styles.sideItem} ${asPath == "/" ? styles.activePage : ""}`}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={`${styles.sideItem} ${asPath == "/about" ? styles.activePage : ""}`}>
              About
            </div>
          </Link>
          <Link href="/blog">
            <div className={`${styles.sideItem} ${asPath == "/blog" ? styles.activePage : ""}`}>
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`${styles.sideItem} ${
                asPath == "/projects" ? styles.activePage : ""
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`${styles.sideItem} ${
                asPath == "/guestbook" ? styles.activePage : ""
              }`}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

        <div className={styles.toggle}>
          <span>{theme == "dark" ? "Dark mode" : "Light mode"}</span>
          <div className={styles.togCon}>
            <ThemeChanger /> 
          </div>
        </div>
    </div>
  );
}

