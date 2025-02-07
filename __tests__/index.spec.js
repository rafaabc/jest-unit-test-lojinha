const calculateDiscount = require("../src/index");

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

it('T6 - When one product with special id PROMO-LOJINHA with unit price between than 500 and 999.99, then the discount is 20%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "PROMO-LOJINHA",
      productName: "Xbox Series S",
      unitPrice: 550,
      quantity: 1,
    },
  ]);
  const expectedResult = 110;
  expect(actualResult).toBe(expectedResult);
});

it('T7 - When one product with special id PROMO-LOJINHA with unit price greater than 1000, then the discount is 20%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "PROMO-LOJINHA",
      productName: "iPhone 15",
      unitPrice: 1200,
      quantity: 1,
    },
  ]);
  const expectedResult = 240;
  expect(actualResult).toBe(expectedResult);
});

it('T8 - When a list of non-special products with unit price less or equal than 499.99, then the discount is 5%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Keyboard",
      unitPrice: 50,
      quantity: 1,
    },
    {
      uniqueId: "2",
      productName: "Energy cable",
      unitPrice: 30,
      quantity: 1,
    },
  ]);
  const expectedResult = 4;
  expect(actualResult).toBe(expectedResult);
});

it('T9 - When a list of non-special products with unit price between than 500 and 999.99, then the discount is 10%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Monitor",
      unitPrice: 600,
      quantity: 1,
    },
    {
      uniqueId: "2",
      productName: "Mouse",
      unitPrice: 40,
      quantity: 2,
    },
  ]);
  const expectedResult = 68;
  expect(actualResult).toBe(expectedResult);
});

it('T10 - When a list of non-special products with unit price greater than 1000, then the discount is 15%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "1",
      productName: "Samsung Galaxy S20",
      unitPrice: 650,
      quantity: 2,
    },
    {
      uniqueId: "2",
      productName: "Energy cable",
      unitPrice: 60,
      quantity: 1,
    },
  ]);
  const expectedResult = 204;
  expect(actualResult).toBe(expectedResult);
});

it('T11 - When a list of products with special id PROMO-LOJINHA with unit price less or equal than 499.99, then the discount is 20%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "PROMO-LOJINHA",
      productName: "Playstation 4",
      unitPrice: 400,
      quantity: 1,
    },
    {
      uniqueId: "2",
      productName: "Controller",
      unitPrice: 60,
      quantity: 1,
    },
  ]);
  const expectedResult = 92;
  expect(actualResult).toBe(expectedResult);
});

it('T12 - When a list of products with special id PROMO-LOJINHA with unit price between than 500 and 999.99, then the discount is 20%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "PROMO-LOJINHA",
      productName: "Xbox Series S",
      unitPrice: 550,
      quantity: 1,
    },
    {
      uniqueId: "2",
      productName: "Controller",
      unitPrice: 60,
      quantity: 1,
    },
  ]);
  const expectedResult = 122;
  expect(actualResult).toBe(expectedResult);
});

it('T13 - When a list of products with special id PROMO-LOJINHA with unit price greater than 1000, then the discount is 20%"', () => {
  const actualResult = calculateDiscount([
    {
      uniqueId: "PROMO-LOJINHA",
      productName: "iPhone 15",
      unitPrice: 1200,
      quantity: 1,
    },
    {
      uniqueId: "2",
      productName: "AirPods",
      unitPrice: 200,
      quantity: 1,
    },
  ]);
  const expectedResult = 280;
  expect(actualResult).toBe(expectedResult);
});
