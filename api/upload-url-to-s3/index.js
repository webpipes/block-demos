const { Block } = require('node-webpipe')
const { S3RemoteUploader } = require('./s3-uploader')

new Block()
  .name('Upload file to S3')
  .description('Upload a remote file to a public S3 bucket.')
  .input('url', 'string', 'A file url to upload.')
  .output('url', 'string', 'Returns the url to the uploaded file.')
  .handle((inputs, cb) => {
    const fileUpload = new S3RemoteUploader(inputs.url)

    fileUpload.dispatch().then(r => {
      cb(null, { url: r.Location })
    })
  })
  .listen()
