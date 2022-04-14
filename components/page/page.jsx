import Link from "next/link";
import FadeIn from "react-fade-in";

import Footer from "components/footer/footer";
import Nav from "components/nav/nav";
import styles from "./page.module.scss";


const Page = ({ children }) => (
  <div className={styles.container}>
    <Nav />

    <FadeIn>
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </FadeIn>
  </div>
);

export default Page;
