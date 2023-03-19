# node-replicate

A NodeJS client for [Replicate](https://replicate.com).

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
   )
  .predict({
    prompt: "an astronaut riding on a horse",
  })

console.log(prediction.output)

// [ "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png" ]
```

<img src='https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png' width=500px>

## Introduction

[Replicate](https://replicate.com) is an online platform for running machine learning models in the cloud. This package implements a lightweight client for their anonymous API, allowing you to run [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), [Midjourney](https://replicate.com/prompthero/openjourney) and other cutting-edge models witih just a few lines of code 😊👌.

## Features

* Run Replicate models anonymously 👻.
* Track pending predictions ⌛.
* Very lightweight - under 100 lines of code ⚡.

## Installation

Install with npm.

```
npm i node-replicate
```

## Usage

To run a Replicate model, pass its [identifier](https://replicate.com/stability-ai/stable-diffusion/api) to `replicate.model()` and then invoke `predict()` asynchronously.

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
   )
  .predict({
    prompt: "an astronaut riding on a horse",
  })

console.log(prediction.output)

// [ "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png" ]
```

You can also track a pending prediction by passing an `onUpdate()` callback.

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
   )
  .predict(
    {
      prompt: "an astronaut riding on a horse",
    },
    {
      onUpdate(prediction) {
        console.log(prediction.status)
      }
    }
  )

console.log(prediction.output)

// [ "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png" ]
```

