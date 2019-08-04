const { Block } = require('node-webpipe')
const feedparser = require('feedparser-promised')

new Block()
  .name('Parse RSS')
  .description('Parse an RSS feed into a series of records.')
  .input('url', 'string', 'The URL for the RSS feed.')
  .output('entries', 'array', 'All entries from the RSS feed')
  .handle((inputs, cb) => {
    const outputs = []
    feedparser.parse(inputs.url).then(items => {
      console.log(items)
      items.forEach(item => {
        outputs.push({
          date: item.date,
          title: item.title,
          link: item.link
        })
      })
      cb(null, { entries: outputs })
    })
  })
  .listen()
