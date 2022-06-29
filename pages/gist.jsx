import React from "react";
import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as moment from "moment";

import Page from "components/Page";
import CodeBlock from "components/codeBlock";

import { getGists } from "lib/github";

export default function Gist({ gists, avatarUrl, username }) {
  return (
    <Page>
      <Head>
        <title>Gist | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black text-slate-900 dark:text-slate-50">
          {gists.length > 1 ? "Gists" : "Gist"}
        </h1>

        <div className="mt-10 grid gap-5 w-full">
          {gists.map((gist) => (
            <GistCard
              gist={gist}
              avatarUrl={avatarUrl}
              username={username}
              key={gist.id}
            />
          ))}
        </div>
      </main>
    </Page>
  );
}

export function GistCard({ gist, avatarUrl, username }) {
  return (
    <div className="min-w-[200px] bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
      <header className="text-sm mb-2 flex flex-col md:flex-row md:justify-between">
        <div className="">
          <div className="flex mb-2 items-center">
            <img
              src={avatarUrl}
              alt="gist user"
              className="w-[30px] h-[30px] object-cover rounded-full mr-3"
            />
            <div className="">
              <span>{username}</span>
              <span className="mx-1">/</span>
              <span>{gist.files[0].name}</span>
            </div>
          </div>

          <span className="text-[7px] text-slate-500 dark:text-slate-300">
            Created {moment(gist.createdAt).fromNow()}
          </span>
          <div className="font-medium">{gist.description}</div>
        </div>
      </header>
      <div className="text-sm">
        <CodeBlock className="overflow-auto">{gist.files[0].text}</CodeBlock>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { gists, avatarUrl, username } = await getGists();

  return {
    props: {
      gists,
      avatarUrl,
      username,
    },
    revalidate: 1,
  };
}
