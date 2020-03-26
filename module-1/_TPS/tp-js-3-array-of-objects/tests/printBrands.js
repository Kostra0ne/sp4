
const fs = require("fs");
const allProducts = require("./../src/data/products");


function writeUniqueBrands(products) {
    if (!Array.isArray(products)) throw new TypeError("products is not an array");
    if (!products.length) return [];
  
    const brands = [];
  
    for (let i = 0; i < products.length; i++) {
      if (!brands.includes(products[i].brand) && products[i].brand !== null)
        brands.push(products[i].brand);
    }
  
    // console.log(brands);
    fs.appendFileSync('./src/data/brands-unique.js', '[');
    brands.forEach(b => {
        try {
            fs.appendFileSync('./src/data/brands-unique.js', `"${b}",\n`);
            console.log('The "data to append" was appended to file!');
          } catch (err) {
            /* Handle the error */
            console.error(err)
          }
    })
    fs.appendFileSync('./src/data/brands-unique.js', ']');
    return brands;
  }


  writeUniqueBrands(allProducts)