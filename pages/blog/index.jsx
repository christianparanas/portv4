import Head from "next/head";
import Link from "next/link";
import { useEffect } from 'react'

import { blogs } from "../../lib/getBlogs";

import styles from 'styles/blog.module.scss'
import Page from 'components/page/page'

export default function Blog() {

  useEffect(() => {
    console.log(blogs)
  }, [])

  return (
    <Page>
      <Head>
        <title>Blog | Christian Paranas</title>
      </Head>

      <main className={styles.wrapper}>
        <h1 className="title">Blog</h1>

        <div className={styles.grid_wrapper}>
          {blogs.map((blog) => (
            <div className={styles.con} key={blog.link}>
              <h4>{blog.module.meta['title']}</h4>
              <Link href={'/blog' + (blog.link).split(".").slice(0, -1).join(".")}>
                <a>Read more →</a>
              </Link>
            </div>
          ))}  
        </div>
      </main>
    </Page>
  )
}