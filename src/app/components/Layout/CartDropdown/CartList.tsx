import { CartType, SingleProductType } from "@/types/products";
import { nextAxios } from "@/utils/setupAxios";
import { Plus, Minus } from "@/app/components/Icons";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const CartList = ({ close }: { close: () => void }) => {
  const [loading, setLoading] = React.useState(true);
  const [cart, setCart] = React.useState<CartType<SingleProductType>[]>([]);
  const orderSum = loading
    ? 0
    : cart?.reduce?.(
        (sum: number, { count, product: { price } }) => sum + count * price,
        0
      );

  const addToCart = async (id: string) => {
    try {
      const response = await nextAxios.post("api/cart", { productId: id });
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromCart = async (id: string) => {
    try {
      const response = await nextAxios.delete("api/cart", { params: { id } });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const getCartList = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXT_SERVER_BASE_URL}/api/cart`,
          { method: "GET", next: { tags: ["cart"], revalidate: 0 } }
        );
        const data = await res.json();

        const response = await nextAxios.get("api/cart");

        setCart(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    getCartList();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[150px]">
        loading...
      </div>
    );
  } else if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[150px]">
        <p className="text-sm mb-4">No item in cart</p>
        <Link className="underline" href="/shop" onClick={close}>
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-4 py-4">
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="opacity-80">
          {cart.length} item{cart.length > 1 ? "s" : ""}
        </span>

        <button className="font-bold">Go to cart</button>
      </div>
      <div className="flex flex-col">
        {cart.map((item, index) => (
          <div
            key={item._id}
            className={`flex gap-4 items-center py-4 ${
              index !== cart.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              <button
                onClick={() => addToCart(item.product._id)}
                className="p-1"
              >
                <Plus size={10} weight="bold" />
              </button>
              <span className="text-xs">{item.count}</span>
              <button
                onClick={() => removeFromCart(item.product._id)}
                className="p-1"
              >
                <Minus size={10} weight="bold" />
              </button>
            </div>

            <div className="flex gap-3">
              <div>
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col text-xs">
                <p className="">{item.product.title}</p>
                <p className="mt-1 font-bold">
                  ${(item.count * item.product.price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px]">Subtotal</span>
          <span className="text-sm">${orderSum.toFixed(2)}</span>
        </div>
        <button className="text-gray-200 bg-gray-700 py-[4px] px-3 rounded-sm text-sm">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default CartList;
