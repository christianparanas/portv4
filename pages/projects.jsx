import Head from "next/head";
import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Masonry from "react-masonry-css";

// data
import projects from "./api/projects.json";

// import components
import { Card } from "../components";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};

export default function Home() {
  const [projs, setProjs] = useState(projects);

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
                    alt="💼"
                    src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4bc.svg"
                  />
                  Work projects:
                </div>
                <div className="diff_proj_content">
                  <ul>
                    {!projs[0] ? (
                      <>Hello</>
                    ) : (
                      <div className="noproj_p">No projects yet!</div>
                    )}
                  </ul>
                </div>
              </div>
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
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {projs[1].map((project, key) => {
                      return (
                        <React.Fragment key={key}>
                          <Card props={project} />
                        </React.Fragment>
                      );
                    })}
                  </Masonry>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FadeIn>
    </div>
  );
}
