import Link from "next/link";
import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import ThemeChanger from "components/ThemeChanger";

export default function Nav() {
  const { theme } = useTheme();
  const pathname = usePathname();
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
                pathname == "/"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5l9-7 9 7V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9.5z"/></svg>
                Home
              </span>
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`rounded-lg w-fit transition-all ${
                pathname == "/about"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-6v-4"/></svg>
                About
              </span>
            </div>
          </Link>
          <Link href="/gist">
            <div
              className={`rounded-lg w-fit transition-all ${
                pathname == "/gist"
                  ? "px-4 py-2 bg-[#18232c]/75  shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M6 11h12M10 15h4"/></svg>
                Gist
              </span>
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`rounded-lg w-fit transition-all ${
                pathname == "/blog"
                  ? "px-4 py-2 bg-[#18232c]/75  shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm0 4h10"/></svg>
                Blog
              </span>
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`rounded-lg w-fit transition-all ${
                pathname == "/projects"
                  ? "px-4 py-2 bg-[#18232c]/75 shadow-lg"
                  : "px-2 py-2 hover:bg-[#18232c]/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm6-3h6v3H9V4z"/></svg>
                Projects
              </span>
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`rounded-lg w-fit transition-all ${
                pathname == "/guestbook"
                  ? "px-4 py-2 bg-gray-800/75 shadow-lg"
                  : "px-2 py-2 hover:bg-gray-800/40 hover:px-4"
              }`}
              onClick={closeNav}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M21 15a4 4 0 01-4 4H7l-4 3V6a4 4 0 014-4h10a4 4 0 014 4v9z"/></svg>
                Guestbook
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="sidebar hidden md:block bg-[#11191f] md:fixed w-[380px] p-4 border-r-4 h-screen border-[#18232c]">
        <div className="mt-20 mb-10 pt-0 px-4 pb-4">
          <div className="text-2xl font-black">Christian Paranas</div>
          <div className="text-sm text-slate-400">Web Developer</div>
        </div>
        <div className="p-4 grid gap-2">
          <Link href="/">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5l9-7 9 7V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9.5z"/></svg>
                Home
              </span>
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/about"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-6v-4"/></svg>
                About
              </span>
            </div>
          </Link>
          <Link href="/gist">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/gist"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M6 11h12M10 15h4"/></svg>
                Gist
              </span>
            </div>
          </Link>
          <Link href="/blog">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/blog"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm0 4h10"/></svg>
                Blog
              </span>
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/projects"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm6-3h6v3H9V4z"/></svg>
                Projects
              </span>
            </div>
          </Link>
          <Link href="/guestbook">
            <div
              className={`rounded-xl text-[20px] w-fit transition-all cursor-pointer ${
                pathname == "/guestbook"
                  ? "px-4 py-1 bg-gray-800/50 shadow-sm"
                  : "px-2 py-1 hover:bg-gray-800/40 hover:px-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M21 15a4 4 0 01-4 4H7l-4 3V6a4 4 0 014-4h10a4 4 0 014 4v9z"/></svg>
                Guestbook
              </span>
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
