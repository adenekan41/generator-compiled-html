![Drag Racing](https://i.ibb.co/Kr7v5Db/compiled-1.png)

# Compiled HTML Generator [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A Starter project to make writing html really simple and easy powered by gulp.

### ⚡️ Live Reload

### 🔥 Component Based

### 📝 Raw HTML

### ✅ SCSS supported

### 🚀 Deploy With Surge

## Helper Functions

> Still in progress coming up with useful helper by gulp-file-include and some other useful compilers

## Installation

First, install [Yeoman](http://yeoman.io) and generator-compiled-html using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-compiled-html
```

Then generate your new project:

```bash
yo compiled-html
```

## Usage

Getting familiar with the template and you want to use some helper functions in your HTML file like import sidebar components or generate head components differently for each files
`@`, Prefix to the world just import using them the following ways.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    @include('./components/head.html', {"title": "Dashboard"})
  </head>
  <body>
    @include('./components/view.html')
  </body>
</html>
```

`/components/head.html`

```html
<meta charset="utf-8" />
<title>@title of my first compiled html</title>
<meta name="description" content="" />
<meta name="author" content="" />

<meta name="viewport" content="width=device-width, initial-scale=1" />
```

`/components/view.html`

```html
<h2>Hello There</h2>
```

Now your compiled HTML file should look like this

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>@title of my first compiled html</title>
    <meta name="description" content="" />
    <meta name="author" content="" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <h2>Hello There</h2>
  </body>
</html>
```

### [see more of what you can do here](https://www.npmjs.com/package/gulp-file-include)

## Useful commands

```sh
$ npm run start #starts the app
$ npm run copy #copies any html code in working directory to build directory
$ npm run flush #delets cached compile by gulp
$ npm run watch #watchs files and updates
$ npm run connect #starts server without running gulp default
$ npm run deploy #deploys to surge automatically
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Adenekan Wonderful]()

[npm-image]: https://badge.fury.io/js/generator-compiled-html.svg
[npm-url]: https://npmjs.org/package/generator-compiled-html
[travis-image]: https://travis-ci.com/adenekan41/generator-compiled-html.svg?branch=master
[travis-url]: https://travis-ci.com/adenekan41/generator-compiled-html
[daviddm-image]: https://david-dm.org/adenekan41/generator-compiled-html.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/adenekan41/generator-compiled-html
[coveralls-image]: https://coveralls.io/repos/adenekan41/generator-compiled-html/badge.svg
[coveralls-url]: https://coveralls.io/r/adenekan41/generator-compiled-html

<!-- {blockquote: style='display:none'} -->
