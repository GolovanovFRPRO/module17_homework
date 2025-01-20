/*Задание 3
Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
Например: [1, -2, 5, 4] ⇒ [-4, -5, 2, -1].*/

export function reverseAndNegate(arr) {
    const result = arr.map((value) => {
        if (typeof value === 'number' && !isNaN(value)) {
            return -value;
        }
        return NaN;
    });

    const nonNaNValues = result.filter(value => !isNaN(value)).reverse();

    return arr.map((value) => {
        if (isNaN(value)) {
            return NaN;
        }
        return nonNaNValues.shift();
    });
};

console.log(reverseAndNegate([1, -2, 5, 4]));