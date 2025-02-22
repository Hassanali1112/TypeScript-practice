"use strict";
// // question 01
// interface User {
//   id : number,
//   name : string,
//   email : string,
//   isActive : boolean
// }
const createUser = (user) => {
    return user;
};
const user1 = {
    id: 255799,
    name: "hassan ali",
    email: "dev.hassanali63@gmail.com",
    isActive: true,
};
console.log(createUser(user1));
const processInput = (checKTypes) => {
    if (typeof checKTypes === "string") {
        return `type of Input is string and it value is ${checKTypes}`;
    }
    else {
        return `types of input was number, now is string and value is ${checKTypes.toString()}`;
    }
};
console.log(processInput(255799));
// ____________________________________________________________
// 03
class Vehical {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `The make is ${this.make}, and model is ${this.model} and year of launch is ${this.year}`;
    }
}
class Car extends Vehical {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()} with doors ${this.doors}`;
    }
}
let car1 = new Car("Toyota", "cammy", 2022, 4);
console.log(car1);
class Motercycle extends Vehical {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()} with doors ${this.hasSidecar}`;
    }
}
let bike1 = new Motercycle("Honda", "CD70", 2018, false);
console.log(bike1);
// _________________________________________________________________
// 04
class BankAccount {
    constructor(balance, accNumber) {
        this.balance = balance;
        this.accNumber = accNumber;
    }
    get checkBalance() {
        return this.balance;
    }
    get viewAccNumber() {
        return this.accNumber;
    }
    deposit(amount) {
        return (this.balance + amount);
    }
    withdraw(amount) {
        return amount > this.balance ? `insufficent balance to make this withdraw` : this.balance - amount;
    }
}
let newAcc = new BankAccount(800, "55777436");
console.log(newAcc.checkBalance);
// _________________________________________________________________
// 05
class Shape {
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return 2 * 3.14 * (this.radius ** 2);
    }
}
let circle1 = new Circle("red", 5);
console.log(circle1.calculateArea());
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return (this.height * this.width);
    }
}
let rectangle1 = new Rectangle("blue", 5, 6);
console.log(rectangle1.calculateArea());
const createProduct = (product) => {
    return product;
};
let product1 = {
    id: 5440,
    name: "Iphone 15 pro",
    price: 900,
    category: "electronics"
};
console.log(createProduct(product1));
// 07
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `The name of employee is ${this.name} and his/her salary is ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `${super.getDetails()} and he/she is expert in ${this.programmingLanguage}`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `${super.getDetails()} and he/she is expert in ${this.toolUsed}`;
    }
}
let employee1Developer = new Developer("hassan", 500000, "javascript");
console.log(employee1Developer.getDetails());
let employee1Desiner = new Designer("sufian", 300000, "figma");
console.log(employee1Desiner.getDetails());
// 08
class Student {
    constructor(name, grades, school, studentId) {
        this.name = name;
        this.grades = grades;
        this.school = school;
        this.studentId = studentId;
    }
    addGrade(val) {
        return this.grades.push(val);
    }
    averageGrade() {
        let sum = 0;
        this.grades.forEach(element => {
            sum += element;
        });
        return sum / this.grades.length;
    }
}
let studentOne = new Student("hassan", [92, 72, 63], "al syed", 357535);
console.log(studentOne.addGrade(88));
console.log(studentOne.averageGrade());
console.log(studentOne);
const handleResponse = (res) => {
    if (res.success) {
        return `Data Received : ${res}`;
    }
    else {
        return `Error Occured : ${res}`;
    }
};
let newResponse = { success: false, data: "data" };
console.log(handleResponse(newResponse));
// 10
class Animal {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor(species) {
        super(species);
    }
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    constructor(species) {
        super(species);
    }
    makeSound() {
        return "Meow!";
    }
}
let dog1 = new Dog("Golden Retriever");
console.log(dog1);
let cat1 = new Cat("Siamese");
console.log(cat1);
const findIndex = (arr, value) => {
    let index = arr.indexOf(value);
    return index;
};
console.log(`out value `, findIndex([1, 4, 6, 8], 10));
console.log(`in value `, findIndex([1, 4, 6, 8], 4));
console.log(`string out value `, findIndex(["1", "4", "6", "8"], "10"));
console.log(`string in value`, findIndex(["1", "4", "6", "8"], "8"));
class newCar {
    drive() {
        return `Drivin a car`;
    }
}
class newMotercycle {
    ride() {
        return `Riding a bike`;
    }
}
const useVehicl = (vehicle) => {
    if (vehicle instanceof newCar) {
        console.log("this");
        return vehicle.drive();
    }
    else if (vehicle instanceof newMotercycle) {
        console.log("that");
        return vehicle.ride();
    }
};
let car_01 = new newCar();
let moterCycle_01 = new newMotercycle();
console.log(useVehicl(car_01));
console.log(useVehicl(moterCycle_01));
const describeEmployee = (emp) => {
    return `Name of employee is ${emp.name} and his age is ${emp.age} and his prodession is ${emp.jobTitle}`;
};
// let newObj : FullTimeEmplyee = {
//   name : "hassan",
//   age : 25,
// jobTitle : "soft ware engineer"
// }
let FullTimeEmplyee_01 = {
    name: "hassan",
    age: 25,
    jobTitle: "soft ware engineer",
};
console.log(describeEmployee(FullTimeEmplyee_01));
class newDog1 {
    bark() {
        return `Woof`;
    }
}
class newCat1 {
    meow() {
        return `Meow`;
    }
}
const makeSound = (pet) => {
    console.log(pet);
    if (pet instanceof newDog1) {
        return pet.bark();
    }
    else if (pet instanceof newCat1) {
        return pet.meow();
    }
};
let instanceofDog = new newDog1();
let instanceofCat = new newCat1();
console.log(makeSound(instanceofDog));
console.log(makeSound(instanceofCat));
class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return (2 * 3.14 * (this.radius ** 2));
    }
    getType() {
        return `the type of shape is circle`;
    }
}
let newCircle = new CircleClass(3);
console.log(newCircle.calculateArea());
// 16 => Create a function called addNumbers that takes two parameters of type number and returns their sum. Then, create a function called concatStrings that takes two parameters of type string and returns their concatenation. Call both functions with sample inputs and log the results.
const addNumbers = (num1, num2) => {
    return num1 + num2;
};
const concatStrings = (str1, str2) => {
    return str1 + str2;
};
console.log(addNumbers(33, 76));
console.log(concatStrings("32", "88"));
//# sourceMappingURL=app.js.map