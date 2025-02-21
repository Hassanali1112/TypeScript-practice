// // question 01
// interface User {
//   id : number,
//   name : string,
//   email : string,
//   isActive : boolean
// }

// let createUser = (user : User)=>{
//   return user;
// }
 
// let user : User = {
//   id : 255799,
//   name : "Hassan Ali",
//   email : "hassan@gmail.com",
//   isActive : true,
// }

// console.log(createUser(user))

// // question 02

// type Input = string | number;

// const processInput = (input : Input)=>{
//   if(typeof input === "number"){
//     return `number ${String(input)}`;
//   } else {
//     return `string ${input}`
//   }
// }

// console.log(processInput(255799))

// // question 03

// class Vehical {
//   make : string;
//   model : string;
//   year : number;

//   constructor (m : string, mo : string, y : number){
//     this.make = m;
//     this.model = mo;
//     this.year = y;
//   }

//    getInfo () : string{
//     return ` Make is ${this.make}, model is ${this.model} and year of lanunch is ${this.year} `
//   }
// }
// let vehical1 = new Vehical("Toyota", "Camry", 2020);
// console.log(vehical1.getInfo())

// class Car extends Vehical {
//   doors : number
//   constructor (make : string, model : string , year : number, d : number){
//     super(make = make , model = model, year = year)
//     this.doors = d
  
//   }
// getInfo () : string {
//   return `${super.getInfo()} with ${this.doors} doors`
// }
// }
// let car1 = new Car("Toyota", "Camry", 2020, 4)

// console.log(car1.getInfo())

// class Motercycle extends Vehical {
//   hasSideCar : boolean;
//   constructor(make : string, model : string , year : number, hasSideCar : boolean){
//     super(make = make , model = model , year = year)
//     this.hasSideCar = hasSideCar
//   }

//   getInfo() : string {
//     return `${super.getInfo()} and has side car ${this.hasSideCar}`
//   }
// }

// let moterCycle1 = new Motercycle("Honde", "CD70", 2018, true);

// console.log(moterCycle1.getInfo())



// 01

interface User {
  id : number;
  name : string;
  email : string;
  isActive : boolean;
}

const createUser = (user : User) =>{
  return user;
}

const user1 : User ={
  id : 255799,
  name : "hassan ali",
  email : "dev.hassanali63@gmail.com",
  isActive : true,
}

console.log(createUser(user1))

// ____________________________________________________________

// 02 
type Input = number | string;

const processInput = (checKTypes : Input)=>{
  if( typeof checKTypes === "string" ){
    return `type of Input is string and it value is ${checKTypes}`
  } else {
    return `types of input was number, now is string and value is ${checKTypes.toString()}`
  }
}

console.log(processInput(255799))
// ____________________________________________________________


// 03
class Vehical {
  constructor(public make : string, public model : string, public year  : number){}

  getInfo() : string{
    return `The make is ${this.make}, and model is ${this.model} and year of launch is ${this.year}`
  }

}

class Car extends Vehical {
  constructor(make : string, model : string, year : number, public doors : number){
    super(make ,model, year)
  }
  getInfo(): string {
    return `${super.getInfo()} with doors ${this.doors}`
  }
}

let car1 = new Car("Toyota", "cammy",2022,4)

console.log(car1)

class Motercycle extends Vehical {
  constructor(make : string, model : string, year : number, public hasSidecar : boolean){
    super(make ,model, year)
  }
  getInfo(): string {
    return `${super.getInfo()} with doors ${this.hasSidecar}`
  }
}

let bike1 = new Motercycle("Honda","CD70",2018, false)

console.log(bike1)
// _________________________________________________________________

// 04

class BankAccount {
  constructor(private balance : number , private readonly accNumber : string){}

  get checkBalance (): number{
    return this.balance;
  }

  get viewAccNumber (): string{
    return this.accNumber;
  }

   deposit (amount : number){
   return (this.balance + amount)
  }

  withdraw (amount : number){
    return amount > this.balance ? `insufficent balance to make this withdraw` :  this.balance - amount
  }
}

let newAcc = new BankAccount(800,"55777436")

console.log(newAcc.checkBalance)

// _________________________________________________________________

// 05

abstract class Shape {
  constructor(protected color : string){}

  abstract calculateArea () :number;

  get getColor():string{
    return this.color
  }
}

class Circle extends Shape {
  constructor(color: string, public radius : number) {
    super(color);
  }
  calculateArea(): number {
    return 2 * 3.14 * (this.radius ** 2);
  }
}
let circle1 = new Circle("red", 5)
console.log(circle1.calculateArea())

class Rectangle extends Shape {
  constructor(color : string , public width : number , public height : number){
    super(color)
  }

  calculateArea(): number {
    return (this.height * this.width)
  }
}

let rectangle1 = new Rectangle("blue", 5, 6)
console.log(rectangle1.calculateArea())

// 06

interface Product {
  id : number;
  name : string;
  price : number;
  category : string;
}

const createProduct = (product : Product) =>{
  return product
}

let product1 : Product = {
  id : 5440,
  name : "Iphone 15 pro",
  price : 900,
  category : "electronics"
}

console.log(createProduct(product1))

// 07

class Employee {
  constructor(public name : string, public salary : number){}

  getDetails () {
    return `The name of employee is ${this.name} and his/her salary is ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name : string, salary : number, public programmingLanguage : string){
    super(name , salary)
  }
  getDetails() {
    return `${super.getDetails()} and he/she is expert in ${this.programmingLanguage}`
  }
}

class Designer extends Employee {
  constructor(name : string, salary : number, public toolUsed : string){
    super(name , salary)
  }
  getDetails() {
    return `${super.getDetails()} and he/she is expert in ${this.toolUsed}`
  }
}

let employee1Developer = new Developer ("hassan", 500000, "javascript")
console.log(employee1Developer.getDetails())

let employee1Desiner = new Designer ("sufian", 300000, "figma")
console.log(employee1Desiner.getDetails());


// 08

class Student {
  constructor(public name : string, private grades : number[], protected school : string, readonly studentId : number){}

  addGrade (val : number){
    return this.grades.push(val)
  }

  averageGrade (){
    let sum = 0;
    this.grades.forEach(element => {
      sum += element;
    });
    return sum / this.grades.length;
  }
}

let studentOne = new Student ("hassan",[92,72,63],"al syed",357535)

console.log(studentOne.addGrade(88))
console.log(studentOne.averageGrade())
console.log(studentOne)

// 09

type Response1 = {success : boolean, data : string} | { success : boolean, error : string}


const handleResponse = (res : Response1) =>{
  if(res.success){
    return `Data Received : ${res}`
  } else {
    return `Error Occured : ${res}`
  }
}

let newResponse : Response1 = {success : false, data : "data"}

console.log(handleResponse(newResponse))

// 10

abstract class Animal {
  constructor(protected species : string){}

abstract makeSound (): void

getSpecies(){
  return this.species
}
}

class Dog extends Animal {
  constructor(species : string){
    super(species)
  } 

  makeSound(): string {
    return "Woof!"
  }
} 
class Cat extends Animal {
  constructor(species : string){
    super(species)
  } 

  makeSound(): string {
    return "Meow!"
  }
} 

let dog1 = new Dog("Golden Retriever")

console.log(dog1)

let cat1 = new Cat("Siamese")

console.log(cat1)

const findIndex = <T> (arr : T[], value : T) : string | number =>{
 let index = arr.indexOf(value)
 return index
}

console.log(`out value `,findIndex([1,4,6,8],10))
console.log(`in value `,findIndex([1,4,6,8],4))
console.log( `string out value `,findIndex(["1","4","6","8"],"10"))
console.log(`string in value`,findIndex(["1","4","6","8"],"8"))


interface Car1 {
  drive () : void
}

class newCar implements Car1{
  drive(){
    return `Drivin a car`
  }
}
interface Motercycle1 {
  ride () : void
}

class newMotercycle implements Motercycle1 {
  ride (){
    return `Riding a bike`
  }
}

const useVehicl = (vehicle : newMotercycle | newCar) => {
  
  if  (vehicle instanceof newCar){
    console.log("this")
    return vehicle.drive()
  } else if (vehicle instanceof newMotercycle) {
    console.log("that");
    
    return vehicle.ride()
  }
}

let car_01 = new newCar()
let moterCycle_01 = new newMotercycle()

console.log(useVehicl(car_01))
console.log(useVehicl(moterCycle_01))

// 13

interface Person {
  name : string,
  age : number,
}

interface Employee1 {
  jobTitle :string
}
type  FullTimeEmplyee = Person & Employee1

const describeEmployee = (emp : FullTimeEmplyee) =>{
  return `Name of employee is ${emp.name} and his age is ${emp.age} and his prodession is ${emp.jobTitle}`
}

// let newObj : FullTimeEmplyee = {
//   name : "hassan",
//   age : 25,
// jobTitle : "soft ware engineer"
// }

let FullTimeEmplyee_01: FullTimeEmplyee = {
  name: "hassan",
  age: 25,
  jobTitle: "soft ware engineer",
};

console.log(describeEmployee(FullTimeEmplyee_01))

// 14 
interface Dog1 {
 bark () : void
}

class newDog1 implements Dog1{
  bark(): string {
    return `Woof`
  }
}
interface Cat1 {
  meow(): void
}

class newCat1 implements Cat1 {
  meow (): string {
    return `Meow`
  }
}

type Pet = newDog1 | newCat1

const makeSound = (pet : Pet) =>{
  console.log(pet)
 if(pet instanceof newDog1){
  return pet.bark()
 } else if (pet instanceof newCat1) {
  return pet.meow()
 }
}

let instanceofDog = new newDog1()
let instanceofCat = new newCat1()

console.log(makeSound(instanceofDog))
console.log(makeSound(instanceofCat))


// 15

interface ShapeInter{
  calculateArea () : number
  getType() : string
}

class CircleClass implements ShapeInter {
  constructor(public radius : number){}
  
  calculateArea(): number {
    return (2 * 3.14 * (this.radius ** 2))
  }

  getType(): string {
    return `the type of shape is circle`
  }
}

let newCircle = new CircleClass(3)

console.log(newCircle.calculateArea())

