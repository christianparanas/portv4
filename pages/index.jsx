import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

// components
import Linkedin from '../components/svgs/Linkedin'
import Git from '../components/svgs/Git'


export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>About Me | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="content">
          <h1 className="title">About Me</h1>
          <div className="img">
            <Image
              src="/me.jpg"
              alt="Picture of the author"
              width={225}
              height={225}
              quality={90}
            />
          </div>
          <div className="text">
            <div className="t1">
              <img draggable="false" role="img" className="emoji" alt="🙎🏻‍♂️" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f64e-1f3fb-200d-2642-fe0f.svg" /> I’m a software developer currently in Tacloban City, <img draggable="false" role="img" className="emoji" alt="🇵🇭" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f1f5-1f1ed.svg" /> Philippines. 
               Specializing in building websites and applications. My current toolset includes 
               Vue, React, Angular, Redux, Node, Laravel, and other various frameworks, libraries, and technologies related to them.
            </div>
          </div>

          <div className="reachout">
            <div className="lbl">LINKS:</div>
            <div className="link_cons">
              <a href="https://github.com/christianparanas" target="_blank"><div className="link_con"><Git /></div></a>
              <a href="#" target="_blank"><div className="link_con"><Linkedin /></div></a>
              <div className="resume">
                Resume 
              </div>
            </div>
            
          </div>
      
       </div>
        
      </main>
    </div>
  )
}

// <i className="fad fa-file-download"></i>
