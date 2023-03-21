# node-replicate

A Node.js client for [Replicate](https://replicate.com).


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

[Replicate](https://replicate.com) is an online platform for running machine learning models in the cloud. This package implements a lightweight client for their anonymous API, allowing you to run [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), [Whisper](https://replicate.com/openai/whisper) and other cutting-edge models in just a few lines of code 😊👌.


## Features

* Run models anonymously 👻.
* Monitor pending predictions ⏰.
* Lightweight - under 100 lines of code 🔥.


## Installation

Install with npm.

```
npm i node-replicate
```


## Usage

To run a model, just pass its identifier to `replicate.model()` and then call `predict()`. You can find its identifier and prediction parameters on Replicate (e.g. [https://replicate.com/stability-ai/stable-diffusion/api](https://replicate.com/stability-ai/stable-diffusion/api)).

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

To monitor a pending prediction, you can also specify an `onUpdate()` callback.

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
      onUpdate: prediction => {
        console.log(prediction.status)
      },
    },
  )

console.log(prediction.output)

// [ "https://replicate.delivery/pbxt/f4nlztv3uz1iFC4AEf2wBYQGTezdVeysvtZUtwfsvZOJDN6AC/out-0.png" ]
```


## Examples

### 1. Visual Question-answering with [blip](https://replicate.com/salesforce/blip)

```js
import replicate from "node-replicate"

const prediction = await replicate
  .model(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
   )
  .predict({
    image: 'https://replicate.delivery/pbxt/IVSaMZb8iBkELQvQya84wz5i1YfQC1HxrtSfSaL4QRTtsOlP/cat.jpg',
    question: "What color is the cat?",
    task: "visual_question_answering",
  })

console.log(prediction.output)

// "Answer: orange"
```


### 2. Image Style Transfer with [clipstyler](https://replicate.com/paper11667/clipstyler)

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


## Contributing 

Have a feature you'd like to see included? Create a [pull request](https://github.com/oelin/node-replicate/pulls) or open an [issue](https://github.com/oelin/node-replicate/issues).
