const convertToCelsius = function(temp) {

  let conv = (5 / 9);
  let answer = (temp - 32) * conv;
  
  if (Math.floor(answer) === answer) {
    return answer;
  }
  
  else {
  return Number(answer.toFixed(1));
  }



};

const convertToFahrenheit = function(temp) {

  let conv = (9 / 5);
  let answer = (temp * conv) + 32;

  if (Math.floor(answer) === answer) {
    return answer;
  }
  
  else {
  return Number(answer.toFixed(1));
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
