import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from "next/head";
import Link from "next/link";
import styles from "styles/blog.module.scss";
import Page from "components/page/page";

export default function Blog({ docs }) {
  console.log(docs);

  return (
    <Page>
      <Head>
        <title>Blog | Christian Paranas</title>
      </Head>

      <main className={styles.wrapper}>
        <h1 className="title">Blog</h1>

        <div className={styles.grid_wrapper}>
          {docs.map((doc, key) => (
            <div className={styles.con} key={key}>
              <h4>{doc.frontMatter.title}</h4>
              <p>{doc.frontMatter.description}</p>
              <Link
                href={"/blog/" + doc.slug}
                passHref
              >
                <a>Read more →</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Page>
  );
}


export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('docs'))
  const docs = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('docs', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      docs
    }
  }
}