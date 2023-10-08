import Head from "next/head";
import Image from "next/image";

import Page from "components/Page";

export default function About() {
  return (
    <Page>
      <Head>
        <title>About | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black text-slate-900 dark:text-slate-50">
          About Me
        </h1>

        <div className="mt-10 rounded-[8px]">
          <div className="grid md:grid-cols-[300px_1fr] gap-[30px]">
            <div className="w-[300px] mx-auto">
              <Image
                src="https://avatars.githubusercontent.com/u/59472122?v=4"
                alt="Picture of me (Christian Paranas)"
                placeholder="blur"
                width={300}
                height={300}
                className="shadow-lg object-cover rounded-md"
              />
            </div>
            <span className="md:text-md mt-6 text-slate-900 dark:text-slate-50">
              <p className="mb-6">
                Hello! I am Christian Paranas from Tacloban City, Philippines. I have recently graduated from Eastern Visayas State University with a bachelor's degree in Information Technology. 
              </p>
              <p>
                In my spare time, I engage in freelance work, offering services such as website development, software programming, photo editing, and other IT-related tasks to assist my schoolmates and anyone else in need of my expertise.
              </p>
            </span>
          </div>

        </div>
      </main>
    </Page>
  );
}
