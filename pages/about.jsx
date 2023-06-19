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
                src="https://avatars.githubusercontent.com/u/59472122?u=80920e8c7f13d0415c3a68ff7f36527bdd3d3003&v=4"
                alt="Picture of me (Christian Paranas)"
                placeholder="blur"
                width={300}
                height={300}
                className="shadow-lg object-cover rounded-md"
              />
            </div>
            <span className="md:text-md mt-6 text-slate-900 dark:text-slate-50">
              <p className="mb-6">
                Hello! I am Christian Paranas from Tacloban city,
                Philippines. I am currently a college student, taking a
                bachelor's degree in Information Technology at Eastern Visayas
                State University.
              </p>
              <p>
                If I have spare time, I do freelance work, like building
                websites, software programs, photo editing, and other IT-related
                tasks for my schoolmates and for other people who need my services.
              </p>
            </span>
          </div>

        </div>
      </main>
    </Page>
  );
}
