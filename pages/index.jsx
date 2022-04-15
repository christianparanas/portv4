import Link from "next/link";

import Page from "components/page/page";
import Hero from "components/hero/hero";
import Services from "components/services/services";

export default function Home() {
  return (
    <Page>
      <Hero
        title="Hi, I am Christian Paranas."
        description="I’m a web developer based in Tacloban City, Philippines. My current toolset includes React, Angular, Node, Laravel, and other various frameworks, libraries, and technologies related to them."
      >
        <Link href="/about">
          <button>More about me</button>
        </Link>
      </Hero>

      <Services />
    </Page>
  );
}
