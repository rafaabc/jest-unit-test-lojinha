const calculateDiscount = require("./index");

it("T1 - When there is no product, then the discount is 0", () => {
  const actualResult = calculateDiscount([]);
  const expectedResult = 0;

  expect(actualResult).toBe(expectedResult);
});

it('T2 - When one non-special item with unit price less or equal than 499.99, then the discount is 5%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Playstation 5",
      unitPrice: 400,
      quantity: 1,
    },
  ]);
  const expectedResult = 20;

  expect(actualResult).toBe(expectedResult);
});

it('T3 - When one non-special item with unit price between than 500 and 999.99, then the discount is 10%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Xbox Series X",
      unitPrice: 500,
      quantity: 1,
    },
  ]);
  const expectedResult = 50;
  expect(actualResult).toBe(expectedResult);
});

it('T4 - When one non-special item with unit price greater than 1000, then the discount is 15%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "iPhone 12",
      unitPrice: 700,
      quantity: 2,
    },
  ]);
  const expectedResult = 210;
  expect(actualResult).toBe(expectedResult);
});

it('T5 - When one product with special id PROMO-LOJINHA with unit price less or equal than 499.99, then the discount is 20%"', () => {
    const actualResult = calculateDiscount([
        {
        uniqueId: "PROMO-LOJINHA",
        productName: "Playstation 4",
        unitPrice: 100,
        quantity: 1,
        },
    ]);
    const expectedResult = 20;
    expect(actualResult).toBe(expectedResult);
});

