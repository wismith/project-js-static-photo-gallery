let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

function renderContent(content) {
  return `
  <!DOCTYPE html>
    <html>
    <head>
      <title>A Photo Gallery</title>
      <link rel = "stylesheet" href = "css/main.css">
    </head>
    <body>
      <header id = page-header>
        <h1>Amazing Photo Gallery</h1>
      </header>
    <main>
      ${content}
    </main>
    </body>
    </html>
  `;
}

function presentPhotos(images) {
  let photoGallery = '<section class = "gallery">';
  let imageElements = [];
  for (let imageFile of images) {
    let element = `<img src = "../site/images/${imageFile}" alt = "">`;
    imageElements.push(element);
  }
  for (let element of imageElements) {
    photoGallery += `
    <div class = "photo">
      ${element}
    </div>
    `;
  }
  photoGallery +=
  `
  </section>`;
  return photoGallery;
}

let htmlDocument = renderContent(presentPhotos(imageFileNames));

fs.writeFileSync('./site/index2.html', htmlDocument);
