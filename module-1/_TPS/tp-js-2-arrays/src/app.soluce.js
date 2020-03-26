function demoFunction(numbers) {
  return numbers.length;
}

function sumAllNumbers(numbers) {
  var sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

function getSmallestNumber(numbers) {
  if (!numbers.length) return null;

  var smallest = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < smallest) smallest = numbers[i];
  }

  return smallest;
}

function getBiggestNumber(numbers) {
  if (!numbers.length) return null;

  var biggest = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > biggest) biggest = numbers[i];
  }

  return biggest;
}

function sumPositiveNumbers(numbers) {
  var positiveNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0) positiveNumbers.push(numbers[i]);
  }

  return sumAllNumbers(positiveNumbers);
}

function getAverage(numbers) {
  if (!numbers.length) return 0;
  return sumAllNumbers(numbers) / numbers.length;
}

function sumPositiveOddIntegers(numbers) {
  var oddNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0 && numbers[i] % 2 === 1 && Number.isInteger(numbers[i]))
      oddNumbers.push(numbers[i]);
  }

  return sumAllNumbers(oddNumbers);
}

module.exports = {
  demoFunction,
  sumAllNumbers,
  getSmallestNumber,
  getBiggestNumber,
  sumPositiveNumbers,
  getAverage,
  sumPositiveOddIntegers
};
