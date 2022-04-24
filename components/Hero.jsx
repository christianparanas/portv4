import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = ({ title, description, children }) => {
  const { theme } = useTheme();

  return (
    <div className="mt-[120px] mb-20">
      <h1 className="text-2xl font-extrabold mb-2">{title}</h1>

      <p className="text-sm text-gray-300">{description}</p>
      <Link href="/about">
        <button className="font-bold mt-4 rounded-3xl shadow-lg px-5 py-2 bg-[#18232c] hover:bg-[#162028] cursor-pointer">More about me</button>
      </Link>
    </div>
  );
};

export default Hero;
