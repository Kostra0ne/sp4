const numbersArray = require("./../src/data/numbers.json");

const {
  demoFunction,
  sumAllNumbers,
  getSmallestNumber,
  getBiggestNumber,
  sumPositiveNumbers,
  getAverage,
  sumPositiveOddIntegers
} = require("./../src/app.js");

describe("demoFunction - Should return the length of an array", () => {
  test("demoFunction should be a function", () => {
    expect(typeof demoFunction).toBe("function");
  });

  test("Should return 0 if the provided argument is an empty array", () => {
    const test = demoFunction([]);
    expect(test).toBe(0);
  });

  test("Should return 3 if the provided array's length is 3", () => {
    const test = demoFunction([1, 1, 1]);
    expect(test).toBe(3);
  });

  test("Should return 1000 if the provided array's length is 1000", () => {
    const test = demoFunction(numbersArray);
    expect(test).toBe(1000);
  });
});

// Iteration 1


describe("sumAllNumbers - Should sum all numbers contained in one array", () => {
  test("sumAllNumbers should be a function", () => {
    expect(typeof sumAllNumbers).toBe("function");
  });

  test("Should return 0 if the argument is an empty array", () => {
    const test = sumAllNumbers([]);
    expect(test).toBe(0);
  });

  test("Should return the sum of all numbers in the array provided as argument", () => {
    const test = sumAllNumbers([1, 1, 1]);
    expect(test).toBe(3);
  });

  test("Should return the sum of all numbers in the array provided as argument", () => {
    const test = sumAllNumbers([10, 20, 30, 60, 120]);
    expect(test).toBe(240);
  });

  test("Should return the sum of all numbers in the array provided as argument", () => {
    const test = sumAllNumbers(numbersArray);
    expect(test).toBe(-41009341.7);
  });
});


// Iteration 2

describe("getSmallestNumber - Should return the smallest number in one array", () => {
  test("getSmallestNumber should be a function", () => {
    expect(typeof getSmallestNumber).toBe("function");
  });

  test("Should return null if the argument is an empty array", () => {
    const test = getSmallestNumber([]);
    expect(test).toBeNull();
  });

  test("Should return the smallest number in the array provided as argument", () => {
    const test = getSmallestNumber([
      0.5,
      1,
      10,
      0,
      12,
      23,
      10002020,
      10.4,
      20000
    ]);
    expect(test).toBe(0);
  });

  test("Should return the smallest number in the array provided as argument", () => {
    const test = getSmallestNumber([
      -1000,
      -10000,
      -100000,
      -1000000,
      -10000000
    ]);
    expect(test).toBe(-10000000);
  });

  test("Should return the smallest number in numbersArray", () => {
    const test = getSmallestNumber(numbersArray);
    expect(test).toBe(-999814.2);
  });
});



// Iteration 3

/*
describe("getBiggestNumber - Should return the biggest number in one array", () => {
  test("getBiggestNumber should be a function", () => {
    expect(typeof getBiggestNumber).toBe("function");
  });

  test("Should return null if the argument is an empty array", () => {
    const test = getBiggestNumber([]);
    expect(test).toBeNull();
  });

  test("Should return the biggest number in the provided array", () => {
    const test = getBiggestNumber([1000, 800, 555, 333, 200, 66, 20, 0]);
    expect(test).toBe(1000);
  });

  test("Should return the biggest number of the numbersArray argument", () => {
    const test = getBiggestNumber(numbersArray);
    expect(test).toBe(998320.4);
  });
});

// Iteration 4

describe("sumPositiveNumbers - Should return the sum of all positive numbers ( > 0 ) contained in one array", () => {
  test("sumPositiveNumbers should be a function", () => {
    expect(typeof sumPositiveNumbers).toBe("function");
  });

  test("Should return 0 if the provided array is empty", () => {
    const test = sumPositiveNumbers([]);
    expect(test).toBe(0);
  });

  test("Should return 0 if all provided values are 0", () => {
    const test = sumPositiveNumbers([0, 0, 0, 0]);
    expect(test).toBe(0);
  });

  test("Should return the sum of all positive numbers in the provided array", () => {
    const test = sumPositiveNumbers([1, -1, 2, 0, -5, -44, 100]);
    expect(test).toBe(103);
  });

  test("Should return the sum of all positive numbers in numbersArray", () => {
    const test = sumPositiveNumbers(numbersArray);
    expect(test).toBe(231921506.9);
  });
});
*/

// Iteration 5

/*
describe("getAverage - Should return the smallest number in one array", () => {
  test("getBiggestNumber should be a function", () => {
    expect(typeof getSmallestNumber).toBe("function");
  });

  test("Should return 0 if the argument is an empty array", () => {
    const test = getAverage([]);
    expect(test).toBe(0);
  });

  test("Should return the average of all numbers in the array argument", () => {
    const test = getAverage([10, 10, 10, 10, 10, 10, 10, 10]);
    expect(test).toBe(10);
  });

  test("Should return the average of all numbers in the array argument", () => {
    const test = getAverage([10, 20, 30]);
    expect(test).toBe(20);
  });

  test("Should return the average of all numbers in the array argument", () => {
    const test = getAverage([10.56, 22.3, 44.888, 1230]);
    expect(test).toBe(326.937);
  });

  test("Should return the average of the numbers given as argument", () => {
    const test = getAverage(numbersArray);
    expect(test).toBe(-41009.341700000004);
  });
});
*/

// Iteration 6

/*
describe("sumPositiveOddIntegers - Should return the sum of positive (>0) odd (impairs) integers (without a decimal) ", () => {
  test("sumPositiveOddIntegers should be a function", () => {
    expect(typeof sumPositiveOddIntegers).toBe("function");
  });

  test("Should return the sum of positive odd integers in the provided array", () => {
    const test = sumPositiveOddIntegers([0.5, 1, 3, 1, 3, 1, 3, 10.1]);
    expect(test).toBe(12);
  });

  test("Should return the sum of positive odd integers in the provided arrayt", () => {
    const test = sumPositiveOddIntegers([1, -5, -2, 4, 6, 10, 13, 0.3]);
    expect(test).toBe(14);
  });

  test("Should return the sum of positive odd integers in the provided array", () => {
    const test = sumPositiveOddIntegers([
      -1,
      10.66,
      3,
      -1,
      55.123,
      2,
      13,
      44.1,
      -2,
      2,
      23
    ]);
    console.log(test);
    expect(test).toBe(39);
  });

  test("Should return the sum of positive odd integers in the numbersArray argument", () => {
    const test = sumPositiveOddIntegers(numbersArray);
    expect(test).toBe(18315775);
  });
});
*/
