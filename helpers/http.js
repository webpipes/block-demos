const https = require('https')

const post = (options, params) => {
  const paramsified = JSON.stringify(params)
  options.headers = {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(paramsified),
    'User-Agent': 'WebPipes-Block-Examples'
  }
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let body = ''
      res.setEncoding('utf8')
      res.on('data', chunk => (body += chunk.toString()))
      res.on('error', reject)
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode <= 299) {
          resolve(body)
        } else {
          reject(`Request failed. status: ${res.statusCode}, body: ${body}`)
        }
      })
    })

    req.on('error', e => {
      console.error(`problem with request: ${e.message}`)
    })

    req.write(paramsified)
    req.end()
  })
}
const get = (options, params) => {}

module.exports = { get, post }
