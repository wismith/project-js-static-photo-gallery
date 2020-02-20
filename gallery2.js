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
    let element = `<img src = "./images/${imageFile}" alt = "">`;
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

function createSidebar(title, content) {
  return `
  <aside class = "sidebar">
  <h2>${title}</h2>
  <p>${content}</p>
  </aside>
  `;
}

let sidebar = createSidebar('Sidebar', 'This is a sidebar');

let content = [presentPhotos(imageFileNames), sidebar].join('\n');
let htmlDocument = renderContent(content);

fs.writeFileSync('./site/index.html', htmlDocument);
