import Head from "next/head";
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import useSWR from "swr";
import * as _ from "lodash";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import components
import Project from "components/project/project";
import Page from "components/page/page";

// import styles
import styles from "styles/projects.module.scss";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

const baseURL = "https://api.github.com";

const fetcher = async (params) => {
  const res = await fetch(`${baseURL + params}`);
  const data = res.json();

  return data;
};

export default function Projects() {
  const [limit, setLimit] = useState(8);
  const { data, error } = useSWR(
    [`/users/christianparanas/repos?sort=created_at&per_page=${limit}`],
    fetcher
  );
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [publicRepoCount, setPublicRepoCount] = useState(null);

  useEffect(async () => {
    if (data) {
      // store the data from the api to projects variable
      console.log(data)

      setProjects(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    fetchUserGithubData();
  }, [data]);

  const fetchUserGithubData = async () => {
    const res = await fetch("https://api.github.com/users/christianparanas");
    const datas = await res.json();

    // store the public repo count for later use - load more
    setPublicRepoCount(datas.public_repos);
  };

  const loadMoreProjects = () => {
    // this limit state change will trigger the useSWR fetcher and load the new data from api with the new limit
    setLimit((prevState) => prevState + 4);

    // take the new loaded data from api and get only the new 4 projects from the api
    let newLoadedProjects = _.takeRight(data, 4);

    // store the 4 new projects from the api to the projects variable
    // this solved the unnecessary re-rendering of other already loaded projects in the dom
    setProjects((prevArray) => [...prevArray, ...newLoadedProjects]);
  };

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
          <h2>Personal Projects</h2>

          <div className={styles.content}>
            {error ? (
              <div className="wentWrong">
                Something went wrong. <span>reload</span>
              </div>
            ) : (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {!isLoading
                  ? projects.map((project, key) => {
                      return (
                        <React.Fragment key={key}>
                          <Project props={project} />
                        </React.Fragment>
                      );
                    })
                  : [...Array(8).keys()].map((el, key) => (
                      <React.Fragment key={key}>
                        <Skeleton count={1} height={132} />
                      </React.Fragment>
                    ))}
              </Masonry>
            )}
          </div>

          {!error && !(projects.length >= publicRepoCount) && (
            <div className={styles.loadMoreBtn} onClick={loadMoreProjects}>
              load more
            </div>
          )}
        </div>
      </main>
    </Page>
  );
}
