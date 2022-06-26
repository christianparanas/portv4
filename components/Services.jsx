import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import FadeIn from "react-fade-in";

const servicesArr = [
  {
    icon: "/icons/design.svg",
    title: "Graphic Design",
    description:
      "Get modern and beautiful logos and layouts, update the look and feel of your business, and make it more impressive.",
  },
  {
    icon: "/icons/web.svg",
    title: "Websites",
    description:
      "Elevate your digital presence with a professionally made website that increases your brand value.",
  },
  {
    icon: "/icons/ecommerce.svg",
    title: "Online Stores",
    description:
      "Bring your business online, reach more customers, and make handling transactions easier and efficient.",
  },
  {
    icon: "/icons/app.svg",
    title: "Mobile Applications",
    description:
      "Promote your business or organization and reach even more people with mobile applications either on Android or iOS.",
  },
  {
    icon: "/icons/sys.svg",
    title: "Custom Systems",
    description:
      "Streamline and automate your business process with systems that are customized for your needs.",
  },
  {
    icon: "/icons/scrape.svg",
    title: "Web Scraping",
    description:
      "Extract data from any website and collect the necessary information to further enhance your business.",
  },
];

const Services = () => (
  <div className="">
    <div className="">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="mt-2 mb-4 text-sm dark:text-gray-200">
        I provide impactful solutions that can be scaled to grow with your
        business or organization in the long term.
      </p>
    </div>

    <div className="">
      <FadeIn>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {servicesArr.map((service, key) => (
              <div
                className={`bg-white dark:bg-[#18232c] p-3 rounded-[8px] custom-shadow dark:shadow-none border-[3px] border-solid border-[#fafafa] dark:border-[#18232c]  cursor-pointer transition-all ${
                  key == 0 || key == 4
                    ? "hover:bg-slate-100 dark:bg-purple-800 dark:hover:bg-purple-700"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 "
                }`}
                key={key}
              >
                <div className="">
                  <Image src={service.icon} alt="" width={60} height={60} />
                </div>
                <h3 className="text-xl font-bold my-2 text-slate-700 dark:text-slate-50">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-gray-300 font-semibold">
                  {service.description}
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </FadeIn>
    </div>
  </div>
);

export default Services;
