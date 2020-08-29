const faker = require("faker");
const fs = require("fs");

// create a stream, name the file and write the headers for the CSV file. Include the encoding ‘utf-8’.

const prodNames = fs.createWriteStream("./prodNames.csv");
prodNames.write("id,companyName,adj1,color,adj2,productName\n", "utf8");

const writeTenMillionProdNames = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const companyName = faker.company.companyName();
      const adj1 = faker.commerce.productAdjective();
      const material = faker.commerce.productMaterial();
      const color = faker.commerce.color();
      const adj2 = faker.commerce.productAdjective();
      const productName = faker.commerce.productName();
      const data = `${id}, ${companyName}, ${adj1}, ${material}, ${color}, ${adj2}, ${productName}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once("drain", write);
    }
  }
  write();
};

writeTenMillionProdNames(prodNames, "utf-8", () => {
  prodNames.end();
});
