import { SingleProductType } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star } from "@/app/components/Icons";

const SingleProduct = ({ data }: { data: SingleProductType }) => {
  return (
    <Link href={`/shop/${data._id}`} className="">
      <div className="flex flex-col h-full">
        <div className="relative h-[200px] w-full border border-gray-600">
          <Image
            alt={data.title}
            src={data.image}
            layout="fill"
            objectFit="contain"
            className="p-8"
          />
        </div>

        <div className="flex flex-col justify-between border border-gray-700 border-t-0 flex-grow [&>*]:px-2 [&>*]:py-1">
          <h2 className="line-clamp-3 text-sm">{data.title}</h2>

          <div className="flex justify-between">
            <p>${data.price}</p>

            <div className="flex gap-1 items-center">
              <Star className="text-yellow-400" weight="fill" />
              <p className="text-sm">{data.rating.rate}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
