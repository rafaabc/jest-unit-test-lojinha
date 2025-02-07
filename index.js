module.exports = function calculateDiscount(products) {
  if (!products.length) return 0;
  const { unitPrice, quantity } = products[0];
  if (unitPrice > 0 && unitPrice <= 499.99) return unitPrice * quantity * 0.05;
  if (unitPrice >= 500 && unitPrice <= 999.99)
    return unitPrice * quantity * 0.1;
};
