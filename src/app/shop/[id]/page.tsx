import { SingleProductType } from "@/types/products";
import Image from "next/image";
import React from "react";
import { Star } from "@/app/components/Icons";

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
  searchParams: { search?: string };
};

const page = async ({ params, searchParams }: ItemProps) => {
  const { id } = params;

  const data: SingleProductType = await getProduct(id);

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="relative w-full before:pt-[60%] before:block">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold"> {data.title}</h3>
            <div className="flex gap-4 items-center">
              <h4 className="text-xl font-normal">${data.price}</h4>
              <div className="flex gap-1 items-center">
                <Star className="text-yellow-400" weight="fill" size={15} />
                <p className="text-xs">
                  {data.rating.rate}
                  <span className="opacity-70">({data.rating.count})</span>
                </p>
              </div>
            </div>

            <p className="text-sm opacity-75 mt-4">{data.description}</p>
          </div>

          <button className="w-full py-2 bg-neutral-700 text-gray-50">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
