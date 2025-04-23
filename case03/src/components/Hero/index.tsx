import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-zinc-100 py-20">
      <div className="container mx-auto flex items-center">
        <div className="flex flex-col">
          <h2 className="text-6xl font-bold mb-2">
            Crafting Perfect Coffee Since 1997
          </h2>
          <span className="text-lg font-light">
            Rasa otentik dari tanah Indonesia yang kaya akan tradisi
          </span>
          <Button className="w-56 h-12 mt-8 font-semibold">
            Explore Our Coffee
          </Button>
        </div>
        <div className="w-2/3 h-96 relative">
          <Image
            fill
            sizes="fill"
            src={"/coffee-brew.webp"}
            alt="coffee image"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}
