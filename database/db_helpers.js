const { connection } = require('./mysql.config.js');

function getCategories(callback) {
  connection.query(
    'Select * FROM Categories', (err, result) => {
      if (err) {
        console.log('error gettting queries from mysql');
        callback(err, null);
      } else {
        callback(null, result);
      }
    },
  );
}

module.export = {
  getCategories,
};
