import Hero from "~/components/Hero";
import ChooseUs from "~/components/ChooseUs";
import OurStory from "~/components/OurStory";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <div className="hidden lg:block">
        <OurStory />
      </div>
    </>
  );
}
