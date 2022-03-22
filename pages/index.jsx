import Head from "next/head";
import Image from "next/image";
import FadeIn from "react-fade-in";

// import components
import { Linkedin, Git, Icon1, Icon2, Icon3, Icon4 } from "../components/svgs";

const servicesArr = [
  {
    icon: "1",
    title: "Custom Systems",
    description: "Streamline and automate your business process with systems that are customized for your needs."
  },
  {
    icon: "2",
    title: "Websites",
    description: "Elevate your digital presence with a professionally made website that increases your brand value."
  },
  {
    icon: "3",
    title: "Online Stores",
    description: "Bring your business online, reach more customers, and make handling transactions easier and efficient."
  },
  {
    icon: "4",
    title: "Mobile Applications",
    description: "Promote your business or organization and reach even more people with mobile applications either on Android or iOS."
  },
  {
    icon: "2",
    title: "Graphic Design",
    description: "Get modern and beautiful logos and layouts, update the look and feel of your business, and make it more impressive."
  },
  {
    icon: "2",
    title: "Web Scraping",
    description: "Extract data from any website and collect the necessary information to further enhance your business."
  },
]

export default function Home() {

  const attachIcon = (icon) => {
    if(icon == "1") return <Icon1 />
    if(icon == "2") return <Icon2 />
    if(icon == "3") return <Icon3 />
    if(icon == "4") return <Icon4 />
  }

  return (
    <div className="container">
      <Head>
        <title>Christian Paranas | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <main className="main">
          <div className="content">
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
                Hi, I’m Christian Paranas a web developer currently based in Tacloban city,{" "}
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
            
            <div className="services">
              <div className="header">
                <h1>Services</h1>
                <p>I provide impactful solutions that can be scaled to grow with your business or organization in the long term.</p>
              </div>

              <div className="services-wrapper">
                {servicesArr.map((service, key) => {
                  return (
                      <div key={key} className="service-wrapper">
                        <div className="icon">{ attachIcon(service.icon) }</div>
                        <h3>{ service.title }</h3>
                        <p>{ service.description }</p>
                      </div>
                    )
                })}
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
