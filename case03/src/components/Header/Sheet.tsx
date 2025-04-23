import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export default function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        {" "}
        <SheetTitle></SheetTitle>
        <div className="flex flex-col mt-7 gap-4">
          <span className="h-10 border-b pl-1.5 font-light">Home</span>
          <span className="h-10 border-b pl-1.5 font-light">Products</span>
          <span className="h-10 border-b pl-1.5 font-light">About</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
