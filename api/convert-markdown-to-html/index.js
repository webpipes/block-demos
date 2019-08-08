const { post } = require('../../helpers/http')
const { Block } = require('node-webpipe')

new Block()
  .name('Convert Markdown to HTML')
  .description('Convert Markdown to HTML via the GitHub API')
  .input(
    'text',
    'string',
    'Required. The Markdown text to render in HTML. Markdown content must be 400 KB or less.'
  )
  .input(
    'mode',
    'string',
    'The rendering mode. Can be either: [`gfm`,`markdown`]'
  )
  .input(
    'context',
    'string',
    'The repository context to use when creating references in gfm mode. Omit this parameter when using markdown mode.'
  )
  .output(
    'html',
    'string',
    'Returns an HTML version preferred flavor of Markdown.'
  )
  .handle(async function (inputs, cb) {
    const options = {
      hostname: 'api.github.com',
      path: '/markdown',
      method: 'POST'
    }
    const html = await post(options, inputs)
    cb(null, { html })
  })
  .listen()
