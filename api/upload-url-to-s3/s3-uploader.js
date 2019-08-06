const stream = require('stream')
const axios = require('axios')
const AWS = require('aws-sdk')
const url = require('url')

class S3RemoteUploader {
  constructor (remoteAddr) {
    this.remoteAddr = remoteAddr
    this.stream = stream
    this.axios = axios
    this.AWS = AWS
    this.AWS.config.update({
      accessKeyId: process.env.AWS_S3_ACCESS_KEY,
      secretAccessKey: process.env.AWS_S3_SECRET_KEY
    })
    // this.spacesEndpoint = new this.AWS.Endpoint(process.env.AWS_S3_ENDPOINT)
    this.s3 = new this.AWS.S3()
    this.file_name = url.parse(
      this.remoteAddr.substring(this.remoteAddr.lastIndexOf('/') + 1)
    ).pathname
    this.obj_key = 'public/' + this.file_name
    this.content_type = 'application/octet-stream'
    this.uploadStream()
  }

  uploadStream () {
    const pass = new this.stream.PassThrough()
    this.promise = this.s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: this.obj_key,
        Body: pass,
        ContentType: this.content_type
      })
      .promise()
    return pass
  }

  initiateAxiosCall () {
    return axios({
      method: 'get',
      url: this.remoteAddr,
      responseType: 'stream'
    })
  }

  async dispatch () {
    await this.initiateAxiosCall().then(response => {
      if (response.status === 200) {
        this.content_type = response.headers['content-type']
        response.data.pipe(this.uploadStream())
      }
    })
    return this.promise
  }
}
module.exports = {
  S3RemoteUploader: S3RemoteUploader
}
