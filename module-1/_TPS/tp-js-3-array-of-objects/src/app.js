/*

helpers:
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/

function demoFunction(products) {
  if (!Array.isArray(products)) throw new TypeError("Products is not an array");
  return products.length;
}

const sumProductsPrices = null;
const getAveragePrice = null;
const getSmallestPrice = null;
const getHighestPrice = null;
const getNullPricedIDs = null;
const getBrands = null;


module.exports = {
  demoFunction,
  sumProductsPrices,
  getAveragePrice,
  getSmallestPrice,
  getHighestPrice,
  getNullPricedIDs,
  getBrands
};
