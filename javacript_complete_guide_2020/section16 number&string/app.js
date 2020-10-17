function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'oretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}
const prodName = 'Javascropt Course';
const prodPrice = 29.99;

const productOutput = productDescription`this product(${prodName}) is ${prodPrice}`;
console.log(productOutput);
