import fetch from 'chiaki'


export const PredictionStatus = {
	STARTING: 'starting', 
	PROCESSING: 'processing',
	CANCELED: 'canceled',
	SUCCEEDED: 'succeeded',
	FAILED: 'failed',
}


export default class Prediction {
	
	constructor(props) {
		Object.assign(this, props)
	}

	hasTerminalStatus() {
		return [
			PredictionStatus.CANCELED,
			PredictionStatus.SUCCEEDED,
			PredictionStatus.FAILED,
		].includes(this.status)
	}

	async load() {
		return await fetch(`https://replicate.com/api/models${this.version.model.absolute_url}/versions/${this.version_id}/predictions/${this.uuid}`)
			.then(response => JSON.parse(response.body))
			.then(response => new Prediction(response.prediction))
	}
}
