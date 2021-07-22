import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'


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
              🙎🏻‍♂️ I’m a software developer currently in Tacloban city, 🇵🇭 Philippines. 
               Specializing in building websites and applications. My current toolset includes 
               Vue, React, Redux, Node, Laravel, and other various frameworks, libraries, and technologies related to them.
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}
