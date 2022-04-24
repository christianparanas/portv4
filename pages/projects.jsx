import Head from "next/head";
import React from "react";
import Masonry from "react-masonry-css";
import * as _ from "lodash";

// styles
import "react-loading-skeleton/dist/skeleton.css";
import styles from "styles/projects.module.scss";

// import components
import Project from "components/project/project";
import Page from "components/page/page";

// libs
import { getPinnedRepos, getRepos } from "lib/github";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

export default function Projects({ repos, pinnedRepos }) {
  return (
    <Page>
      <Head>
        <title>Projects | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.description}>
          Some existing open-source projects that I worked on with other people
          for work, or as personal side-projects.
        </p>

        <div className={styles.grid_wrapper}>
          <h2>Pinned Projects</h2>

          <div className={styles.content}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {pinnedRepos.map((repo, key) => (
                <Project key={key} props={repo} />
              ))}
            </Masonry>
          </div>

          <h2>Repos</h2>
          <div className={styles.content}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {repos.map((repo, key) => (
                <Project key={key} props={repo} />
              ))}
            </Masonry>
          </div>

          {false && <div className={styles.loadMoreBtn}>load more</div>}
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
  };
}
