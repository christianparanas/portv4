import Link from "next/link";

const Hero = ({ title, description }) => {
  return (
    <div className="mt-[100px] mb-20">
      <h1 className="text-slate-900 text-2xl font-black mb-2 dark:text-white md:text-3xl">
        {title}
      </h1>

      <p className="text-sm text-slate-800 dark:text-gray-300 md:my-4 md:text-lg">
        {description}
      </p>
      <Link href="/about">
        <button className="font-bold mt-4 rounded-3xl text-white shadow-lg px-5 py-2 bg-[#18232c] hover:bg-[#162028] cursor-pointer">
          More about me
        </button>
      </Link>
    </div>
  );
};

export default Hero;
