import { dataType } from "../@types/assets/types";

export const calculateTotalDiscount = (items: dataType[]) => {
  let totalDiscount = 0;

  items.forEach((item: any) => {
    const discount = (item.price * item.discount * item.quantity) / 100;
    totalDiscount += discount;
  });
  return totalDiscount;
};

export const calculateTotalPrice = (items: dataType[]) => {
  let totalPrice = 0;

  items.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};