let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

// This code is just here to demonstrate how fs.readdirSync works

console.log('sites/images contains the following files:');

for (let i = 0; i < imageFileNames.length; i++) {
  let fileName = imageFileNames[i];

  console.log(`${i + 1}. ${fileName}`);
}

let imageElements = [];
for (let imageFile of imageFileNames) {
  let element = '<img src = "../site/images/' + imageFile + '" alt = "">';
  imageElements.push(element);
}

console.log(imageElements);

let format = [
  '<!DOCTYPE html>',
  '<html>',
  '<head>',
  '<title>A Photo Gallery Website!</title>',
  '<link rel = "stylesheet" href = "css/main.css">',
  '</head>',
  '<body>',
  '<header id = "page-header">',
  '<h1>Amazing Photo Gallery<h1>',
  '</header>',
  '<main>',
];

let photoGallery = [
  '<section class = "gallery">',
];
for (let element of imageElements) {
  photoGallery.push('<div class = "photo">');
  photoGallery.push(element);
  photoGallery.push('</div>');
}
photoGallery.push('</section>');

let endFormat = [
  '<aside class = "sidebar">',
  '<h2>Sidebar</h2>',
  '<p>This is a sidebar</p>',
  '</aside>',
  '</main>',
  '</body>',
  '</html>',
];

let htmlDocument = format.join('\n') + photoGallery.join('\n') + endFormat.join('\n');

fs.writeFileSync('./site/index2.html', htmlDocument);
