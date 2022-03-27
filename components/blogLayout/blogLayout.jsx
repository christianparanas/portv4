import Head from "next/head";
import FadeIn from "react-fade-in";

export default function BlogLayout({ children, meta }) {
  return (
    <div className="container">
      <Head>
        <title>{meta.title} | Christian Paranas</title>
      </Head>

      <FadeIn>
        <main className="blogLayout">
          <div className="content">{children}</div>
        </main>
      </FadeIn>
    </div>
  );
}
