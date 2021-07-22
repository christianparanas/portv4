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
          Projects
        </div>
        
      </main>
    </div>
  )
}