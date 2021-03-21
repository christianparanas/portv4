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
      </main>
    </div>
  )
}
