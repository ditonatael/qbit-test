import Hero from "~/components/Hero";
import ChooseUs from "~/components/ChooseUs";
import OurStory from "~/components/OurStory";
import ProductList from "~/components/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <div className="hidden lg:block">
        <OurStory />
      </div>
      <div className="block lg:hidden text-center">
        <h2 className="text-3xl font-semibold mt-7">Discover Our Products</h2>
        <ProductList />
      </div>
    </>
  );
}
