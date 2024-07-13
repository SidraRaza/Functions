"use strict";
// 1.Function With Parameter and Argument
function myName(firstName, lastName) {
    console.log(firstName, lastName);
}
myName("Sidra", "Raza");
// 2.Function with Return keyword
function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(7, 3);
console.log(result);
// 3.Function With Optional
function optionalFunction(firstName, lastName, age) {
    console.log(firstName, lastName);
}
optionalFunction("Sidra", "Raza");
// 4.Function with Reset Parameter
function multipleChoices(myName, ...lastName) {
    return myName + lastName;
}
let responce = multipleChoices("Sidra", "Ghulam", "Raza");
console.log(responce);
// 5.Function With Defualt Parameter
function defualtParameter(firstName, lastName, age = 17) {
    console.log(`Name: ${firstName} ${lastName} Age: ${age}`);
}
defualtParameter("Sidra", "Raza", 20); //output 20
defualtParameter("Sidra", "Raza"); //output defuat 17
