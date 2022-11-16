export interface IUserRegData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  part_number: string;
  type: string;
  cost: string;
  cost_usdollar: string;
  currency_id: string;
  price: string;
  price_usdollar: string;
  product_image: string;
  amount: number;
  category: string;
  planeItems?: string[];
  includedInPlane: boolean;
}
