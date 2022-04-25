import Page from "components/Page";
import Hero from "components/Hero";
import Services from "components/Services";

export default function Home() {
  return (
    <Page>
      <Hero
        title="Hi, I am Christian Paranas."
        description="I’m a web developer based in Tacloban City, Philippines. My current toolset includes React, Angular, Node, Laravel, and other various frameworks, libraries, and technologies related to them."
      />

      <Services />
    </Page>
  );
}
