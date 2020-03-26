const testProducts = require("./../src/data/products-test");
const brandsUnique = require("./../src/data/brands-unique");
const allProducts = require("./../src/data/products");

const {
  demoFunction,
  sumProductsPrices,
  getAveragePrice,
  getSmallestPrice,
  getHighestPrice,
  getNullPricedIDs,
  getBrands
} = require("./../src/app");

// DEMO
describe("Demo, should return the number of products contained in an array", function() {
  test("demoFunction should be a function", function() {
    expect(typeof demoFunction).toBe("function");
  });

  test("Should return 0 if the product list is empty", function() {
    expect(demoFunction([])).toBe(0);
  });

  test("Should return the number of products", function() {
    expect(demoFunction(testProducts[1])).toBe(3);
  });

  test("Should return the number of products", function() {
    expect(demoFunction(allProducts)).toBe(1000);
  });

  test("Should throw an error if products is not an array", function() {
    expect(() => demoFunction("foo")).toThrow(TypeError);
  });
});

// # Iteration 1
/*
describe("sumProductsPrices should return the sum of all products prices", function() {
  test("sumProductsPrices should be a function", function() {
    expect(typeof sumProductsPrices).toBe("function");
  });

  test("Should return 0 if the product list is empty", function() {
    expect(sumProductsPrices(testProducts[0])).toBe(0);
  });

  test("Should return the sum of all products prices", function() {
    expect(sumProductsPrices(testProducts[2])).toBe(32);
  });

  test("Should return the sum of all products prices, rounded to 2 decimals", function() {
    expect(sumProductsPrices(testProducts[1])).toBe(17.44);
  });

  test("Should return the sum of all products prices, even if some prices are null", function() {
    expect(sumProductsPrices(testProducts[3])).toBe(12);
  });

  test("Should return the sum of all products prices", function() {
    expect(sumProductsPrices(allProducts)).toBe(22259.3);
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => sumProductsPrices(testProducts[4])).toThrow(TypeError);
  });
});
*/

// # Iteration 2

/*
describe("getAveragePrice should return the sum of all products prices", function() {
  test("getAveragePrice should be a function", function() {
    expect(typeof getAveragePrice).toBe("function");
  });

  test("Should return 0 if the product list is empty", function() {
    expect(getAveragePrice(testProducts[0])).toBe(0);
  });

  test("Should return the average price of the products", function() {
    expect(getAveragePrice(testProducts[2])).toBe(8);
  });

  test("Should return the average price of the products, rounded to 2 decimals", function() {
    expect(getAveragePrice(testProducts[1])).toBe(5.81);
  });

  test("Should return the average price of the products, even if some prices are null", function() {
    expect(getAveragePrice(testProducts[3])).toBe(3);
  });

  test("Should return the average price of the products", function() {
    expect(getAveragePrice(allProducts)).toBe(22.26);
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => getAveragePrice(testProducts[4])).toThrow(TypeError);
  });
});
*/

// # Iteration 3

/*
describe("getSmallestPrice should return the smallest price in the product list. If some products have the same price, return the last one.", function() {
  test("getSmallestPrice should be a function", function() {
    expect(typeof getSmallestPrice).toBe("function");
  });

  test("Should return null if the product list is empty", function() {
    expect(getSmallestPrice(testProducts[0])).toBe(null);
  });

  test("Should return the product with the smallest price in the list", function() {
    expect(getSmallestPrice(testProducts[1])).toEqual({
      id: 1,
      name: "Soda",
      brand: "Kunze Group",
      price: 2,
      currency: "EUR"
    });
  });

  test("Should return the product with the smallest price in the list", function() {
    expect(getSmallestPrice(testProducts[2])).toEqual({
      id: 3,
      name: "Sugar",
      brand: "FooBarBaz corp",
      price: 3,
      currency: "EUR"
    });
  });

  test("Should return the product with the smallest price in the list", function() {
    expect(getSmallestPrice(testProducts[3])).toEqual({
      id: 3,
      name: "Sugar",
      brand: "FooBarBaz corp",
      price: 3,
      currency: "EUR"
    });
  });

  test("Should return the product with the smallest price in the list", function() {
    expect(getSmallestPrice(allProducts)).toEqual({
      id: 989,
      name: "Crush - Grape, 355 Ml",
      brand: "Ortiz-Bosco",
      price: 5.02,
      currency: "EUR"
    });
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => getSmallestPrice(testProducts[5])).toThrow(TypeError);
  });
});
*/

// # Iteration 4

/*
describe("getHighestPrice should return the highest price in the product list. If some products have the same price, return the last one", function() {
  test("getHighestPrice should be a function", function() {
    expect(typeof getHighestPrice).toBe("function");
  });

  test("Should return null if the product list is empty", function() {
    expect(getHighestPrice(testProducts[0])).toBe(null);
  });

  test("Should return the product with the highest price in the list", function() {
    expect(getHighestPrice(testProducts[1])).toEqual({
      id: 2,
      name: "Chocolate pack",
      brand: "Kunze Group",
      price: 8.44,
      currency: "EUR"
    });
  });

  test("Should return the product with the highest price in the list", function() {
    expect(getHighestPrice(testProducts[2])).toEqual({
      id: 4,
      name: "Kid toy",
      brand: "Kunze Group",
      price: 20,
      currency: "EUR"
    });
  });

  test("Should return the product with the highest price in the list", function() {
    expect(getHighestPrice(testProducts[3])).toEqual({
      id: 1,
      name: "Ice Cream",
      brand: "Yolo Poto",
      price: 5,
      currency: "USD"
    });
  });

  test("Should return the product with the smallest price in the list", function() {
    expect(getHighestPrice(allProducts)).toEqual({
      id: 766,
      name: "Squid - Breaded",
      brand: "Fisher-Kassulke",
      price: 39.96,
      currency: "GBP"
    });
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => getHighestPrice(testProducts[5])).toThrow(TypeError);
  });
});
*/

// # Iteration 5

/*
describe("getNullPricedIDs should return an array of product's id whose price is null", function() {
  test("getNullPricedIDs should be a function", function() {
    expect(typeof getNullPricedIDs).toBe("function");
  });

  test("Should return an empty array if the product list is empty", function() {
    expect(getNullPricedIDs(testProducts[0])).toEqual([]);
  });

  test("Should return an empty array if no price is null", function() {
    expect(getNullPricedIDs(testProducts[1])).toEqual([]);
  });

  test("Should return an empty array if no price is null", function() {
    expect(getNullPricedIDs(testProducts[2])).toEqual([]);
  });

  test("Should return an array of product id", function() {
    expect(getNullPricedIDs(testProducts[3])).toEqual([4]);
  });

  test("Should return an array of product id", function() {
    expect(getNullPricedIDs(allProducts)).toEqual([
      42,
      64,
      187,
      190,
      199,
      236,
      268,
      286,
      323,
      376,
      380,
      512,
      545,
      552,
      600,
      755,
      777,
      811,
      853,
      890,
      918,
      966
    ]);
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => getNullPricedIDs(testProducts[5])).toThrow(TypeError);
  });
});
*/

// # Iteration 6

/*
describe("getBrands should return an array of brands names, without duplicate", function() {
  test("getBrands should be a function", function() {
    expect(typeof getBrands).toBe("function");
  });

  test("Should return an empty array if the product list is empty", function() {
    expect(getBrands(testProducts[0])).toEqual([]);
  });

  test("Should return an array of brands without duplicates", function() {
    expect(getBrands(testProducts[1])).toEqual(["Kunze Group", "Mika"]);
  });

  test("Should return an array of brands without duplicates", function() {
    expect(getBrands(testProducts[2])).toEqual([
      "Yolo Poto",
      "Fake Brand",
      "FooBarBaz corp",
      "Kunze Group"
    ]);
  });

  test("It should not include null brands", function() {
    expect(getBrands(testProducts[3])).toEqual(["Yolo Poto", "FooBarBaz corp"]);
  });

  test("It should not include duplicates", function() {
    expect(getBrands(allProducts)).toEqual(brandsUnique);
  });

  test("Should throw an error if the parameter is not an array", function() {
    expect(() => getNullPricedIDs(testProducts[5])).toThrow(TypeError);
  });
});
*/