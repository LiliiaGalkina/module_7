"use strict";

const data = [2, 3, "+"];

function calculate(a, b, operator) {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else {
    return "Invalid operator";
  }
}

console.log(calculate.apply(null, data));
