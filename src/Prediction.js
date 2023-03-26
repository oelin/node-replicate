import fetch from 'chiaki'


export default class Prediction {
	
	constructor(props) {
		Object.assign(this, props)
	}

	async get() {
		return await fetch(`https://replicate.com/api/models${this.version.model.absolute_url}/versions/${this.version_id}/predictions/${this.uuid}`)
			.then(response => JSON.parse(response.body))
			.then(response => new Prediction(response.prediction))
	}
}
