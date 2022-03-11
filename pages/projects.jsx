import Head from "next/head";
import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Masonry from "react-masonry-css";
import useSWR from 'swr'
import * as _ from 'lodash'

// import components
import { Card } from "../components";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

const baseURL = 'https://api.github.com'

const fetcher = async (params) => {
  const res = await fetch(`${baseURL + params}`)
  const data = res.json()

  return data
}

export default function Projects() {
  const [limit, setLimit] = useState(8)
  const { data, error } = useSWR([`/users/christianparanas/repos?sort=created_at&per_page=${limit}`], fetcher)
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(data)  {
      // store the data from the api to projects variable
      setProjects(data)
      setIsLoading(false)

      console.log(data)
    }
  }, [data])


  const loadMoreProjects = () => {
    // this limit state change will trigger the useSWR fetcher and load the new data from api with the new limit
    setLimit(prevState => prevState + 4)

    // take the new loaded data from api and get only the new 4 projects from the api
    let newLoadedProjects = _.takeRight(data, 4)

    // store the 4 new projects from the api to the projects variable
    // this solved the unnecessary re-rendering of other already loaded projects in the dom 
    setProjects(prevArray => [...prevArray, ...newLoadedProjects])
  }

  return (
    <div className="container">
      <Head>
        <title>Projects | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <main className="projects">
          <div className="content">
            <h1 className="title">Projects</h1>
            <p className="head_p">
              Some existing open-source projects that I worked on with other
              people for work, or as personal side-projects.
            </p>

            <div className="diff_projs">
              <div className="diff_proj">
                <div className="head">
                  <img
                    draggable="false"
                    role="img"
                    className="emoji"
                    alt="💻"
                    src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4bb.svg"
                  />
                  Personal projects:
                </div>
                <div className="diff_proj_content">
                  {error && (<div>Something went wrong.</div>)}

                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {!isLoading ? (projects.map((project, key) => {
                      return (
                        <React.Fragment key={key}>
                          <Card props={project} />
                        </React.Fragment>
                      );
                    })) : (<>Loading</>)
                  }
                  </Masonry>
                </div>
              </div>

              <button onClick={loadMoreProjects}>load more</button>
            </div>
          </div>
        </main>
      </FadeIn>
    </div>
  );
}


export const getStaticProps = async () => {
  const res = await fetch(`${baseURL}?sort=created_at&per_page=8`)
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
}
