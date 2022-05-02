import Head from "next/head";
import React from "react";
import * as _ from "lodash";
import FadeIn from "react-fade-in";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import components
import Project from "components/Project";
import Page from "components/Page";

// libs
import { getPinnedRepos, getRepos } from "lib/github";

export default function Projects({ repos, pinnedRepos }) {
  return (
    <Page>
      <Head>
        <title>Projects | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black mb-4">Projects</h1>
        <p className="text-md text-slate-500 dark:text-slate-300">
          Some existing open-source projects that I worked on with other people
          for work, or as personal side-projects.
        </p>

        <div className="mt-10">
          <h2 className="text-lg mb-4">Pinned Repos</h2>

          <div className="">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            >
              <Masonry gutter="15px">
                {pinnedRepos.map((repo, key) => (
                  <Project key={key} props={repo} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <h2 className="text-lg my-4 mt-20">Repos</h2>
          <FadeIn>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            >
              <Masonry gutter="15px">
                {repos.map((repo, key) => {
                  return <Project key={key} props={repo} />;
                })}
              </Masonry>
            </ResponsiveMasonry>
          </FadeIn>

          {false && <div className="">load more</div>}
        </div>
      </main>
    </Page>
  );
}

export async function getStaticProps() {
  const repos = await getRepos();
  const pinnedRepos = await getPinnedRepos();

  return {
    props: {
      repos,
      pinnedRepos,
    },
    revalidate: 1,
  };
}
