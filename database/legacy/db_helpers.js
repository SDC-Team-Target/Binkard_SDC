const { connection } = require("./mysql.config.js");

function getCategories(callback) {
  connection.query("SELECT * FROM Categories", (err, result) => {
    if (err) {
      console.log("error gettting queries from mysql");
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

function getItemsByCategory(cat, callback) {
  connection.query(
    "SELECT Products.ProductID, Products.Category, Products.Name FROM Products INNER JOIN Categories WHERE Categories.CategoryName = ? AND Products.Category = Categories.CategoryID",
    [cat],
    (err, result) => {
      if (err) {
        console.log("error getting items By Category from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getSearchCategories(find, callback) {
  connection.query(
    'SELECT * FROM Categories WHERE CategoryName LIKE CONCAT("%", ?, "%")',
    [find],
    (err, result) => {
      if (err) {
        console.log("error gettting Categories from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getDeals(callback) {
  connection.query(
    "SELECT * FROM Products WHERE OnSale > 0 ORDER BY OnSale DESC",
    (err, result) => {
      if (err) {
        console.log("error getting Deals");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdNames(find, callback) {
  connection.query(
    'SELECT * FROM Products WHERE Name LIKE CONCAT("%", ?, "%")',
    [find],
    (err, result) => {
      if (err) {
        console.log("error in retrieving names from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdByName(find, callback) {
  connection.query(
    "SELECT * FROM Products WHERE Name = ?",
    [find],
    (err, result) => {
      if (err) {
        console.log("error in retrieving names from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdById(id, callback) {
  connection.query(
    "SELECT Name FROM Products WHERE ProductID = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log("error in retrieving names from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function addToTrendingSearches(searched, callback) {
  connection.query(
    "INSERT INTO Searches (Query, TimesSearched) VALUES (?, 1) ON DUPLICATE KEY UPDATE TimesSearched = TimesSearched + 1",
    [searched],
    (err, result) => {
      if (err) {
        console.log("error in adding to Recently Searched");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getTrendingSearches(callback) {
  connection.query(
    "SELECT Query FROM Searches ORDER BY TimesSearched DESC LIMIT 10",
    (err, result) => {
      if (err) {
        console.log("error getting trending Searches");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdDetails(find, callback) {
  connection.query(
    'SELECT * FROM Products WHERE Details LIKE CONCAT("%", ?, "%")',
    [find],
    (err, result) => {
      if (err) {
        console.log("error in retrieving Details from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdCategories(find, callback) {
  connection.query(
    'SELECT * FROM Products INNER JOIN Categories WHERE Categories.CategoryName = CONCAT("%", ?, "%") AND Categories.CategoryID = Products.Category',
    [find],
    (err, result) => {
      if (err) {
        console.log("error in retrieving Products by Category from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdHighlights(find, callback) {
  connection.query(
    'SELECT * FROM Products INNER JOIN Highlights WHERE Products.ProductID = Highlights.Product AND Highlights.Highlight LIKE CONCAT("%", ?, "%")',
    [find],
    (err, result) => {
      if (err) {
        console.log("error in retrieving Products by Highlights from mysql");
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function getProdSpecs(find, callback) {
  connection.query(
    'SELECT * FROM Products INNER JOIN Specifications WHERE Products.ProductID = Specifications.Product AND Specifications.Spec LIKE CONCAT("%", ?, "%")',
    [find],
    (err, result) => {
      if (err) {
        console.error(
          "error in retrieving Products by Specifications from mysql"
        );
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

module.exports = {
  getCategories,
  getDeals,
  getItemsByCategory,
  getSearchCategories,
  getProdNames,
  getProdDetails,
  getProdCategories,
  getProdHighlights,
  getProdSpecs,
  addToTrendingSearches,
  getTrendingSearches,
  getProdByName,
  getProdById,
};
