import React from "react";
import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import * as moment from "moment";

import Page from "components/Page";
import CodeBlock from "components/codeBlock";

import { getGists } from "lib/github";

export default function Gist({ gists, avatarUrl, username }) {
  console.log(gists);

  return (
    <Page>
      <Head>
        <title>Gist | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black">
          {gists.length > 1 ? "Gists" : "Gist"}
        </h1>

        <div className="mt-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="15px">
              {gists.map((gist) => (
                <GistCard gist={gist} avatarUrl={avatarUrl} username={username} key={gist.id} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </main>
    </Page>
  );
}

export function GistCard({ gist, avatarUrl, username }) {
  return (
    <div className="bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-lg border-[3px] border-solid border-[#fafafa] dark:border-[#11191f]">
      <header className="text-sm mb-2">
        <div className="flex mb-2 items-center">
          <img src={avatarUrl} alt="gist user" className="w-[30px] h-[30px] object-cover rounded-full mr-3" />
          <div className="">
            <span>{username}</span>
            <span className="mx-1">/</span>
            <span>{gist.files[0].name}</span>
          </div>
        </div>

        <span className="text-[10px] dark:text-slate-400">
          Created {moment(gist.createdAt).fromNow()}
        </span>
        <div className="">{gist.description}</div>
      </header>
      <div className="text-sm">
        <CodeBlock>{gist.files[0].text}</CodeBlock>
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
