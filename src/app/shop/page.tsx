import { SingleProductType } from "@/types/products";
import React from "react";
import ProductsList from "./components/ProductsList";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/product`,
      { cache: "no-cache" }
    );

    return response.json();
  } catch (error) {
    return [];
  }
};

const Shop = async () => {
  const data: SingleProductType[] = await getProducts();

  if (!data.length) {
    return "No product found!";
  }

  return (
    <div>
      <ProductsList data={data} />
    </div>
  );
};

export default Shop;
