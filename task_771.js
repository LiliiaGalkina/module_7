"use strict";

const person = {
  name: "Ivav",
  age: 35
};

function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);
