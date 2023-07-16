import { SingleProductType } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = ({ data }: { data: SingleProductType }) => {
  return (
    <Link href={`/shop/${data.id}`} className="">
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

          <div>
            <p>${data.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
