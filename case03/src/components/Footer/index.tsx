import { PiCoffeeFill } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { Input } from "~/components/ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-slate-900 text-white pt-10 pb-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-0">
        {/* Brand */}
        <div className="flex flex-col gap-4 lg:gap-7">
          <h2 className="font-bold text-xl flex items-center gap-1">
            <PiCoffeeFill /> KopiKampung
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Creating perfect coffee moments <br /> since 1997
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 lg:gap-7">
          <h2 className="font-bold">Contact</h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            123 Coffee Street <br /> Bean City, BC11166 <br />
            kopikampung@mail.com
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4 lg:gap-7">
          <h2 className="font-bold">Follow Us</h2>
          <div className="flex gap-4">
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaTiktok size={20} />
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 lg:gap-7 w-full lg:w-auto">
          <h2 className="font-bold">Newsletter</h2>
          <div className="flex flex-col sm:flex-row">
            <Input
              placeholder="Your Email"
              className="bg-white text-black w-full sm:w-72 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg sm:rounded-r-none"
            />
            <Button className="bg-white text-black sm:rounded-r-lg sm:rounded-l-none mt-2 sm:mt-0 hover:text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-600 my-8"></div>

      <div className="text-center text-sm px-4">
        © 2025 KopiKampung. All rights reserved.
      </div>
    </div>
  );
}
