"use client";
import { Button } from "../ui/button";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import ProductCard from "../ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<null | any[]>(null);
  const [loading, setLoading] = useState(true);

  const handleGetProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  });
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products?.map((item, i) => {
            return (
              //   <div
              //     key={i}
              //     className="w-80 h-96 border rounded-md bg-white shadow-sm p-4 flex flex-col gap-4"
              //   >
              //     <div className="w-full h-64 bg-zinc-400 rounded-md"></div>
              //     <div>
              //       <h2 className="text-lg font-semibold">{item.name}</h2>
              //       <span className="text-sm font-semibold text-zinc-500 line-clamp-1">
              //         {item.description}
              //       </span>
              //     </div>
              //     <div className="flex justify-between items-center">
              //       <span className="font-semibold">IDR{item.price}</span>
              //       <Button>Learn More</Button>
              //     </div>
              //   </div>
              <ProductCard key={i} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
