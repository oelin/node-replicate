import fetch from 'chiaki'
import Prediction from './prediction.js'


function sleep(duration) {
	return new Promise(resolve =>
		setTimeout(resolve, duration)
	)
}


export default class Replicate {

	async run(model, inputs) {
		let prediction = await this.create(model, inputs)

		while (! prediction.hasTerminalStatus()) {
			await sleep(250)
			prediction = await prediction.get()
		}

		return prediction
	}

	async create(model, inputs) {
		
		const [path, version] = model.split(':')

		return await fetch({
			hostname: 'replicate.com',
			path: `/api/models/${path}/versions/${version}/predictions`,
			method: 'POST',
			headers: { 
				'content-type': 'application/json', 
			},
			body: JSON.stringify({ inputs }),
		})
		.then(response => JSON.parse(response.body))
		.then(response => new Prediction(response))
	}
}
