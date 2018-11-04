## Installation instructions

To run, you'll need to install Node and NPM

Then, you'll need to have gulp-cli installed globally on your computer:

```
npm install -g gulp-cli
```

Then, you need the following as dev dependencies: gulp, gulp-sass, gulp-tinypng-compress, and browser-sync

```
npm install --save-dev gulp gulp-sass gulp-tinypng-compress browser-sync
```

## Running

This will watch your sass files, compile them and run your dev server at http://localhost:3000

```
npm start
```

## My Process 

When I received your zip file, the first thing I had to do was grab the images from the PDF with Adobe Photoshop

All of those images were compressed Gulp and a fantastic image compression package called gulp-tinypng-compress

The azo-sans-web fonts that were initially in the zip file were then made into mixins with SCSS

SCSS was used to preprocess the CSS

There is no js file, but the site uses Node, in addition to a few npm packages (mentioned earlier in this readme file)

The page is also responsive, able to be displayed on a smaller screen (tablet, phone) with its top nav bar becoming vertical under 768px. The footer was left alone, as it is still presentable at under 768px. 

All links were given distinct styles upon hovering. While they are all workable links, they currently do not go anywhere.