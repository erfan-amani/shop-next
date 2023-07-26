import { User } from "./user";

export type SingleProductType = {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartType<PT = string, UT = string> = {
  _id: string;
  product: PT;
  user: UT;
  count: number;
};
