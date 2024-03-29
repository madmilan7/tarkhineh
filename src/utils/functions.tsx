export const calculateTotalDiscount = (items: any) => {
  let totalDiscount = 0;

  items.forEach((item: any) => {
    const discount = (item.price * item.discount * item.quantity) / 100;
    totalDiscount += discount;
  });
  return totalDiscount;
};

export const calculateTotalPrice = (items: any) => {
  let totalPrice = 0;

  items.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });
  return totalPrice;
};