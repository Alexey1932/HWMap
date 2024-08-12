import ErrorRepository from '../src/ErrorRepository';

test('should return error message for known code', () => {
	const errorRepo = new ErrorRepository();
	expect(errorRepo.translate(404)).toBe('Not Found');
	expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('should return "Unknown error" for unknown code', () => {
	const errorRepo = new ErrorRepository();
	expect(errorRepo.translate(123)).toBe('Unknown error');
});