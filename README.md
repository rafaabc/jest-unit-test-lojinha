[![Run Tests](https://github.com/rafaabc/jest-unit-test-lojinha/actions/workflows/main.yml/badge.svg)](https://github.com/rafaabc/jest-unit-test-lojinha/actions/workflows/main.yml)

# Jest Unit Tests Lojinha

Example project for automated unit testing using Jest.

## Prerequisites

You need to have **Node.js** and **npm** installed to run this project.

> I used versions `v22.13.1` and `10.9.2`.

## Installation

Run `npm install` (or `npm i` for short) to install Jest.

## Running Tests

Run `npm test` (or `npm t` for short) to execute the unit tests.

After running the tests, you should see an output similar to the following:

```sh
> jest-unit-test-lojinha@1.0.0 test /home/runner/work/jest-unit-test-lojinha/jest-unit-test-lojinha
> jest --coverage

PASS ./index.spec.js
  ✓ T1 - When there is no product, then the discount is 0 (2 ms)
  ✓ T2 - When one non-special item with unit price less or equal than 499.99, then the discount is 5%"
  ✓ T3 - When one non-special item with unit price between than 500 and 999.99, then the discount is 10%"
  ✓ T4 - When one non-special item with unit price greater than 1000, then the discount is 15%"
  ✓ T5 - When one product with special id PROMO-LOJINHA with unit price less or equal than 499.99, then the discount is 20%"
  ✓ T6 - When one product with special id PROMO-LOJINHA with unit price between than 500 and 999.99, then the discount is 20%" (1 ms)
  ✓ T7 - When one product with special id PROMO-LOJINHA with unit price greater than 1000, then the discount is 20%"
  ✓ T8 - When a list of non-special products with unit price less or equal than 499.99, then the discount is 5%"
  ✓ T9 - When a list of non-special products with unit price between than 500 and 999.99, then the discount is 10%"
  ✓ T10 - When a list of non-special products with unit price greater than 1000, then the discount is 15%"
  ✓ T11 - When a list of products with special id PROMO-LOJINHA with unit price less or equal than 499.99, then the discount is 20%" (1 ms)
  ✓ T12 - When a list of products with special id PROMO-LOJINHA with unit price between than 500 and 999.99, then the discount is 20%"
  ✓ T13 - When a list of products with special id PROMO-LOJINHA with unit price greater than 1000, then the discount is 20%"

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.js |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        0.443 s
Ran all test suites.
```