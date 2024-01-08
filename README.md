
# ImagesToPdf [[Deprecated](#deprecation)]
Combines images into a single PDF. 🥲

### Deprecation
This package relies entirely on the wonderful [muhammara](https://github.com/julianhille/MuhammaraJS) PDF library.

# Quick Start
### Install
```sh
npm install --save lexis-images-to-pdf
```

### Use
```js
const imagesToPdf = require("lexis-images-to-pdf")
await imagesToPdf(["path/to/image1.jpg", "path/to/image2.png"], "path/to lexis.pdf")
// path/to/lexis.pdf now exists.
```
