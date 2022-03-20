import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'

import { blogs } from "../../lib/getBlogs";

export default function Blog() {

  useEffect(() => {
    console.log(blogs)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Blog | Christian Paranas</title>
      </Head>

      <main className="blog">

        <div className="content">
          <h1 className="title">Blog</h1>

          <div className="wrapper">
            {blogs.map((blog) => (
              <div className="con" key={blog.link}>
                <h4>{blog.module.meta['title']}</h4>
                <Link href={'/blog' + (blog.link).split(".").slice(0, -1).join(".")}>
                  <a>Read more →</a>
                </Link>
              </div>
            ))}  
          </div>
        </div>
      </main>

    </div>
  )
}