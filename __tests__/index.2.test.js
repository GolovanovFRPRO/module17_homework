import { reverseAndNegate } from '../index.2.js';

describe('reverseAndNegate test:true || false', () => {
    // Успешные тесты
    test('should reverse and negate an array of mixed numbers', () => {
        expect(reverseAndNegate([1, -2, 5, 4])).toEqual([-4, -5, 2, -1]);
    });

    test('should reverse and negate an array of positive numbers', () => {
        expect(reverseAndNegate([3, 2, 1])).toEqual([-1, -2, -3]);
    });
    // Неуспешные тесты
    test('should handle non-numeric values gracefully', () => {
        expect(reverseAndNegate([1, 'a', 3])).toEqual([-3, NaN, -1]);
    });
});

describe('reverseAndNegate - corner cases', () => {
    test('should handle an array with one element', () => {
        expect(reverseAndNegate([42])).toEqual([-42]);
    });

    test('should handle an array with two elements', () => {
        expect(reverseAndNegate([10, -20])).toEqual([20, -10]);
    });

    test('should handle an array with identical elements', () => {
        expect(reverseAndNegate([5, 5, 5])).toEqual([-5, -5, -5]);
    });
});

describe('reverseAndNegate unit-test', () => {
    it('should reverse and negate an array of mixed numbers', () => {
        const input = [1, -2, 5, 4];
        const expectedOutput = [-4, -5, 2, -1];
        expect(reverseAndNegate(input)).toEqual(expectedOutput);
    });

    it('should handle an array with NaN', () => {
        const input = [NaN, 1, 2];
        const expectedOutput = [NaN, -2, -1];
        expect(reverseAndNegate(input)).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expectedOutput = [];
        expect(reverseAndNegate(input)).toEqual(expectedOutput);
    });
});