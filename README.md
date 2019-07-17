# WebPipe Block Demos

In this repo we're demonstrating simple but complete example blocks. Using
`now.sh`, Node, and the node-webpipe server module.

## Examples

Try running a few client requests locally.

### DNS Lookup Block

In this example, we're invoking a block named `inspect-hostname-dns`. This block
lets us know if a given domain name is available for purchase. So, all we have
to do is provide. a hostname then the block does its work to find us answer.

## Example Usage

```sh
curl -v -X OPTIONS \
  https://block-demos.webpipes.now.sh/inspect-hostname-dns
```

<details>
  <summary>Response body is the input & output block definitions.</summary>

```json
{
  "name": "DNS Lookup",
  "description": "Determine whether or not a hostname exists.",
  "inputs": [
    {
      "name": "hostname",
      "type": "string",
      "description": "A hostname to lookup."
    }
  ],
  "outputs": [
    {
      "name": "ok",
      "type": "bool",
      "description": "Returns true of false if lookup succeeds."
    }
  ]
}
```

</details>

```sh
curl -i -X POST \
  -H "Content-Type: application/json" \
  -d '{"inputs":[{"domain":"google.com"}]}' \
https://block-demos.webpipes.now.sh/inspect-hostname-dns
```

<details>
  <summary>Response body should match definition described above...</summary>
  
```json
{
  "outputs": [
    {
      "ok": true
    }
  ]
}
```

Oh well, looks lke that partcular domain is already taken!

## Next Steps

Maybe spend some time examining the other demo blocks here to get a better feel
for their behavior.
