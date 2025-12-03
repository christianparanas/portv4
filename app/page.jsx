"use client";
import Page from "components/Page";
import Services from "components/Services";
import Image from "next/image";
import Link from "next/link";
import { Git } from "components/icons";
import FadeIn from "react-fade-in";

const skills = [
  "JavaScript",
  "React",
  "Angular",
  "Node.js",
  "C#",
  "ASP.NET",
  "Laravel",
  "SQL Server",
];

const experience = [
  {
    title: "Senior Software Developer",
    company: "Accenture",
    location: "Cebu",
    period: "Jun 2025 - Present",
    description: "Building scalable solutions on Azure",
  },
  {
    title: "Programmer",
    company: "Geodata Solutions, Inc.",
    location: "Pasig City",
    period: "Sept 2023 - Present",
    description: "Enhancing digital services for local government",
  },
];

export default function Home() {
  return (
    <Page>
      {/* Background decoration */}
      <div className="hidden md:block fixed -z-50 -right-[100px] opacity-10 dark:opacity-5">
        <img src="/images/javascript.svg" alt="" className="w-[500px]" />
      </div>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 mt-12 sm:mt-16 md:mt-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-[#203042] dark:to-[#304b5c] blur-2xl opacity-60 dark:opacity-40" />
                <Image
                  src="https://avatars.githubusercontent.com/u/59472122?v=4"
                  alt="Christian Paranas"
                  width={180}
                  height={180}
                  className="relative rounded-2xl object-cover shadow-2xl ring-4 ring-white/50 dark:ring-[#203042]/50 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {/* Status indicator */}
                {/* <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#18232c] shadow-lg border border-gray-100 dark:border-[#203042]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Available</span>
                </div> */}
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Software Developer
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-3 sm:mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Christian Paranas
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
                I build digital experiences that users love and businesses rely on. 
                Combining a passion for UI/UX with technical expertise to deliver 
                robust, scalable solutions.
              </p>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-slate-400 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Tacloban City, Philippines</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
                <Link href="/about">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base">
                    More About Me
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 dark:border-[#203042] bg-white dark:bg-[#18232c] text-gray-700 dark:text-slate-300 font-semibold hover:border-gray-300 dark:hover:border-[#304b5c] hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
                    View Projects
                  </button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
                <a
                  href="https://github.com/christianparanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#18232c] text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-[#203042] hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Git />
                </a>
                <a
                  href="https://www.linkedin.com/in/christianparanas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#18232c] text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-[#203042] hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats Section */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#203042] bg-white dark:bg-[#18232c] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">2+</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Years Experience</div>
            </div>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#203042] bg-white dark:bg-[#18232c] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">20+</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Projects Built</div>
            </div>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#203042] bg-white dark:bg-[#18232c] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">10+</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Technologies</div>
            </div>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#203042] bg-white dark:bg-[#18232c] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">∞</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-medium mt-1">Passion</div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Skills & Experience Section */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Skills Card */}
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 sm:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#18232c] text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-[#203042] hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium mt-4 hover:gap-2 transition-all duration-200">
                View all skills
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Experience Card */}
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-4 sm:p-6 shadow-lg dark:shadow-none hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-gray-200 dark:border-[#203042]">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500"></div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{exp.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{exp.company} • {exp.period}</p>
                    <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-4 hover:gap-2 transition-all duration-200">
                Full experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="mt-12 sm:mt-16 md:mt-20">
        <FadeIn delay={300}>
          <Services />
        </FadeIn>
      </section>

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
    </Page>
  );
}
