import getWinner from './getWinner';

describe('it tests getWinner function - Rock', () => {
	test('vs rock - result should be a tie', () => {
		expect(getWinner(1, 1)).toBe('tie');
	});
	test('vs paper - result should be a loss (1)', () => {
		expect(getWinner(1, 2)).toBe(1);
	});
	test('vs scissors - result should be a win (0)', () => {
		expect(getWinner(1, 3)).toBe(0);
	});
});

describe('it tests getWinner function - Paper', () => {
	test('vs rock - result should be a win (0)', () => {
		expect(getWinner(2, 1)).toBe(0);
	});
	test('vs paper - result should be a tie', () => {
		expect(getWinner(2, 2)).toBe('tie');
	});
	test('vs scissors - result should be a loss (1)', () => {
		expect(getWinner(2, 3)).toBe(1);
	});
});

describe('it tests getWinner function - Scissors', () => {
	test('vs rock - result should be a loss (1)', () => {
		expect(getWinner(3, 1)).toBe(1);
	});
	test('vs paper - result should be a win (0)', () => {
		expect(getWinner(3, 2)).toBe(0);
	});
	test('vs scissors - result should be a tie', () => {
		expect(getWinner(3, 3)).toBe('tie');
	});
});
