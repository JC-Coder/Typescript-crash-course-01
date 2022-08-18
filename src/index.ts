// Basic Types 

let id: number = 5
let company: string = 'JC Tech'
let isPublished: boolean = true
let x: any = 'Hello'

// arrays 
let ids: number[] = [1,2,3,4]
let arr: any[] = [1, true , 'Hello']

// Tuple 
let person: [number, string, boolean] = [4, 'Joseph', false]

// tuple array 
let employee: [number, string][] 

employee = [
    [1, 'Joseph'],
    [2, 'Mike'],
    [3, 'Tobi']
]

// Union => this allows a variable to be able to hold more than one type 
let pid: string | number 

pid = 22
pid = "joseph"

// Enum => this allows us to define a set of named constants 

enum Direction1{
    Up = 1, // initially Up have a value of 0 and Right 3, but after reassign a number it then serves as the value while others follow suite  
    Down,
    Left,
    Right
}

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// console.log(Direction2.Right)

/* ---------------- 
 working with objects 
 -------------*/

// example one => rough code 
const user: {id: number, name: string} = {
    id: 1,
    name: 'Jc coder'
}


// example two =>  clean example using the type declaration 
type User = {
    id: number, 
    name: string
}

const user2: User = {
    id: 1,
    name: 'Joseph'
}

// console.log(user2);


// usinng types with function 

type MathFunc1 = {
    (x: number, y: number): number
}

const Math1: MathFunc1 = (x,y) => x + y;

// console.log(Math1(3,4));




/* ----------------  
Types Assertion => this tells the compiler to treat a component as a specified type 
 -------------*/

let cid: any = 1
// method 1
// let customerId = <number>cid  
// method 2
let customerId = cid as number 

/* ----------------  
    Functioons 
 -------------*/

 function  addNum(x:number, y:number) :number{
    return x + y
 }


/* ----------------  
    Void => the void is used when no return statement is used in a function  
 -------------*/

 function log(message: string | number ): void{
    console.log(message)
 }

//  log(3) // this function can accept string or number

 /* ----------------  
    Interfaces 
 -------------*/

interface UserInterface {
    readonly id: number, // this specifies that value cannot be changed \ or modified 
    name: string,
    age?: number // the question mark is used for optional item (meaning age is optional )
}

const user3: UserInterface = {
    id: 1,
    name: 'Joseph'
}

// using interface with function 
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x,y) => x + y;

// console.log(add(3,3))


/* ----------------  
    Classes 
 -------------*/

 class Person {
    // private id: number   // this ensures that the id is only accesed from the Person class only
    // public id: number    // this ensures that the id is only accesed form the person class and extended person class


    private id: number
    name: string


    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    // methods 
    register(){
        return `${this.name} is registered`
    }
 }

 const jake = new Person(1, 'Jake');
//  console.log(jake.register());




//  using interface with class 
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is already registered`
    }
}
 
const junior = new Person2(1, 'junior');
// console.log(junior.register())


// Extending classes ------------------

class Employee extends Person {
    position: string


    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position 
    }
}

const emp = new Employee(3, 'shawn', 'Developer')
// console.log(emp.register())


/* ----------------  
    Generics - this allows us create reusable components using T as a type place holder 
 -------------*/

 function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
 }

 let numArr = getArray<number>([1,2,3,4,5])
 let strArr = getArray<string>(["jos", "john"])

 console.log(numArr)
 console.log(strArr)
