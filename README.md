# node-replicate

A Node.js client for [Replicate](https://replicate.com). New API in development to interoperate with `replicate-javascript`.


```js
import Replicate from "replicate"

const replicate = new Replicate()
```

Run a model.

```js
const model = "owner/model:version"
const input = { text: "Hello, world!" }
const output = await replicate.run(model, input)
```

Run a model without waiting for the result.

```js
let prediction = await replicate.create(model, input)
```

```js
prediction = await replicate.get(prediction)
```
