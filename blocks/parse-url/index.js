const url = require('url')
const { Block } = require('node-webpipe')

new Block()
  .name('Parse URL')
  .description('Parse URL using WHATWG URL Standard.')
  .input('url', 'string', 'A url to parse.')
  .output('parts', 'objects', 'Returns the parsed URL parts.')
  .handle((inputs, cb) => {
    cb(null, { parts: url.parse(inputs.url) })
  })
  .listen()
