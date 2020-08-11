const { connection } = require('./mysql.config.js');

function getCategories(callback) {
  connection.query(
    'SELECT * FROM Categories', (err, result) => {
      if (err) {
        console.log('error gettting queries from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getSearchCategories(find, callback) {
  connection.query(
    'SELECT * FROM Categories WHERE CategoryName LIKE "%?%"', [find], (err, result) => {
      if (err) {
        console.log('error gettting Categories from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getDeals(callback) {
  connection.query(
    'SELECT * FROM Products WHERE OnSale > 0 ORDER BY OnSale DESC', (err, result) => {
      if (err) {
        console.log('error getting Deals');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getProdNames(find, callback) {
  connection.query(
    'SELECT * FROM Products WHERE Name LIKE "%?%"', [find], (err, result) => {
      if (err) {
        console.log('error in retrieving names from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getProdDetails(find, callback) {
  connection.query(
    'SELECT * FROM Products WHERE Details LIKE "%?%"', [find], (err, result) => {
      if (err) {
        console.log('error in retrieving Details from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getProdCategories(find, callback) {
  connection.query(
    'SELECT * FROM Products INNER JOIN Categories WHERE Categories.CategoryName = "%?%" AND Categories.CategoryID = Products.Category', [find], (err, result) => {
      if (err) {
        console.log('error in retrieving Products by Category from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

function getProdHighlights(find, callback) {
  connection.query(
    'SELECT * FROM Products INNER JOIN Highlights WHERE Products.ProductID = Highlights.Product AND Highlights.Highlight LIKE "%?%"', [find], (err, result) => {
      if (err) {
        console.log('error in retrieving Products by Highlights from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

module.export = {
  getCategories,
  getDeals,
  getSearchCategories,
  getProdNames,
  getProdDetails,
  getProdCategories,
  getProdHighlights,
};
