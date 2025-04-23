import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-zinc-100 py-20">
      <div className="container mx-auto flex items-center px-4 gap-10">
        <div className="w-full lg:w-1/2 h-96 relative">
          <Image
            fill
            src="/coffee-brew.webp"
            alt="coffee image"
            className="object-cover rounded-md"
            priority
          />
          <div className="lg:hidden absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Crafting Perfect Coffee Since 1997
            </h2>
            <span className="text-white text-base font-light">
              Rasa otentik dari tanah Indonesia yang kaya akan tradisi
            </span>
            <Button className="w-48 h-10 mt-6 font-semibold text-sm text-black bg-white rounded-full">
              Discover Our Story
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-1/2">
          <h2 className="text-5xl xl:text-6xl font-bold mb-2">
            Crafting Perfect Coffee Since 1997
          </h2>
          <span className="text-lg font-light">
            Rasa otentik dari tanah Indonesia yang kaya akan tradisi
          </span>
          <Button className="w-56 h-12 mt-8 font-semibold">
            Explore Our Coffee
          </Button>
        </div>
      </div>
    </div>
  );
}
