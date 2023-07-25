import { CartType, SingleProductType } from "@/types/products";
import Image from "next/image";
import React from "react";
import { Star } from "@/app/components/Icons";
import AddToCartButton from "./components/AddToCartButton";

const getProduct = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}/product/${id}`,
      { cache: "no-cache" }
    );

    return response.json();
  } catch (error) {
    return [];
  }
};

type ItemProps = {
  params: { id: string };
};

const page = async ({ params }: ItemProps) => {
  const { id } = params;

  const { product, cart }: { product: SingleProductType; cart: CartType } =
    await getProduct(id);

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="relative w-full before:pt-[60%] before:block">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold"> {product.title}</h3>
            <div className="flex gap-4 items-center">
              <h4 className="text-xl font-normal">${product.price}</h4>
              <div className="flex gap-1 items-center">
                <Star className="text-yellow-400" weight="fill" size={15} />
                <p className="text-xs">
                  {product.rating.rate}
                  <span className="opacity-70">({product.rating.count})</span>
                </p>
              </div>
            </div>

            <p className="text-sm opacity-75 mt-4">{product.description}</p>
          </div>

          <AddToCartButton id={product._id} price={product.price} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default page;
