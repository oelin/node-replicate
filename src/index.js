import Model from './Model.js'


export function model(identifier) {	
	return new Model(...identifier.split(':'))
}
