"use strict";
class Customer {
    constructor(customerName) {
        this.payments = [];
        this.customerName = customerName;
    }
    payment(payment) {
        return `The payment is ${payment}`;
    }
    set setPayments(payment) {
        this.payments.push(payment);
    }
    get getPayments() {
        return this.payments;
    }
}
let customerOne = new Customer("faisal");
console.log(customerOne.setPayments = 5000);
console.log(customerOne.setPayments = 500);
console.log(customerOne.getPayments);
let creatureOne = {
    name: "falcon",
    flySpeed: 500,
};
let creatureTwo = {
    name: "Tiger",
    runSpeed: 200
};
console.log(creatureOne);
console.log(creatureTwo);
let newCreatureOne = {
    name: "Hen",
    flySpeed: 30,
    runSpeed: 40
};
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, isAutomatic) {
        super(make, model, year);
        this.isAutomatic = isAutomatic;
        // this.isAutomatic = isAutomatic
    }
    getInfo() {
        return `This is ${this.make} model ${this.model} and year of launch is ${this.year} and it is automatic ${this.isAutomatic}`;
    }
}
let car1 = new Car('Toyota', 'Camry', 2015, true);
console.log(car1.getInfo());
let creatureThree = {
    name: "unicorn",
    runSpeed: 50,
    flySpeed: 60
};
console.log(creatureThree);
class CustomerData {
    constructor(name) {
        this.name = name;
        this.cardList = [];
    }
    getCartList() {
        return this.cardList;
    }
    set addToCard(item) {
        this.cardList.push(item);
    }
}
let newCustomer = new CustomerData("Hassan");
newCustomer.addToCard = "iphone 16";
newCustomer.addToCard = "mac book 2025";
console.log(newCustomer);
const creatureFor = (creature) => {
    if ("flySpeed" in creature) {
        return `The name of Creature is ${creature.name} and fly speed is ${creature.flySpeed}`;
    }
    else {
        return `The name of Creature is ${creature.name} and run speed is ${creature.runSpeed}`;
    }
};
let bird = {
    name: "butterfly",
    // flySpeed : 20,
    runSpeed: 40
};
console.log(creatureFor(bird));
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let sumBtn = document.querySelector("#sumBtn");
const sumFunc = (val1, val2) => {
    return val1 + val2;
};
sumBtn.addEventListener("click", () => {
    console.log(sumFunc(+input1.value, +input2.value));
});
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("congratulation promise has resolved!");
    }, 0);
});
promise.then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
const data = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
console.log(data({ name: "Abdul Rehman" }, { profession: "software engineer" }));
//# sourceMappingURL=app.js.map