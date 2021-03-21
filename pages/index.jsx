import Head from 'next/head'
import { useState } from 'react'

// components
import Nav from '../components/Nav'


export default function Home() {
  

  return (
    <div className="container">
      <Head>
        <title>Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Nav />
        <div className="content">
          <h1 className="title">About Me</h1>
          <div className="img">
            <img src="/me.png" alt="me" />
          </div>
          <div className="text">
            <div className="t1">
              🙎🏻‍♂️ I’m a software developer currently in Tacloban city, 🇵🇭 Philippines. 
               Specializing in building websites and applications. My current toolset includes 
               Vue, React, Redux, Node, Laravel, and other various frameworks, libraries, and technologies related to them.
            </div>
            <div className="t1">
              As an engineer, my core competency is in full-stack web development 
              with Python, Golang, and Javascript, devops 
              and observability, and Amazon Web Services.
            </div>
          </div>
        </div>
        <div className="footer">&#169; 2021 Christian Paranas</div>
      </main>
    </div>
  )
}
