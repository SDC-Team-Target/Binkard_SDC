const { Pool, Client } = require("pg");
// pools will use environment variables
// for connection information
const pool = new Pool();
pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client();
client.connect();
client.query("SELECT * FROM searchbar_sdc WHERE id = 1", (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
  client.end();
});
