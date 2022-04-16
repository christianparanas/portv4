import Head from "next/head";
import Image from "next/image";
import styles from "styles/about.module.scss";
import Page from "components/page/page";

import me from "public/me.png";

export default function About() {
  return (
    <Page>
      <Head>
        <title>About | Christian Paranas</title>
      </Head>

      <main className={styles.wrapper}>
        <h1>About Me</h1>
        <div className={styles.img_wrapper}>
          <Image
            responsive={true}
            src={me}
            alt="Picture of me (Christian Paranas)"
            placeholder="blur"
            width={320}
            height={320}
            className={styles.image}
          />
        </div>

        <div className={styles.data}>
          <p>Hi, I am Christian Paranas, an IT student from the Philippines.</p>
        </div>
      </main>
    </Page>
  );
}
