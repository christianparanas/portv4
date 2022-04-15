import Masonry from "react-masonry-css";
import Image from "next/image";

import styles from "./services.module.scss";

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
  <div className={styles.services_wrapper}>
    <div className={styles.services_header}>
      <h2>Services</h2>
      <p>
        I provide impactful solutions that can be scaled to grow with your
        business or organization in the long term.
      </p>
    </div>

    <div className={styles.services_content_wrapper}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {servicesArr.map((service, key) => {
          return (
            <div className={styles.service_wrapper} key={key}>
              <div className={styles.img_wrapper}>
                <Image src={service.icon} alt="" width={60} height={60} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </Masonry>
    </div>
  </div>
);

export default Services;
