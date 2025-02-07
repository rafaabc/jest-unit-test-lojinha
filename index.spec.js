const calculateDiscount = require('./index');

it('When there is no product, then the discount is 0', () => {
    const actualResults = calculateDiscount([]);
    const expectedResults = 0;

    expect(actualResults).toBe(expectedResults);
});