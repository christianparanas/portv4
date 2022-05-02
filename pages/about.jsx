import Head from "next/head";
import Image from "next/image";

import Page from "components/Page";
import me from "public/me.png";
import { Git, Linkedin } from "components/icons";
import { Divide } from "hamburger-react";

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
                src={me}
                alt="Picture of me (Christian Paranas)"
                placeholder="blur"
                width={300}
                height={340}
                className="shadow-lg object-cover rounded-md"
              />
            </div>
            <span className="md:text-lg mt-6 text-slate-900 dark:text-slate-50">
              <p className="mb-6">
                Hello! I am Christian Paranas, a student from Tacloban city,
                Philippines. I am currently in my 3rd year in college, taking a
                bachelor's degree in Information Technology at Eastern Visayas
                State University.
              </p>
              <p>
                If I have spare time, I do freelance work, like building
                websites, software programs, photo editing, and other IT-related
                tasks for my schoolmates and other people who need my services.
              </p>
            </span>
          </div>

          <div className="relative mt-8 custom-shadow dark:border-2 dark:shadow-none rounded-[8px] p-3 border-[3px] border-[#fff] dark:border-[#18232c]">
            <span class="flex h-3 w-3 absolute right-[-5px] top-[-5px]">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <div className="text-slate-800 dark:text-slate-50 font-semibold">
              I am actively seeking for a client. If you have a project in mind
              or you think there is something that I can help you with my IT
              skills, don't hesitate to contact me. I will gladly help you with
              it.
            </div>
            <div className="mt-6">
              <h2 className="font-semibold text-sm">Contact Me:</h2>
              <div className="flex mt-2">
                <div className="dark:bg-[#18232c] border-[3px] border-[#fff] dark:border-[#18232c] p-2 w-fit h-fit rounded-full cursor-pointer custom-shadow dark:shadow-none">
                  <Linkedin />
                </div>
                <div className="dark:bg-[#18232c]  border-[3px] border-[#fff] dark:border-[#18232c] p-2 w-fit h-fit rounded-full cursor-pointer mx-2 custom-shadow dark:shadow-none">
                  <Git />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
