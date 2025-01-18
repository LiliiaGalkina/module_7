"use strict";

const person = {
  name: "Ivav",
  age: "Ivanov",
};

function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);
