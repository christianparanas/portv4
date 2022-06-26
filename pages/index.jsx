import Page from "components/Page";
import Hero from "components/Hero";
import Services from "components/Services";

export default function Home() {
  return (
    <Page>
      <div className="hidden md:block fixed -z-50 -right-[100px] opacity-10 dark:opacity-5">
        <img src="/images/javascript.svg" alt="" className="w-[500px]" />
      </div>
      <Hero
        title="Hi, I am Christian Paranas."
        description="I’m a web developer based in Tacloban City, Philippines. My current toolset includes React, Angular, Node, Laravel, and other various frameworks, libraries, and technologies related to them."
      />

      <Services />
    </Page>
  );
}
