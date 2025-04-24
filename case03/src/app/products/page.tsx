import ProductList from "~/components/ProductList";

export default function Products() {
  return (
    <div className="bg-zinc-100">
      <div className="py-20 text-center">
        <h2 className="text-5xl font-semibold mb-4">Our Coffee Products</h2>
        <span className="text-sm font-semibold text-zinc-500">
          A journey of taste begins here — premium beans <br /> from the heart
          of Indonesia’s rich coffee heritage.
        </span>
      </div>
      <ProductList />
    </div>
  );
}
