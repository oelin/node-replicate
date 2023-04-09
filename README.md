# node-replicate

A Node.js client for [Replicate](https://replicate.com). 

```js
import replicate from "node-replicate"
```

```js
const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf"
const input = { prompt: "an astronaut riding on a horse" }

await replicate.run(model, input)
```

<img src='https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png' width='100%'>


## Introduction

[Replicate](https://replicate.com) is an online platform for running machine learning models in the cloud. This package implements a lightweight client for their anonymous API, allowing you to run [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), [Whisper](https://replicate.com/openai/whisper) and other cutting-edge models in just a few lines of code 😄🤏.


## Features

* Anonymous API 👻.
* Lightweight - only 30 lines of code 🔥.


## Installation

Install with npm.

```sh
npm i node-replicate
```

## Usage

To run a model, just pass its identifier and prediction parameters to `replicate.run()`.

```js
const model = "owner/model:version"
const input = { prompt: "an astronaut riding on a horse" }

await replicate.run(model, input)
```

You can also monitor pending predictions with `replicate.create()`. 

```js
let prediction = await replicate.create(model, input)

while (! prediction.status == "succeeded") {
  console.log(prediction.status)
  
  prediction = await replicate.get(prediction)
}
```


## Contributing

Have a feature you'd like to see added? Create a [pull request](https://github.com/oelin/node-replicate/pulls) or open an [issue](https://github.com/oelin/node-replicate/issues).
