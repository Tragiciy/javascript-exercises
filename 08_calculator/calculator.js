const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let sum = 0
  let array = Array.from(numbers)
   array.forEach(element => {
      sum += element;
    })

  return Number(sum);
};

const multiply = function(numbers) {
  let sum = 1
  let array = Array.from(numbers)
  array.forEach(element => {
    sum *= element;
  })

  return Number(sum);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
