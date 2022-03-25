import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'

import styles from 'styles/blog.module.scss'
import Page from 'components/page/page'

export default function About() {

  return (
    <Page>
      <Head>
        <title>About | Christian Paranas</title>
      </Head>

      <main className="about">
        <h1 className="title">About</h1>


      </main>
    </Page>
  )
}