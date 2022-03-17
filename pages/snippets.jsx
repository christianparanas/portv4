import Head from "next/head";
import { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import useSWR from 'swr'
import Masonry from "react-masonry-css";

// components
import { Code } from '../components'


const baseURL = 'https://api.github.com'

const fetcher = async (params) => {
  const res = await fetch(`${baseURL + params}`)
  const data = await res.json()

  return data
}

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 1,
  500: 1,
};


export default function Snippets() {
  const { data, error } = useSWR([`/users/christianparanas/gists`], fetcher)


  useEffect( async () => {
    if(data)  {
      console.log(data)
    }
  }, [data])

  return (
    <div className="container">
      <Head>
        <title>Snippets | Christian Paranas</title>
      </Head>

      <FadeIn>
        <div className="snippets">
          <main className="content">
            <h1 className="title">Gists</h1>

            <div className="wrapper">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {data && data.map((gist, key) => {
                  return (
                    <div key={key} className="gist">
                      <div className="header">{gist.description}</div>
                      <Code props={gist.url} />
                    </div>
                  )
                })}
              </Masonry>
            </div>
          </main>
        </div>
      </FadeIn>
    </div>
  );
}
