import FadeIn from "react-fade-in";

import Footer from "components/Footer";
import Nav from "components/Nav";

const Page = ({ children }) => (
  <div className="grid md:grid-cols-[380px_1fr]">
    <Nav />

    <FadeIn>
      <div className="px-4 md:col-start-2 md:px-8 md:max-w-[1000px] mx-auto">
        <main className="min-h-screen h-fit">{children}</main>
        <Footer />
      </div>
    </FadeIn>
  </div>
);

export default Page;
