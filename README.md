# WebPipe Examples

> Welcome to the world's finest private collection of meticulously handcrafted
> WebPipes.

> This project is a single web service (available at
> [webpip.es](https://webpip.es)) built on top of the
> [ZEIT Now](https://github.com/zeit/now-examples) cloud platform.

\*Note: As of 6/8/2019, only NodeJS examples exist the moment. However,we should
be able to include any Now-supported runtime.

## Public Convenience API

As a convenience, each example is publically available at via
[webpip.es](https://webpip.es). You can check `now.json` for each example's HTTP
pathname, but basically, the folder each lives in is also the HTTP pathname.
Accordingly, you can find the `./api/parse-url` example is available via
`https://webpip.es/parse-url`:

```bash
curl -v -X OPTIONS https://webpip.es/parse-url
```

<details>
  <summary>Response body is the input & output block definitions.</summary>

```json
{
  "name": "Parse URL",
  "description": "Parse URL using WHATWG URL Standard.",
  "inputs": [
    {
      "name": "url",
      "type": "string",
      "description": "A url to parse."
    }
  ],
  "outputs": [
    {
      "name": "parts",
      "type": "objects",
      "description": "Returns the parsed URL parts."
    }
  ]
}
```

</details>

> _Nice things are nice._ Please be mindful and keep your _use_ & _usage_
> responsible. It's intended to serve primarily as a hands-on demonstration for
> newcomers.

## Full Example

Try running a few client requests locally. Just run `node index.js` inside the
example folder, or `now dev` if you prefer.

It may be a bit easier starting with the very minimal `calculate-square-root`
WebPipe. That said, the examples aren't structured in any particular order or
and don't have any sort of difficulty levels, so feel free to explore in
whatever way feels most comfortable.

```bash
curl -v -X OPTIONS \
  https://webpip.es/inspect-hostname-dns
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

### DNS Lookup Block

In this example, we're invoking a block named `inspect-hostname-dns`. This block
lets us know if a given domain name is available for purchase. So, all we have
to do is provide. a hostname then the block does its work to find us answer.

## Example Usage

```bash
curl -v -X OPTIONS \
  https://webpip.es/inspect-hostname-dns
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

```bash
curl -i -X POST \
  -H "Content-Type: application/json" \
  -d '{"inputs":[{"domain":"google.com"}]}' \
  https://webpip.es/inspect-hostname-dns
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

Oh well, looks lke that particular domain is already taken!

## Next Steps

Maybe spend some time examining the other demo blocks here to get a better feel
for their behavior.
