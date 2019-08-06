const { Block } = require('node-webpipe')
const handler = require('./handler')

new Block()
  .name('Scrape URL HTML')
  .description('Retrieve the fully rendered HTML content via Scraper API.')
  .input('url', 'string', 'A url to scrape.')
  .input(
    'session',
    'number',
    'Any random integer. Allows you to continue using the same proxy for each request with that session number. Send a new integer to create a new session.'
  )
  .output('html', 'string', 'The raw HTML from the requested URL.')
  .handle(async (inputs, cb) => {
    // @TODO: This handler should be the main responsibility in this file,
    // handle definition in export like lambda-api, or elsewhere
    const html = await handler(inputs)
    cb(null, { html: html.html })
  })
  .listen()
