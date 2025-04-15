const fibonacci = function(input) {
    let fib = [0, 1];

    let number = Number(input);

    if (number <= 1 && number >= 0) {
        return fib[number]
    } else if (number > 1) {
        for (let i = 2; i <= number; i++) {
            fib.push(fib[i-1]+fib[i-2]);
        }
        return fib[number];
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
