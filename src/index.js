import Model from './Model.js'


export default {
	model(identifier) {
		return new Model(...identifier.split(':'))
	}
}
