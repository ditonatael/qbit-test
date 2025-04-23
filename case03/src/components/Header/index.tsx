import { PiCoffeeFill } from "react-icons/pi";
import MobileSheet from "./Sheet";

export default function Header() {
  return (
    <div className="h-14 border-b border-zinc-200">
      <div className="h-full container mx-auto flex items-center justify-between px-4">
        <h1 className="font-bold text-xl flex items-center gap-0.5">
          <PiCoffeeFill /> KopiKampung
        </h1>
        <div className="hidden md:flex gap-4 text-zinc-700">
          <span>Home</span>
          <span>Products</span>
          <span>About</span>
        </div>
        <div className="block md:hidden">
          <MobileSheet />
        </div>
      </div>
    </div>
  );
}
