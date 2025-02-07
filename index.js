module.exports = function calculateDiscount(products) {
  if (!products.length) return 0;
  if (products.length === 1) {
    const { unitPrice, quantity } = products[0];
    const totalValue = unitPrice * quantity;
    if (totalValue > 0 && totalValue <= 499.99) return totalValue * 0.05;
    if (totalValue >= 500 && totalValue <= 999.99) return totalValue * 0.1;
    if (totalValue >= 1000) return totalValue * 0.15;
  }
  return 0;
};
