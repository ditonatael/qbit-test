import { PiCoffeeFill } from "react-icons/pi";
import MobileSheet from "./Sheet";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-14 border-b border-zinc-200">
      <div className="h-full container mx-auto flex items-center justify-between px-4">
        <Link href={"/"}>
          <h1 className="font-bold text-xl flex items-center gap-0.5">
            <PiCoffeeFill /> KopiKampung
          </h1>
        </Link>
        <div className="hidden md:flex gap-4 text-zinc-700">
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/products"}>
            <span>Products</span>
          </Link>
          <Link href={"/about"}>
            <span>About</span>
          </Link>
        </div>
        <div className="block md:hidden">
          <MobileSheet />
        </div>
      </div>
    </div>
  );
}
