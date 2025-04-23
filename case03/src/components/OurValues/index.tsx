import { GiThreeLeaves, GiHighShot } from "react-icons/gi";
import { VscOrganization } from "react-icons/vsc";

export default function OurValues() {
  return (
    <div className="bg-zinc-100">
      <div className="container mx-auto py-20 px-4 flex flex-col items-center gap-4">
        <div className="flex text-center">
          <h2 className="text-3xl font-semibold">Our Values</h2>
        </div>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-80 xl:w-96 h-40 flex flex-col items-center text-center">
            <GiThreeLeaves size={30} />
            <h2 className="text-xl font-semibold mt-1.5">Sustainibility</h2>
            <p className="text-sm">
              Committed to environmental responsibility and ethical sourcing
              practices.
            </p>
          </div>
          <div className="w-full lg:w-80 xl:w-96 h-40 flex flex-col items-center text-center">
            <GiHighShot size={30} />
            <h2 className="text-xl font-semibold mt-1.5">Quality</h2>
            <p className="text-sm">
              Uncompromising standards in every bean we select and roast
            </p>
          </div>
          <div className="w-full lg:w-80 xl:w-96 h-40 flex flex-col items-center text-center">
            <VscOrganization size={30} />
            <h2 className="text-xl font-semibold mt-1.5">Comunity</h2>
            <p className="text-sm">
              Building lasting relationships with farmers and customers alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
