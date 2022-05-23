import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Page from "components/Page";

export default function Blog({ docs }) {
  const [status, setStatus] = useState(false);

  return (
    <Page>
      <Head>
        <title>Blog | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black text-slate-900 dark:text-slate-50">
          Blog
        </h1>

        {status == false ? (
          <div className="grid place-content-center h-96">
            <div className="">
              <img src="/icons/redux.svg" alt="" className="w-[250px] h-[250px]" />
              <div className="text-slate-900 dark:text-slate-50 font-black text-3xl text-center mt-6">Coming Soon.</div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {docs.map((doc, key) => (
              <div
                className="bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]"
                key={key}
              >
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                  {doc.frontMatter.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {doc.frontMatter.description}
                </p>
                <Link href={"/blog/" + doc.slug} passHref>
                  <a className="text-sm text-slate-600 dark:text-slate-200">
                    Read more →
                  </a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </Page>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("docs"));
  const docs = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("docs", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      docs,
    },
  };
};
