# node-replicate

A Node.js client for [Replicate](https://replicate.com). New API in development to interoperate with `replicate-javascript`.


```js
const model = "owner/model:version"
const input = { text: "Hello, world!" }
const output = await replicate.run(model, input)
```
