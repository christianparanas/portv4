import FadeIn from "components/FadeIn";

import styles from './docLayout.module.scss'
import Footer from "components/Footer";

export default function DocLayout({ children, title }) {
  return (
    <div className="container">
      <FadeIn>
        <main className={styles.layout}>
          <h1>{title}</h1>
          <div className="content">{children}</div>
        </main>
      </FadeIn>
    </div>
  );
}
