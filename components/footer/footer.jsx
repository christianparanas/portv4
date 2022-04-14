import React from "react";
import Link from 'next/link'
import styles from './footer.module.scss'

const footerLinks = [
  { name: "Home", url: "/" },
  { name: "Twitter", url: "https://twitter.com/chrisparams" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/christianparanas" },
  { name: "About", url: "/about" },
  { name: "GitHub", url: "https://github.com/christianparanas" },
  { name: "RSS", url: "/feed.xml" },
  { name: "Blog", url: "/blog" },
  { name: "Dribbble", url: "https://dribbble.com/chris" },
  { name: "Books", url: "/books" },
  { name: "Changelog", url: "/changelog" },
  { name: "Newsletter", url: "/newsletter" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <ul className={styles.links}>
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>
          &copy; Christian Paranas {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
