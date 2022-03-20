import Head from "next/head";

export default function BlogLayout({ children, meta}) {
  return (
    <div className="container">
      <Head>
        <title>Projects | Christian Paranas</title>
      </Head>

      <main className="blogLayout">

        <div className="content">
          {children}
        </div>
      </main>

    </div>
  )
}