module.exports = function calculateDiscount(products) {
    if (!products.length) return 0;
    const { unitPrice, quantity } = products[0];
    return unitPrice * quantity * 0.05;    
}
