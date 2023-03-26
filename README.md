# node-replicate

A Node.js client for [Replicate](https://replicate.com). New API in development to interoperate with `replicate-javascript`.


```js
import Replicate from "replicate"

const replicate = new Replicate()
```

Run a model and await the result:

```js
const model = "owner/model:version"
const input = { text: "Hello, world!" }
const output = await replicate.run(model, input)
```

You can also run a model without awaiting the result:


```js
let prediction = await replicate.create(model, input)
```

```js
prediction = await replicate.next(prediction)
```
