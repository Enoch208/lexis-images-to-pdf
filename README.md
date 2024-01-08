[![Build Status](https://travis-ci.org/mLuby/images-to-pdf.svg?branch=master)](https://travis-ci.org/mLuby/images-to-pdf)[![Coverage Status](https://coveralls.io/repos/github/mLuby/images-to-pdf/badge.svg?branch=master)](https://coveralls.io/github/mLuby/images-to-pdf?branch=master)
# ImagesToPdf [[Deprecated](#deprecation)]
Combines images into a single PDF. 🥲

### Deprecation
This package relies entirely on the wonderful [muhammara](https://github.com/julianhille/MuhammaraJS) PDF library.

# Quick Start
### Install
```sh
npm install --save images-to-pdf
```

### Use
```js
const imagesToPdf = require("images-to-pdf")
await imagesToPdf(["path/to/image1.jpg", "path/to/image2.png"], "path/to lexis.pdf")
// path/to/lexis.pdf now exists.
```
