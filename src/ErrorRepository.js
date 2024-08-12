export default class ErrorRepository {
	constructor() {
		this.errors = new Map([
			[404, 'Not Found'],
			[500, 'Internal Server Error'],

		]);
	}

	translate(code) {
		return this.errors.get(code) || 'Unknown error';
	}
}