import FadeIn from "react-fade-in";

import Footer from "components/footer/footer";
import Nav from "components/Nav";


const Page = ({ children }) => (
  <div className="">
    <Nav />

    <FadeIn>
      <div className="grid md:grid-cols-[380px_1fr]">
        <main className="px-4 md:col-start-2 md:px-8">{children}</main>
      </div>
      <Footer />
    </FadeIn>
  </div>
);

export default Page;
