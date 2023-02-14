const add = function(a, b) {
  return !isNaN(a + b) ? a + b : 'Error'

};

const subtract = function(a, b) {
  return !isNaN(a - b) ? a - b : 'Error'

};

const sum = function(sumArr) {
  if (sumArr[0] === undefined) {return 0};
  let sum = 0;
  // convert from string to integer
  
  let numArr = sumArr.map(Number)
  

  return numArr.reduce((sum, currVal) => sum + currVal);
};

const multiply = function(multArr) {
  if (multArr[0] === undefined) {return multArr};
  
  let intArr = multArr.map(Number)

  return intArr.reduce((total, currVal) => total * currVal)
};


const power = function(a, b) {
  if (b === 1) {return a}

  let answer = a
  for (let i = 2; i <= b; i++) {
      answer *= a;
  }
  return answer
};

const factorial = function(a) {
  if (a < 2) {return 1}

  factArr = [1];
  //populate an array with sequential numbs up to a
  for (let i = 2; i <= a; i++) {
    factArr.push(i)
  }

  //use reducer function to multiply them
  let total = 1;
  let answer = factArr.reduce((total, currVal) => total * currVal)

  return answer

  //for (i = 1; i < a; i++) {
  //    i *= (i+1)
  //}
  //return i
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