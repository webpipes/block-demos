const { Block } = require('node-webpipe')
const NewsAPI = require('newsapi')
const client = new NewsAPI(process.env.API_KEY_NEWSAPI)

// const { Block, Client, MSG } = require('@webpipes/server')
new Block()
  .name("News API's Top Headline's")
  .description("NewsAPI.org's REST API service (https://newsapi.org)")
  // @NOTE: Maybe in the future, we are using some kind of standard
  // (&localized) in cases where we wrap other services. Maybe we can
  // standardize these boilerplate proxy/wrapper
  // user messages. NOTICE(`@NOTE/API/1`, locale)
  .input(
    'sources',
    // @TODO: Hack fix for `node-webpipe` server validation didn't like `array`?
    'object',
    '@NOTE/API/1: Refer to official API service docs. Defaults to the New York Times.'
  )
  .output(
    'articles',
    'object',
    'Top headlines and ledes from requested source(s).'
  )
  .handle(({ sources = ['the-new-york-times'] }, cb) => {
    client.v2
      .topHeadlines({
        sources: sources,
        language: 'en'
      })
      .then(({ articles }) => {
        cb(null, {
          articles
        })
      })
  })
  .listen()
