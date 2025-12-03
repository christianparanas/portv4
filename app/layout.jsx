import "styles/globals.scss";
import Providers from "./providers";

export const metadata = {
  title: "Christian Paranas | Web Developer",
  description:
    "Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion.",
  openGraph: {
    title: "Christian Paranas | Web Developer",
    siteName: "Christian Paranas",
    description:
      "Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion.",
    images: [
      {
        url: "https://christianparanas.vercel.app/me.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Christian Paranas | Web Developer",
    description:
      "Hi, I am Christian Paranas a web development enthusiast that is armed with experience, learning, and passion.",
    images: ["https://christianparanas.vercel.app/me.png"],
    site: "https://christianparanas.vercel.app",
    creator: "@christianparams",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Christian Paranas | Web Developer",
    url: "https://christianparanas.vercel.app/",
    author: {
      "@type": "Person",
      name: "Christian Paranas",
      jobTitle: "Software Developer",
      url: "https://christianparanas.vercel.app/",
      sameAs: [
        "https://github.com/christianparanas",
        "https://www.linkedin.com/in/christianparanas",
        "https://twitter.com/chrisparams",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@bf7775b/css/all.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="canonical" href="https://christianparanas.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
