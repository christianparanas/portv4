import React from "react";
import Link from "next/link";

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
    <footer className="mt-12 mb-4 md:mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="py-2 mt-5">
        <ul className="grid grid-cols-3 gap-4 mb-12">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.url} passHref>
                <a className="hover:text-slate-400 transition-all cursor-pointer">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p className="flex justify-center text-slate-400">
          &copy; Christian Paranas {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
