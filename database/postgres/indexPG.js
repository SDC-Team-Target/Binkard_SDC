const { config } = require("./configPG");
const { Pool } = require("pg");

const pool = new Pool(config);

// get items by product id (promisified query)
const getItemsByProductId = (productID) => {
  const itemsByProductIDQuery = "SELECT * FROM product_names WHERE id = ($1)";
  const escapedProductID = [productID];

  return pool.query(itemsByProductIDQuery, escapedProductID);
};

// get items by product name
const getItemsbyName = (productName) => {
  const itemsByNameQuery =
    "SELECT * FROM product_names WHERE product_name LIKE ($1) LIMIT 10";

  // when the product name is passed in from the server, it comes with " at the beginning and end, causing the DB query to fail... resolve this with .slice()
  const productNameCorrected = productName.slice(1, productName.length - 1);
  const escapedProductName = [`${productNameCorrected}`];

  return pool.query(itemsByNameQuery, escapedProductName);
};

module.exports = { getItemsByProductId, getItemsbyName };
