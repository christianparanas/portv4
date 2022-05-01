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
    <div className="relative text-slate-100">
      <div className="flex justify-between items-center px-4 py-2 bg-[#11191f] z-50 border-b border-[#18232c]/75 fixed top-0 w-full md:hidden">
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
        className={`bg-[#11191f] z-50 w-full h-full top-[64px] p-4 transition-all md:hidden ${
          isOpen ? "fixed" : "hidden"
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
          <Link href="/gist">
            <div
              className={`rounded-lg w-fit transition-all ${
                asPath == "/gist"
                  ? "px-4 py-2 bg-[#18232c]/75  shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              Blog
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

      <div className="sidebar hidden md:block bg-[#11191f] md:fixed w-[380px] p-4 border-r-4 h-screen border-[#18232c]">
        <div className="mt-20 mb-10 pt-0 px-4 pb-4">
          <div className="text-2xl font-black">Christian Paranas</div>
          <div className="text-sm dark:text-slate-400">Web Developer</div>
        </div>
        <div className="p-4 grid gap-2">
          <Link href="/">
            <div
              className={`rounded-lg text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`rounded-lg text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/about"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              About
            </div>
          </Link>
          <Link href="/gist">
            <div
              className={`rounded-lg text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/gist"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Gist
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`rounded-lg text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/blog"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`rounded-xl text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/projects"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`rounded-xl text-[22px] w-fit transition-all cursor-pointer ${
                asPath == "/guestbook"
                  ? "px-4 py-2 bg-gray-800/50 shadow-sm"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              Guestbook
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center absolute bottom-8 left-12">
          <span className="text-md font-bold">
            {theme == "dark" ? "Dark mode" : "Light mode"}
          </span>
          <div className="rounded-xl bg-gray-800/75 ml-2 shadow-lg">
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
}
