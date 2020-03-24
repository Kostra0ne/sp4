function workinWithArrayNumbers(callback) {
  // on appelle les fonctions passées en argument : des callbacks
  const numbers = [1, 2, 3, 4, 5, 5, -5, -10];
  return callback(numbers);
}

function sum(arr) {
  var s = 0;
  for (let i = 0; i < arr.length; i += 1) {
    s += arr[i];
  }
  return s;
}

function sumPositives(arr) {
  var s = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) s += arr[i];
  }
  return s;
}

var x;

x = workinWithArrayNumbers(sum);
console.log("result 1 > ", x);

x = workinWithArrayNumbers(sumPositives);
console.log("result 2 > ", x);

x = workinWithArrayNumbers(function areAllValuesPositive(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) return false;
  }
  return true;
});

console.log("result 3 > ", x);
