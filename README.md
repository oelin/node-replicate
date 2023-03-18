# node-replicate

A NodeJS client for Replicate.


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

// [ "https://replicate.delivery/pbxt/nSREat5H54rxGJo1kk2xLLG2fpr0NBE0HBD5L0jszLoy8oSIA/out-0.png" ]
```

![](https://replicate.delivery/pbxt/nSREat5H54rxGJo1kk2xLLG2fpr0NBE0HBD5L0jszLoy8oSIA/out-0.png)


## Introduction

[Replicate](https://replicate.com) is an online platform for running generative AI models in the cloud. This package implements a lightweight client for their [anonymous API](https://replicate.com/explore), allowing you to run Stable Diffusion, CLIP and other state-of-the-art models with only a few lines of code. Those familiar with [`replicate-js`](https://github.com/replicate/replicate-js) should feel right at home 😊👌.


## Features

* Use any public model on Replicate 🔮.
* Track a model's progress during inference ⌛.
* Very lightweight - under 100 lines of code! 🕊.


## Installation

Install with npm:

```
npm i node-replicate
```


## Getting Started

Like `replicate-js`, this package exports `model`, which can be used to access a particular model on Replicate. A model's identifier consists of a *path* (e.g. `stability-ai/stable-diffusion`) and a *version* (e.g. `db21...e5bf`) separated by a colon. You can obtain this information from a model's home page on Replicate.

```js
const model = replicate.model("stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
```

Once you've obtained a model identifier, you can run the model using `predict`. This method takes in one or more parameters such as `prompt`. The specific parameters for a model can also be found on its home page (e.g. [https://replicate.com/stability-ai/stable-diffusion/api](https://replicate.com/stability-ai/stable-diffusion/api)).

```js
const prediction = await model.predict({ prompt: "an astronaut riding on a horse" })
```

This will return a `Prediction` object containing the model's output, as well as other metadata. The output is a JavaScript object, typically an array, containing one or more results depending on how you queried the model. For instance, most image synthesis models return an array of image URLs.

To track a model's progress during inference, you can specify an `onUpdate` callback:

```js
const prediction = await model.predict(
        {
                prompt: "an astronaut riding on a horse",
        }, {
                onUpdate(prediction) {
                        console.log(prediction.status) 
                }
        }
)
```


## Contributing

If you'd like to contribute to this package, feel free to open a pull request or open an issue for suggestions. Some features we'd like to add in future include support for file uploads and integration with the paid API.
