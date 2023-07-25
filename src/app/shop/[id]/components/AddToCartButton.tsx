"use client";

import React from "react";
import { CartType } from "@/types/products";
import { nextAxios } from "@/utils/setupAxios";
import { Plus, Minus } from "@/app/components/Icons";
import { useRouter } from "next/navigation";

type AddToCartButtonType = {
  id: string;
  price: number;
  cart: CartType;
};

const AddToCartButton = ({ id, price, cart }: AddToCartButtonType) => {
  const router = useRouter();

  const addToCart = async () => {
    try {
      const response = await nextAxios.post("api/cart", { productId: id });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = async () => {
    try {
      const response = await nextAxios.delete("api/cart", { params: { id } });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return !!cart?.count ? (
    <div className="flex gap-3 items-center justify-between w-full">
      <button
        onClick={removeFromCart}
        className="p-2 bg-neutral-700 text-gray-50"
      >
        <Minus size={17} weight="bold" />
      </button>

      <span className="text-center w-full py-2 bg-neutral-700 text-gray-50">
        {cart.count} - ${price * cart.count}
      </span>

      <button onClick={addToCart} className="p-2 bg-neutral-700 text-gray-50">
        <Plus size={17} weight="bold" />
      </button>
    </div>
  ) : (
    <button
      onClick={addToCart}
      className="w-full py-2 bg-neutral-700 text-gray-50"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
