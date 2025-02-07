const calculateDiscount = require("./index");

it("T1 - When there is no product, then the discount is 0", () => {
  const actualResult = calculateDiscount([]);
  const expectedResult = 0;

  expect(actualResult).toBe(expectedResult);
});

it('T2 - When one non-special item with value less or equal than 499.99, then the discount is 5%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Playstation 5",
      unitPrice: 100,
      quantity: 1,
    },
  ]);
  const expectedResult = 5;

  expect(actualResult).toBe(expectedResult);
});

it('T3 - When one non-special item with value between than 500 and 999.99, then the discount is 10%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Xbox Series X",
      unitPrice: 600,
      quantity: 1,
    },
  ]);
  const expectedResult = 60;
  expect(actualResult).toBe(expectedResult);
});
