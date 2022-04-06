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
            width={320}
            height={320}
            className={styles.image}
          />
        </div>

        <div className={styles.data}>
          <p>
            Hi, I am Christian Paranas, an IT student from the Philippines. I
            love spending my free time watching video tutorials and reading
            articles about software development because I know it will give me
            great benefits when the time comes. I don't what I'm going to put in
            here, so, I will be right back haha.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            magnam illum rerum laborum? Quaerat ratione, sapiente omnis
            consequatur fugit deserunt eaque beatae voluptate, optio, possimus
            voluptas ipsa iure magnam dolores debitis quos cumque aspernatur
            error saepe consequuntur facilis consectetur minus soluta
            laudantium. Numquam voluptates quidem a obcaecati deleniti alias
            amet, saepe voluptate, sequi magnam ad est fuga, odit sapiente ipsam
            consequuntur dolorum. Illo ratione cum quae temporibus fugiat
            dolorem pariatur non ea maxime in dicta laudantium necessitatibus
            enim, tempore sunt magni laborum cumque harum voluptate impedit
            obcaecati. Modi error incidunt soluta corporis et, culpa, sit
            nesciunt, reprehenderit explicabo cumque repellendus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            exercitationem quidem optio in soluta deleniti vel maiores ad harum
            eaque numquam sapiente illo repudiandae expedita officia id
            laudantium autem, sequi est hic ratione illum? Consequuntur possimus
            mollitia voluptatum, fugit deserunt dolor dicta. Dolore voluptates
            veritatis eum aliquid quia ab officiis.
          </p>
        </div>
      </main>
    </Page>
  );
}
