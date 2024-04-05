import { Product } from "@/components";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  robots: {
    index: true,
    follow: true,
  },
  
}

const ProductPage = () => {
  return (
    <main className="overflow-hidden">
      <Product />
    </main>
  );
};

export default ProductPage;
