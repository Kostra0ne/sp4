/*

helpers:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/

function demoFunction(products) {
    if (!Array.isArray(products)) throw new TypeError("Products is not an array");
    return products.length;
  }
  
  // const sumProductsPrices = null;
  // const getAveragePrice = null;
  // const getSmallestPrice = null;
  // const getHighestPrice = null;
  // const getNullPricedIDs = null;
  // const getBrands = null;
  
  function sumProductsPrices(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return 0;
    var sum = 0;
    for (let i = 0; i < products.length; i += 1) {
      if (products.price !== null) sum += products[i].price;
    }
    return Number(sum.toFixed(2));
  }
  
  function getAveragePrice(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return 0;
    var sum = sumProductsPrices(products);
  
    return Number((sum / products.length).toFixed(2));
  }
  
  function getSmallestPrice(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return null;
  
    var smallestPrice = null;
  
    for (let i = 0; i < products.length; i++) {
      if (
        smallestPrice === null ||
        (products[i].price !== null && products[i].price < smallestPrice.price)
      ) {
        smallestPrice = products[i];
      }
    }
  
    return smallestPrice;
  }
  
  function getHighestPrice(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return null;
  
    var highestPrice = null;
  
    for (let i = 0; i < products.length; i++) {
      if (
        highestPrice === null ||
        (products[i].price !== null && products[i].price > highestPrice.price)
      ) {
        highestPrice = products[i];
      }
    }
  
    return highestPrice;
  }
  
  function getNullPricedIDs(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return [];
  
    const nullPriced = [];
  
    for (let i = 0; i < products.length; i += 1) {
      if (products[i].price === null) nullPriced.push(products[i].id);
    }
  
    return nullPriced;
  }
  
  function getBrands(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return [];
  
    const brands = [];
  
    for (let i = 0; i < products.length; i++) {
      if (!brands.includes(products[i].brand) && products[i].brand !== null)
        brands.push(products[i].brand);
    }
  
    return brands;
  }
  
  
  module.exports = {
    demoFunction,
    sumProductsPrices,
    getAveragePrice,
    getSmallestPrice,
    getHighestPrice,
    getNullPricedIDs,
    getBrands
  };
  