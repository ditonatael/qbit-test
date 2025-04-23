import Image from "next/image";

export default function DecadesOfDedication() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center py-10 gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 relative">
          <Image
            fill
            src="/bali.webp"
            alt="coffee shop image"
            className="object-cover rounded-md"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:pl-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center lg:text-left">
            Decades of Dedication
          </h2>
          <p className="text-left text-sm md:text-base text-zinc-900 leading-relaxed">
            For over 25 years, we’ve been more than just a name — we’ve been a
            promise. A promise of unwavering quality, timeless tradition, and
            innovation brewed with heart. From generation to generation, our
            passion for perfecting every detail has stood the test of time. Each
            cup is a tribute to the legacy we’ve built — rich in flavor, steeped
            in history. Because excellence isn’t a milestone. It’s a way of
            life.
          </p>
        </div>
      </div>
    </div>
  );
}
