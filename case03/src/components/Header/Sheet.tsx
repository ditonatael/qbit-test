import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <div className="flex flex-col mt-7 gap-4 ">
          <Link href={"/"} className="w-full">
            <div className="h-12 pl-4 border-b w-full">Home</div>
          </Link>
          <Link href={"/products"} className="w-full">
            <div className="h-12 pl-4 border-b w-full">Products</div>
          </Link>
          <Link href={"/about"} className="w-full">
            <div className="h-12 pl-4 border-b w-full">About</div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
