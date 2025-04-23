import { PiPlantFill } from "react-icons/pi";
import { SiFireship } from "react-icons/si";
import { FaMedal } from "react-icons/fa";

export default function ChooseUs() {
  return (
    <div className="container mx-auto py-12 px-4 flex flex-col gap-4 lg:flex-row lg:justify-between bg-zinc-100 lg:bg-white">
      <div className="flex flex-col gap-1.5 text-center lg:hidden">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <p>Our commitment to quality in every cup</p>
      </div>
      <div className="w-full lg:w-80 xl:w-96 h-40 bg-white shadow-md lg:shadow-none lg:border rounded-lg flex flex-col items-center justify-center hover:bg-black hover:border-white hover:text-white">
        <PiPlantFill size={30} />
        <h2 className="text-xl font-semibold mt-1.5">Organic Beans</h2>
        <p className="text-sm">Sourced from sustainable farms</p>
      </div>
      <div className="w-full lg:w-80 xl:w-96 h-40 bg-white shadow-md lg:shadow-none lg:border rounded-lg flex flex-col items-center justify-center hover:bg-black hover:border-white hover:text-white">
        <SiFireship size={30} />
        <h2 className="text-xl font-semibold mt-1.5">Traditional Roasting</h2>
        <p className="text-sm">Traditoinal roasting method</p>
      </div>
      <div className="w-full lg:w-80 xl:w-96 h-40 bg-white shadow-md lg:shadow-none lg:border rounded-lg flex flex-col items-center justify-center hover:bg-black hover:border-white hover:text-white">
        <FaMedal size={30} />
        <h2 className="text-xl font-semibold mt-1.5">Quality Guaranteed</h2>
        <p className="text-sm">Award-winning coffee blends</p>
      </div>
    </div>
  );
}
