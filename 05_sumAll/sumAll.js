const sumAll = function(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0 || typeof numbers[i] !== 'number' || !Number.isInteger(numbers[i])) {
            return "ERROR";
        }
    }

    numbers.sort((a, b) => a - b)
    // let numbers = Array.from(array);
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
