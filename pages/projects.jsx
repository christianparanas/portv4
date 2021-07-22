import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'



export default function Home() {

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
                Work projects:</div>
            </div>
            <div className="diff_proj">
              <div className="head">
                <img draggable="false" role="img" className="emoji" alt="💻" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4bb.svg" />
                Personal projects:</div>
            </div>
            <div className="diff_proj">
              <div className="head">
                <img draggable="false" role="img" className="emoji" alt="🕰" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f570.svg" />
                Older projects:</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}