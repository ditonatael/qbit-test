import { Button } from "../ui/button";
import Image from "next/image";

export default function ProductCard({ item }: any) {
  return (
    <div className="w-80 h-96 border rounded-md bg-white shadow-sm p-4 flex flex-col gap-4">
      <div className="w-full h-64 relative">
        <Image
          fill
          src={item.image}
          alt="coffee image"
          className="object-cover rounded-md"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <span className="text-sm font-semibold text-zinc-500 line-clamp-1">
          {item.description}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">IDR{item.price}</span>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
