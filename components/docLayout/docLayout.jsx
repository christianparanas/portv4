import Head from "next/head";
import FadeIn from "react-fade-in";

import styles from './docLayout.module.scss'
import Footer from "components/Footer";

export default function DocLayout({ children, title }) {
  return (
    <div className="container">
      <Head>
        <title>{title} | Christian Paranas</title>
      </Head>

      <FadeIn>
        <main className={styles.layout}>
          <h1>{title}</h1>
          <div className="content">{children}</div>
        </main>
      </FadeIn>
    </div>
  );
}
