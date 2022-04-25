import Masonry from "react-masonry-css";
import Image from "next/image";

const servicesArr = [
  {
    icon: "/icons/sys.svg",
    title: "Custom Systems",
    description:
      "Streamline and automate your business process with systems that are customized for your needs.",
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
    icon: "/icons/design.svg",
    title: "Graphic Design",
    description:
      "Get modern and beautiful logos and layouts, update the look and feel of your business, and make it more impressive.",
  },
  {
    icon: "/icons/scrape.svg",
    title: "Web Scraping",
    description:
      "Extract data from any website and collect the necessary information to further enhance your business.",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Services = () => (
  <div className="">
    <div className="">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="mt-2 mb-4 text-sm text-gray-200">
        I provide impactful solutions that can be scaled to grow with your
        business or organization in the long term.
      </p>
    </div>

    <div className="">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {servicesArr.map((service, key) => (
          <div className="bg-white dark:bg-[#18232c] p-4 rounded-lg shadow-md" key={key}>
            <div className="">
              <Image src={service.icon} alt="" width={60} height={60} />
            </div>
            <h3 className="text-xl font-bold my-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </Masonry>
    </div>
  </div>
);

export default Services;
