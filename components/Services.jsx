"use client";
import Image from "next/image";

const servicesArr = [
  {
    icon: "/icons/design.svg",
    title: "Graphic Design",
    description:
      "Get modern and beautiful logos and layouts, update the look and feel of your business, and make it more impressive.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: "/icons/web.svg",
    title: "Websites",
    description:
      "Elevate your digital presence with a professionally made website that increases your brand value.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "/icons/ecommerce.svg",
    title: "Online Stores",
    description:
      "Bring your business online, reach more customers, and make handling transactions easier and efficient.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: "/icons/app.svg",
    title: "Mobile Applications",
    description:
      "Promote your business or organization and reach even more people with mobile applications either on Android or iOS.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: "/icons/sys.svg",
    title: "Custom Systems",
    description:
      "Streamline and automate your business process with systems that are customized for your needs.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: "/icons/scrape.svg",
    title: "Web Scraping",
    description:
      "Extract data from any website and collect the necessary information to further enhance your business.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const Services = () => (
  <div>
    {/* Section Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Impactful solutions that scale with your business
        </p>
      </div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesArr.map((service, key) => (
        <div
          key={key}
          className="group relative rounded-2xl border border-gray-200 dark:border-[#18232c] bg-white dark:bg-[#11191f] p-5 shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          {/* Gradient accent on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          {/* Icon with gradient background */}
          <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-4`}>
            <div className="w-full h-full rounded-[10px] bg-white dark:bg-[#11191f] flex items-center justify-center">
              <Image src={service.icon} alt={service.title} width={32} height={32} className="opacity-80" />
            </div>
          </div>

          <h3 className="relative text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="relative text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
            {service.description}
          </p>

          {/* Arrow indicator */}
          <div className="relative mt-4 flex items-center text-sm font-medium text-gray-400 dark:text-slate-500 group-hover:text-gray-600 dark:group-hover:text-slate-300 transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more</span>
            <svg className="w-4 h-4 ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
