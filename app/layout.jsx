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
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@bf7775b/css/all.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="canonical" href="https://christianparanas.vercel.app/" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
