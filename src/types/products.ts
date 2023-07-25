export interface SingleProductType {
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
}

export interface CartType {
  _id: string;
  product: string;
  user: string;
  count: number;
}
