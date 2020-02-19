let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

// This code is just here to demonstrate how fs.readdirSync works

console.log('sites/images contains the following files:')

for (let i = 0; i < imageFileNames.length; i++) {
  let fileName = imageFileNames[i];

  console.log(`${i + 1}. ${fileName}`);
}
