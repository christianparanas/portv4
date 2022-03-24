import Link from 'next/link'

import Nav from 'components/nav/nav'
import styles from './page.module.scss'

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Twitter', url: 'https://twitter.com/chrisparams' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/christianparanas' },
  { name: 'Newsletter', url: '/newsletter' },
  { name: 'About', url: '/about' },
  { name: 'GitHub', url: 'https://github.com/christianparanas' },
  { name: 'RSS', url: '/feed.xml' },
  { name: 'Blog', url: '/blog' },
  { name: 'Dribbble', url: 'https://dribbble.com/chris' },
  { name: 'Books', url: '/books' },
  { name: 'Changelog', url: '/changelog' },
]

const Page = ({ children }) => (
  <div className={styles.container}>
    <Nav />

    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {footerLinks.map(link => (
          <li key={link.name}>
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>&copy; Christian Paranas {new Date().getFullYear()}</p>
    </footer>
  </div>
)

export default Page