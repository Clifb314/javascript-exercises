const add = function(a, b) {
  return !isNaN(a + b) ? a + b : 'Error'

};

const subtract = function(a, b) {
  return !isNaN(a - b) ? a - b : 'Error'

};

const sum = function(...arg) {
  if arg[0] === undefined {return 0};
  let sum = 0;
  arg.forEach(num => {
      sum += num;
  })
  return sum;
};

const multiply = function(...arg) {
  if arg[0] === undefined {return 0};
  let mult = 1;
  arg.forEach(num => {
      mult *= num;
  })

};

const power = function(a, b) {
  for (let i = 1; i <= b; i++) {
      a *= a;
  }
  return a
};

const factorial = function(a) {
  if (a < 2) {return 1}
  let i;
  for (i = 1; i < a; i++) {
      i *= (i+1)
  }
  return i
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