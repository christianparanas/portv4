import Head from "next/head";
import Image from "next/image";
import FadeIn from "react-fade-in";

// import components
import { Linkedin, Git } from "../components/svgs";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About Me | Christian Paranas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <main className="main">
          <div className="content">
            <h1 className="title">About Me</h1>
            <div className="img">
              <Image
                src="/me.png"
                alt="Picture of the author"
                width={225}
                height={225}
                quality={90}
              />
            </div>
            <div className="text">
              <div className="t1">
                <img
                  draggable="false"
                  role="img"
                  className="emoji"
                  alt="🙎🏻‍♂️"
                  src="https://s.w.org/images/core/emoji/13.0.1/svg/1f64e-1f3fb-200d-2642-fe0f.svg"
                />{" "}
                I’m a Web developer currently in Tacloban city,{" "}
                <img
                  draggable="false"
                  role="img"
                  className="emoji"
                  alt="🇵🇭"
                  src="https://s.w.org/images/core/emoji/13.0.1/svg/1f1f5-1f1ed.svg"
                />{" "}
                Philippines. I specialize in building websites and applications.
                My current toolset includes React, Angular, Node, Laravel,
                and other various frameworks, libraries, and technologies
                related to them.
              </div>
            </div>

            <div className="reachout">
              <div className="lbl">LINKS:</div>
              <div className="link_cons">
                <a href="https://github.com/christianparanas" target="_blank">
                  <div className="link_con">
                    <Git />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/christianparanas"
                  target="_blank"
                >
                  <div className="link_con">
                    <Linkedin />
                  </div>
                </a>
                <a
                  className="resume"
                  href="/resume-christianparanas.pdf"
                  download
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </main>
      </FadeIn>
    </div>
  );
}
