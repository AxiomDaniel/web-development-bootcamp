var faker = require('faker');

function printFakeProductWithPrice(noOfProducts) {
  for (var i = 0; i < noOfProducts; i++) {
    console.log(faker.commerce.productName() + ' - $' + faker.commerce.price());
  }
}

printFakeProductWithPrice(10);