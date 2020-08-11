const express = require('express');

const app = express();

const path = require('path');

const db = require('./database/db_helpers.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/s/:searchFor', (req, res) => {
  console.log(req.params)
})

app.listen(8008, () => {
  console.log('listening on port: 8008');
});
