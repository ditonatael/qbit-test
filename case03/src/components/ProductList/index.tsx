"use client";

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
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {products?.map((item, i) => {
            return <ProductCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
