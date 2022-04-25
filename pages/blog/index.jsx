import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from "next/head";
import Link from "next/link";

import Page from "components/Page";

export default function Blog({ docs }) {
  console.log(docs);

  return (
    <Page>
      <Head>
        <title>Blog | Christian Paranas</title>
      </Head>

      <main className="mt-[100px]">
        <h1 className="text-2xl font-black">Blog</h1>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {docs.map((doc, key) => (
            <div className="dark:bg-[#18232c] p-4 rounded-lg shadow-lg" key={key}>
              <h4>{doc.frontMatter.title}</h4>
              <p className="text-sm dark:text-slate-400 mb-6">{doc.frontMatter.description}</p>
              <Link
                href={"/blog/" + doc.slug}
                passHref
              >
                <a className="text-sm">Read more →</a>
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