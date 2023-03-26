import fetch from 'chiaki'
import Prediction from './prediction.js'


export default class Replicate {

	async run(model, inputs) {
		let prediction = await this.create(model, inputs)

		while (! [
			'canceled', 
			'succeeded', 
			'failed'
		].includes(prediction.status)) {
			await new Promise(r => setTimeout(r, 250))
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
