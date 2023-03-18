import Model from './Model.js'


export {
	model(identifier) {
		return new Model(...identifier.split(':'))
	}
}
