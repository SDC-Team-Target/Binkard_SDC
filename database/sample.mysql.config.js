const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'target_header_footer',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting mysql database. Check config file', err);
  } else {
    console.log('connected to mysql');
  }
});

module.exports = {
  connection,
  mysql,
};
