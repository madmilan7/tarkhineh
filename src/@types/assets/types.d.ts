export interface Address {
  addressTitle: string;
  phoneNumber: string;
  address: string;
}

export interface dataType {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  quantity?: number;
}
