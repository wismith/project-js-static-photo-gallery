# Static Photo Gallery

Let's publish a static photo gallery using [surge.sh][url-surge].

## Getting Started

1. Fork this repository
1. Clone your fork to your computer
1. Inside the project directory run:

   ```console
   npm install
   ```

1. Run the following command:

   ```console
   npm run publish
   ```

The `npm run publish` command will publish everything in the `site/` directory using [surge.sh][url-surge]. The first time you run it, you will be prompted to create an account.

You can choose what domain you publish your website to. By default, surge will randomly generate a new domain name for you every time you publish. You will have to edit the domain name to re-use the same domain.

## Concepts Required

- The HTML `<img>` tag
- Using CSS to create a photo gallery-like UI
- Using [fs.readdirSync][node-fs-readdirsync] to get a list of files in a directory on your computer
- Using [fs.writeFileSync][node-fs-writefilesync] to write to a file

## Iterations

### [v1] Placeholder Gallery

Before we spend time looking for images we want in our gallery, let's get the gallery effect working with placeholder images.

Use a website like [Lorem Picsum][url-lorem-picsum] to generate URLs for random images. Edit `site/index.html` and `site/css/main.css` to make a gallery and then publish it.

### [v2] Gallery From Local Photos

The `site/images` directory contains a few pre-downloaded placeholder images. Let's generate a gallery dynamically based on the photos in that directory.

Start with the placeholder images, so you can focus on generating the right HTML. After that's working, replace the placeholder images with images of your choosing.

See `gallery.js`.

1. Using [fs.readdirSync][node-fs-readdirsync], you can get the list of files in a particular directory.
1. Use string concatenation to generate a string containing the appropriate HTML
1. Use [fs.writeFileSync][node-fs-writefilesync] to write the HTML to `site/index.html`.

In other words, running `gallery.js` will generate a new `index.html` based on the list of files in `site/images`. Once you've done that you can run `npm run publish` to publish the photo gallery on the web.

[url-surge]: https://surge.sh/
[url-lorem-picsum]: https://picsum.photos/
[node-fs-readdirsync]: https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options
[node-fs-writefilesync]: https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
