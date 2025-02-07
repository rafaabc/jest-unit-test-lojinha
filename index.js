module.exports = function calculateDiscount(products) {
  let foundSpecialProduct = false;
  const totalValue = products
    .map((product) => {
      const { uniqueId, unitPrice, quantity } = product;
      if (uniqueId === "PROMO-LOJINHA") foundSpecialProduct = true;
      return unitPrice * quantity;
    })
    .reduce((acc, value) => acc + value, 0);
  if (foundSpecialProduct) return totalValue * 0.2;
  if (totalValue > 0 && totalValue <= 499.99) return totalValue * 0.05;
  if (totalValue >= 500 && totalValue <= 999.99) return totalValue * 0.1;
  if (totalValue >= 1000) return totalValue * 0.15;
  return 0;
};
