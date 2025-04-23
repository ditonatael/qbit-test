import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function OurStory() {
  return (
    <div className="bg-zinc-100 py-20">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <div className="flex flex-col gap-0.5 pr-12">
            <span className="text-semibold underline">
              Fresh, natural, and full of stories.
            </span>
            <span className="text-justify text-zinc-900">
              From the cool mountain mists to the comforting aroma in your cup,
              each sip of our coffee tells a story that stirs not just your
              senses—but your soul. Founded in 1997 in a humble village rooted
              in tradition and community spirit, Kopi Kampung was born to
              preserve the heart of local coffee culture.
            </span>
          </div>
          <span className="flex gap-4 text-sm font-bold">
            <span className="flex gap-1 items-center">
              <FaCheck />
              100% Arabic Beans
            </span>
            <span className="flex gap-1 items-center">
              <FaCheck />
              Fair Trade Certified
            </span>
          </span>
        </div>
        <div className="w-1/2 h-96 relative">
          <Image
            fill
            src="/coffee-shop.webp"
            alt="coffee shop image"
            className="object-cover rounded-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
