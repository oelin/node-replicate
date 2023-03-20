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

<img src='https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png' width='50%'>


## Introduction

[Replicate](https://replicate.com) is an online platform for running machine learning models in the cloud. This package implements a lightweight client for their anonymous API, allowing you to run [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), [Midjourney](https://replicate.com/prompthero/openjourney) and other cutting-edge models with just a few lines of code 😊👌.


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

You can also track a pending predictions by passing an `onUpdate()` callback.

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
    },
  )

console.log(prediction.output)

// [ "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png" ]
```


## Examples

### 1. Visual Question-answering with [blip](https://replicate.com/salesforce/blip)

Answer open-ended questions about images in natural language.

<img src='https://replicate.delivery/pbxt/IVSaMZb8iBkELQvQya84wz5i1YfQC1HxrtSfSaL4QRTtsOlP/cat.jpg' width='50%'>

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
   )
  .predict({
    image: 'https://replicate.delivery/pbxt/IVSaMZb8iBkELQvQya84wz5i1YfQC1HxrtSfSaL4QRTtsOlP/cat.jpg',
    question: "What color is the cat?",
    task: 'visual_question_answering',
  })

console.log(prediction.output)

// "Answer: orange"
```


### 2. Image Style Transfer with [clipstyler](https://replicate.com/paper11667/clipstyler)

Change the aesthetic style of an image using a text prompt.

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
   )
  .predict({
    image: "https://replicate.delivery/pbxt/IVSrp3308R8Uq0sJx6yAozDSuLswkkq6IlaOS5liUI7TCwAU/cat.jpg",
    iterations: 100,
    text: "made from leaves",
  })

console.log(prediction.output)

// [ ... ]
```

<img src='https://replicate.delivery/pbxt/enJ4EfiXbeXVXJpF14k5DQhJVUH1c7iKfe53lwiADOdFbtLFC/out.png' width='50%'>


## Contributing 

Have a feature you'd like to see added? Create a [pull request](https://github.com/oelin/node-replicate/pulls) or open an [issue](https://github.com/oelin/node-replicate/issues).
