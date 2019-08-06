const dns = require('dns')
const { Block } = require('node-webpipe')

new Block()
  .name('DNS Lookup')
  .description('Determine whether or not a hostname exists.')
  .input('hostname', 'string', 'A hostname to lookup.')
  .output('ok', 'bool', 'Returns true of false if lookup succeeds.')
  .handle((inputs, cb) => {
    dns.lookup(inputs.domain, (err, address, family) => {
      const outputs = {
        ok: !err
      }
      cb(null, outputs)
    })
  })
  .listen()
