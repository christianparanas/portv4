import Head from "next/head";
import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import useSWR from 'swr'

// components
import { Code } from '../components'

const baseURL = 'https://api.github.com'

const fetcher = async (params) => {
  const res = await fetch(`${baseURL + params}`)
  const data = await res.json()

  return data
}

export default function Snippets() {
  const { data, error } = useSWR([`/users/christianparanas/gists`], fetcher)


  useEffect( async () => {
    if(data)  {
      console.log(data)
    }
  }, [data])

  return (
    <div className="snippets__container">
      <Head>
        <title>Snippets | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <div className="snippets">
          <h3>Code Snippets | Gists</h3>

          <div className="wrapper">
            {data && data.map((gist, key) => {
              return (
                <div key={key} className="gist">
                  <div className="header">{gist.description}</div>
                  <Code />
                </div>
              )
            })}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
