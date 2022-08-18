"use strict";
// Basic Types 
let id = 5;
let company = 'JC Tech';
let isPublished = true;
let x = 'Hello';
// arrays 
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
// Tuple 
let person = [4, 'Joseph', false];
// tuple array 
let employee;
employee = [
    [1, 'Joseph'],
    [2, 'Mike'],
    [3, 'Tobi']
];
// Union => this allows a variable to be able to hold more than one type 
let pid;
pid = 22;
pid = "joseph";
// Enum => this allows us to define a set of named constants 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Right)
/* ----------------
 working with objects
 -------------*/
// example one => rough code 
const user = {
    id: 1,
    name: 'Jc coder'
};
const user2 = {
    id: 1,
    name: 'Joseph'
};
const Math1 = (x, y) => x + y;
// console.log(Math1(3,4));
/* ----------------
Types Assertion => this tells the compiler to treat a component as a specified type
 -------------*/
let cid = 1;
// method 1
// let customerId = <number>cid  
// method 2
let customerId = cid;
/* ----------------
    Functioons
 -------------*/
function addNum(x, y) {
    return x + y;
}
/* ----------------
    Void => the void is used when no return statement is used in a function
 -------------*/
function log(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: 'Joseph'
};
const add = (x, y) => x + y;
// console.log(add(3,3))
/* ----------------
    Classes
 -------------*/
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // methods 
    register() {
        return `${this.name} is registered`;
    }
}
const jake = new Person(1, 'Jake');
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is already registered`;
    }
}
const junior = new Person2(1, 'junior');
// console.log(junior.register())
// Extending classes ------------------
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'shawn', 'Developer');
// console.log(emp.register())
/* ----------------
    Generics - this allows us create reusable components using T as a type place holder
 -------------*/
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let strArr = getArray(["jos", "john"]);
console.log(numArr);
console.log(strArr);
