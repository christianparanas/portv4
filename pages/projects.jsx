import Head from 'next/head'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// data
import projects from './api/projects.json'


export default function Home() {
  const [projs, setProjs] = useState(projects)
  const [hasWorkProjs, setHasWorkProjs] = useState(false)

  return (
    <div className="container">
      <Head>
        <title>Projects | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="projects">
        <div className="content">
          <h1 className="title">Projects</h1>
          <p className="head_p">Some existing open-source projects that I worked on with other people for work, or as personal side-projects.</p>
        
          <div className="diff_projs">
            <div className="diff_proj">
              <div className="head">
                <img draggable="false" role="img" className="emoji" alt="💼" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4bc.svg" />
                Work projects:
              </div>
              <div className="diff_proj_content">
                <ul>
                  {hasWorkProjs ? 
                    (<>Hello</>) 
                    : 
                    (<div className="noproj_p">No projects yet!</div>)
                  }
                </ul>
              </div>
            </div>
            <div className="diff_proj">
              <div className="head">
                <img draggable="false" role="img" className="emoji" alt="💻" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4bb.svg" />
                Personal projects:
              </div>
              <div className="diff_proj_content">
                <ul>
                  {projs[1].map((val, key) => {
                    return (
                      <li key={key}>
                        <strong><a href={val.projectLink} target="_blank">{val.projectName}</a></strong>
                          -  {val.projectDescription}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
