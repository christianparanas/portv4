import Link from "next/link";
import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import ThemeChanger from "components/ThemeChanger";

export default function Nav() {
  const { theme } = useTheme();
  const { asPath } = useRouter();
  const [isOpen, setOpen] = useState(false);

  const closeNav = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <div className="text-slate-100 fixed top-0 w-full bg-[#11191f] z-50 border-b border-[#18232c]/75">
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <div className="text-lg font-extrabold" onClick={closeNav}>
            Christian Paranas
          </div>
        </Link>
        <div className="flex items-center">
          <div className="rounded-xl bg-gray-800/75 mr-2 shadow-lg">
            <ThemeChanger />
          </div>
          <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div
        className={`absolute z-50 w-full h-screen p-4 bg-inherit transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid gap-2 mt-4">
          <Link href="/">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/about"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              About
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/blog"
                  ? "px-4 py-2 bg-[#18232c]/75  shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/projects"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/guestbook"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="">
          <div className="">Christian Paranas</div>
          <div className="">Web Developer</div>
        </div>
        <div className="">
          <Link href="/">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/guestbook"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/about"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              About
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/blog"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/projects"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/guestbook"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Guestbook
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden">
        <span>{theme == "dark" ? "Dark mode" : "Light mode"}</span>
        <div className="">
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}
