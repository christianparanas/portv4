import React from "react";
import Link from "next/link";
import { Git } from "components/icons";

const footerLinks = [
  { name: "Home", url: "/" },
  { name: "Twitter", url: "https://twitter.com/chrisparams" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/christianparanas" },
  { name: "About", url: "/about" },
  { name: "GitHub", url: "https://github.com/christianparanas" },
  { name: "RSS", url: "/feed.xml" },
  { name: "Blog", url: "/blog" },
  { name: "Dribbble", url: "https://dribbble.com/chris" },
];

function Footer() {
  return (
    <footer className="mt-16 mb-8 md:mt-24 pt-8 md:pt-10 border-t border-gray-200 dark:border-[#203042]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
        {/* Brand */}
        <div className="md:max-w-xs">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Christian Paranas</h3>
          <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
            Software Developer building digital experiences that users love.
          </p>
        </div>

        {/* Links */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.url} 
                className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 inline-flex items-center gap-2 text-sm"
              >
                {link.name === "Home" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5l9-7 9 7V20a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5H9v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9.5z"/></svg>
                )}
                {link.name === "About" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-6v-4"/></svg>
                )}
                {link.name === "Blog" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm0 4h10"/></svg>
                )}
                {link.name === "GitHub" && <Git />}
                {link.name === "LinkedIn" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9v9M6 6.5a1.25 1.25 0 11-2.5 0A1.25 1.25 0 016 6.5zM10 9h3m-3 0v9m7 0v-6a3 3 0 00-3-3h0a3 3 0 00-3 3v6"
                    />
                  </svg>
                )}
                {link.name === "Twitter" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4h5.5L10.5 9l3-5H21l-6.5 8.5L21 20h-5.5L13.5 15l-3 5H3l6.5-8.5L3 4z"
                    />
                  </svg>
                )}
                {link.name === "Dribbble" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.5 4.5A8.97 8.97 0 0115 4c1.657 0 3.2.45 4.5 1.24M7 7a8.97 8.97 0 00-3 5c-.26 1.243-.26 2.5 0 3.743M10 10c1.5.5 3.5.5 5 .5 1.33 0 2.657-.167 3.5-.5M10 10c.9 1.4 1.9 3.5 2.5 5.5M10 10C8.5 9.5 6.5 9 5 9"
                    />
                  </svg>
                )}
                {link.name === "RSS" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5c7.18 0 13 5.82 13 13M5 11c3.866 0 7 3.134 7 7M7 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-gray-100 dark:border-[#203042]">
        <p className="text-center text-sm text-gray-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Christian Paranas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
