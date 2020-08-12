const express = require('express');

const Promise = require('bluebird');

const app = express();

const path = require('path');

const db = Promise.promisifyAll(require('./database/db_helpers.js'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/categories', (req, res) => {
  db.getCategories((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

app.get('/s/:searchFor', (req, res) => {
  const find = req.params.searchFor;
  const re = new RegExp(find, 'gi');
  const results = { count: 0 };

  function storeAspect(aspect, searching) {
    let addUpTo = aspect.length;
    if (aspect.length > 0) {
      if (results.count + aspect.length > 10) {
        addUpTo = (10 - results.count);
        results.count = 10;
      } else {
        results.count += aspect.length;
      }
      results[searching] = [];
      for (let i = 0; i < addUpTo; i += 1) {
        const item = aspect[i];
        if (searching === 'Name') {
          item.catName = 'Item Name';
        } else {
          item.catName = `In item ${searching}`;
        }
        if (item[searching].length > 75) {
          const start = item[searching].toLowerCase().indexOf(find.toLowerCase());
          if (start > 0) {
            item.snippet = '...';
          } else {
            item.snippet = '';
          }
          item.snippet += item[searching].slice(start, start + 72);
          if (item.snippet.length >= 72) {
            item.snippet += '...';
          }
        } else {
          item.snippet = item[searching];
        }
        item.snippet = item.snippet.replace(re, `<b>${find}</b>`);
        results[searching].push(item);
      }
    }
  }
  // db.getCategoriesAsync()
  //   .then(result => {
  //     console.log(result);
  //   })
  db.getSearchCategoriesAsync(find)
    .then((cats) => {
      if (cats.length > 0) {
        results.Category = cats;
        results.count += cats.length;
      }
      return db.getProdNamesAsync(find);
    })
    .then((prods) => {
      storeAspect(prods, 'Name');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      return db.getProdDetailsAsync(find);
    })
    .then((dets) => {
      storeAspect(dets, 'Details');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      return db.getProdHighlightsAsync(find);
    })
    .then((highlights) => {
      storeAspect(highlights, 'Highlights');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      return db.getProdSpecsAsync(find);
    })
    .then((specs) => {
      storeAspect(specs, 'Specifications');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      res.send(results);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
});

app.listen(8008, () => {
  console.log('listening on port: 8008');
});
