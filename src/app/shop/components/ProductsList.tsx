import { SingleProductType } from "@/types/products";
import React from "react";
import SingleProduct from "./SingleProduct";

type ProductsListProps = {
  data: SingleProductType[];
};

const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3>ProductsList</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {data.map((product) => (
          <SingleProduct key={product._id.toString()} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
