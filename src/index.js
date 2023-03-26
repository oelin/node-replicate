import fetch from 'chiaki'


export default class Replicate {

	async run(model, inputs) {
		let prediction = await this.create(model, inputs)

		while (! [
			'canceled', 
			'succeeded', 
			'failed'
		].includes(prediction.status)) {
			await new Promise(_ => setTimeout(_, 250))
			prediction = await this.get(prediction)
		}

		return prediction
	}
	
	async get(prediction) {
		return await fetch(`https://replicate.com/api/models${prediction.version.model.absolute_url}/versions/${prediction.version_id}/predictions/${prediction.uuid}`)
			.then(response => JSON.parse(response.body).prediction)
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
		.then(response => JSON.parse(response.body).prediction)
	}
}
