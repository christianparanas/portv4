import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

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
        <div className={styles.img_wrapper}>
          <Image
            responsive={true}
            src={me}
            alt="Picture of me (Christian Paranas)"
            placeholder="blur"
            width={450}
            height={450}
            className={styles.image}
          />
        </div>

        <div className="data">
          <p>
            Hi, I am Christian Paranas, a web developer currently living in
            Tacloban City, Philippines.
          </p>
        </div>
      </main>
    </Page>
  );
}
