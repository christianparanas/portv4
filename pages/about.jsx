import Head from "next/head";
import Image from "next/image";

import Page from "components/Page";
import me from "public/me.png";

export default function About() {
  return (
    <Page>
      <Head>
        <title>About | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black">About Me</h1>
        <div className="flex justify-center items-center">
          <div className="my-6 w-[200px]">
            <Image
              src={me}
              alt="Picture of me (Christian Paranas)"
              placeholder="blur"
              width={320}
              height={320}
              className="rounded-[50%] shadow-lg"
            />
          </div>
        </div>

        <div className="">
          <p>In dev.</p>
        </div>
      </main>
    </Page>
  );
}
