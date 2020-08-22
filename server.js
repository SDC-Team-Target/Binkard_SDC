const express = require('express');
const Promise = require('bluebird');
const path = require('path');
const db = Promise.promisifyAll(require('./database/db_helpers.js'));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/categories', (req, res) => {
  db.getCategories((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

app.get('/c/:category', (req, res) => {
  db.getItemsByCategory(req.params.category, (err, result) => {
    if (err) {
      res.sentStatus(500);
    } else {
      const adjusted = result.map((obj) => {
        let more = '';
        if (obj.Name.length > 70) more = '...';
        const newObj = {
          catName: 'Item Name',
          snippet: obj.Name.slice(0, 70) + more,
          ...obj,
        };
        return newObj;
      });
      res.send([adjusted]);
    }
  });
});

app.post('/s/:searchedFor', (req, res) => {
  const searched = req.params.searchedFor;
  db.getProdByIdAsync(searched)
    .then((name) => db.addToTrendingSearchesAsync(name[0].Name))
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('error storing search result: ', err);
      res.sendStatus(500);
    });
});

app.get('/trending', (req, res) => {
  db.getTrendingSearchesAsync()
    .then((queries) => Promise.all(
      queries.map((query) => db.getProdByNameAsync(query.Query)),
    ))
    .then((products) => {
      res.send(products.map((prod) => {
        const newObj = { ...prod[0] };
        newObj.catName = 'Trending Searches';
        newObj.snippet = prod[0].Name;
        console.log(newObj);
        return newObj;
      }));
    })
    .catch((err) => {
      console.log('error getting Recently Searched: ', err);
      res.sendStatus(500);
    });
});

app.get('/s/:searchFor', (req, res) => {
  const find = req.params.searchFor;
  // This will take whatever is typed in and replace those instances with a bolded version.
  const re = new RegExp(find, 'gi');
  const results = { count: 0 };
  // this will take each search and categorize and sort everything for user experience.
  function storeAspect(aspect, searching) {
    // aspects are the full results of searching in a specific spot. Searching is where it searched.
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
      storeAspect(highlights, 'Highlight');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      return db.getProdSpecsAsync(find);
    })
    .then((specs) => {
      storeAspect(specs, 'Spec');
      if (results.count >= 10) {
        const err = false;
        throw err;
      }
      res.send(results);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });
});

app.listen(8008, () => {
  console.log('listening on port: 8008');
});
