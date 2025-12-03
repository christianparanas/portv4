"use client";
import Page from "components/Page";
import Image from "next/image";
import Link from "next/link";
import { Git, Linkedin } from "components/icons";
import FadeIn from "react-fade-in";

export default function About() {
  return (
    <Page>
      <main className="pt-6 sm:pt-8 mt-12 sm:mt-16 md:mt-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-[#203042] dark:to-[#304b5c] blur-2xl opacity-60 dark:opacity-40" />
                <Image
                  src="https://avatars.githubusercontent.com/u/59472122?v=4"
                  alt="Picture of me (Christian Paranas)"
                  width={200}
                  height={200}
                  className="relative rounded-2xl object-cover shadow-xl ring-2 ring-gray-100 dark:ring-[#203042] w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">Christian Paranas</h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 font-semibold mb-4 md:mb-6">Software Developer</p>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-slate-400 mb-4 md:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">Tacloban City, Philippines</span>
              </div>

              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                I build digital experiences that users love and businesses rely on. As a software developer, I combine a passion for UI/UX with the technical expertise to build robust, scalable back-ends. I thrive in collaborative environments where I can learn new frameworks, solve complex logic puzzles, and deliver products that actually work. I'm always looking for the next challenge in web innovation.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a href="https://github.com/christianparanas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition" aria-label="GitHub">
                  <Git />
                </a>
                <a href="https://www.linkedin.com/in/christianparanas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="mt-8 md:mt-10 grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-slate-100">Skills</h2>
              <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Angular",
                  "Node.js",
                  "HTML & CSS",
                  "C#",
                  "SQL",
                  "ASP.NET",
                  "Laravel",
                  "Codeigniter",
                  "WordPress",
                  "SQL Server",
                  "Git",
                  "DevOps",
                ].map((s) => (
                  <span key={s} className="px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-[#18232c]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-slate-100">Highlights</h2>
              <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gray-400 dark:bg-[#304b5c] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm md:text-base text-gray-900 dark:text-slate-100">Senior Software Developer at Accenture</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-slate-300">Building scalable solutions on Azure</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gray-400 dark:bg-[#304b5c] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm md:text-base text-gray-900 dark:text-slate-100">B.S. Information Technology, EVSU</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-slate-300">Graduated May 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={400}>
          <section className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 md:mb-6">Experience</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">Senior Software Developer</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Accenture, Cebu • Jun 2025 - Present</p>
                    <ul className="text-sm md:text-base text-gray-700 dark:text-slate-300 mt-2 space-y-1 list-disc list-inside">
                      <li>Acted as one of the primary technical liaison for stakeholders, translating complex business requirements into seamless UI/UX designs and robust backend logic.</li>
                      <li>Built systems from scratch and modernized legacy infrastructure by integrating scalable cloud solutions on Azure, significantly improving system stability and user accessibility.</li>
                      <li>Ensured operational excellence by providing advanced technical support and performance optimization, resolving critical issues to maintain service continuity.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">Programmer</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Geodata Solutions, Inc., Pasig City • Sept 2023 - Present</p>
                    <ul className="text-sm md:text-base text-gray-700 dark:text-slate-300 mt-2 space-y-1 list-disc list-inside">
                      <li>Enhanced digital services for a local government unit in the Philippines, improving user experience and efficiency with new features.</li>
                      <li>Integrated enhancements using SQL Server, ASP.NET, JavaScript, and Azure.</li>
                      <li>Provided continuous technical support for system stability and performance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">Software Developer Intern</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Telmo Solutions, Tacloban City • Feb 2023 - May 2023</p>
                    <ul className="text-sm md:text-base text-gray-700 dark:text-slate-300 mt-2 space-y-1 list-disc list-inside">
                      <li>Partnered with software developer interns to effectively deliver a major software project on schedule and within budget constraints.</li>
                      <li>Troubleshot software issues, pinpointed root causes, and implemented effective solutions to ensure optimal performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={500}>
          <section className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 md:mb-6">Education</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0-7l-9-5m9 5l9-5m-9 5v7m0-7l-9-5m9 5l9-5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">Information Technology</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Eastern Visayas State University, Tacloban City</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">Jun 2018 - May 2023</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">STEM</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Asian Development Foundation College, Tacloban City</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">Aug 2016 - May 2018</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100">Creative Web Design</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-slate-400 mt-1">Northridge Institute of Business and Technology Inc., Tacloban City</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">Dec 2020 - Jan 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={600}>
          <section className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 md:mb-6">Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3 md:mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Angular", "HTML & CSS", "WordPress"].map((tech) => (
                    <span key={tech} className="px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-[#18232c]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-100 mb-3 md:mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "C#", "ASP.NET", "Laravel", "Codeigniter", "SQL", "SQL Server", "Git", "DevOps"].map((tech) => (
                    <span key={tech} className="px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-[#18232c]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={700}>
          <section className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 md:mb-6">Interests</h2>
            <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
              <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 leading-relaxed mb-3 md:mb-4">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest web development trends. I'm passionate about creating efficient, scalable solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                {["Web Development", "Open Source", "UI/UX Design", "Technology Trends", "Problem Solving"].map((interest) => (
                  <span key={interest} className="px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-[#18232c]">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={800}>
          <section className="mt-8 md:mt-10 mb-12 md:mb-20">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 md:mb-6">Get in Touch</h2>
            <div className="rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 md:p-6 shadow-md dark:shadow-none">
              <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 leading-relaxed mb-4 md:mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through my social links or check out my work.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition text-sm font-medium">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/guestbook" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-[#18232c] bg-white dark:bg-[#18232c] text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-[#162028] transition text-sm font-medium">
                  Leave a Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </Page>
  );
}
