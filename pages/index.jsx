import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import components
import { Linkedin, Git, Icon1, Icon2, Icon3, Icon4 } from "../components/icons";

import Page from "components/page/page";
import PageHeader from "components/pageheader/pageheader";
import Services from "components/services/services";

export default function Home() {
  return (
    <Page>
      <PageHeader
        title="Hi, I am Christian Paranas."
        description="I’m a web developer based in Tacloban City, Philippines. My current toolset includes React, Angular, Node, Laravel, and other various frameworks, libraries, and technologies related to them."
      >
        <Link href="/about">
          <button>More about me</button>
        </Link>
      </PageHeader>

      <Services />
    </Page>
  );
}
