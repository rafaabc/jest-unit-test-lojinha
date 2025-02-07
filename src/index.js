module.exports = function calculateDiscount(products) {
  let foundSpecialProduct = false;
  const totalValue = products
    .map((product) => {
      const { uniqueId, unitPrice, quantity } = product;
      if (uniqueId === "PROMO-LOJINHA") foundSpecialProduct = true;
      return multiply(unitPrice, quantity);
    })
    .reduce((acc, value) => acc + value, 0);
  if (foundSpecialProduct) return multiply(totalValue, 0.2);
  if (totalValue > 0 && totalValue <= 499.99) return multiply(totalValue, 0.05);
  if (totalValue >= 500 && totalValue <= 999.99) return multiply(totalValue, 0.1);
  if (totalValue >= 1000) return multiply(totalValue, 0.15);
  return 0;
};

function multiply(val1, val2) {
  return val1 * val2;
}