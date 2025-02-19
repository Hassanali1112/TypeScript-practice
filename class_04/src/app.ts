interface customerInfo {
  customerName : string;
  payment (n :  number) : void ;
}

class Customer implements customerInfo{
  protected payments : number[] = []
  customerName: string; 
  constructor(customerName : string){
    this.customerName = customerName
  }

 payment(payment: number) {
    return `The payment is ${payment}`
  }

  set setPayments (payment : number){
    this.payments.push(payment)
  }

  get getPayments(){
    return this.payments
  }

}

let customerOne = new Customer("faisal")
console.log(customerOne.setPayments =5000)
console.log(customerOne.setPayments =500)
console.log(customerOne.getPayments)


type Bird = {
  name : string;
  flySpeed : number;
}

type Animal = {
  name : string;
  runSpeed : number;
}

type Creature = Bird | Animal ;

let creatureOne : Creature = {
  name : "falcon",
  flySpeed : 500,
}

let creatureTwo : Creature = {
  name : "Tiger",
  runSpeed : 200
}

console.log(creatureOne)
console.log(creatureTwo)

type NewCreature = Bird & Animal;

let newCreatureOne : NewCreature = {
  name : "Hen",
  flySpeed : 30,
  runSpeed : 40
}

abstract class Vehicle {
  constructor(public make : string, public model : string, public year : number){}

  abstract getInfo (): void
}

class Car extends Vehicle {
  
  constructor(make : string, model : string, year : number , public isAutomatic : boolean){
    super(make,model, year)
    // this.isAutomatic = isAutomatic
  }

  getInfo() {
    return `This is ${this.make} model ${this.model} and year of launch is ${this.year} and it is automatic ${this.isAutomatic}`
  }
}

let car1 = new Car('Toyota', 'Camry', 2015, true)

console.log(car1.getInfo())

interface bird {
  name : string;
  flySpeed : number;
}


interface animal {
  name : string;
  runSpeed : number;
}

interface Creatures extends bird , animal{}

let creatureThree : Creatures = {
  name : "unicorn",
  runSpeed : 50,
  flySpeed : 60
}

console.log(creatureThree)

interface CustomerInfo {
  name : string,
  getCartList () : void
}

class CustomerData implements CustomerInfo {
  cardList : string[]=[]
  constructor(public name : string){}
   getCartList() : string[]{
    return this.cardList
   }

   set addToCard (item : string){
    this.cardList.push(item)
   }
}

let newCustomer = new CustomerData("Hassan") 

newCustomer.addToCard = "iphone 16";
newCustomer.addToCard = "mac book 2025";

console.log(newCustomer)

type BirdForGuard = {
  name : string;
  flySpeed : number;
}

type AnimalForGuard = {
  name : string;
  runSpeed : number;
}

type CreaturesForGuard = BirdForGuard | AnimalForGuard 


const creatureFor = (creature : CreaturesForGuard) =>{
  if("flySpeed" in creature){
    return `The name of Creature is ${creature.name} and fly speed is ${creature.flySpeed}`
  } else {
    return `The name of Creature is ${creature.name} and run speed is ${creature.runSpeed}`
  }
}

let bird : CreaturesForGuard = {
  name : "butterfly",
  // flySpeed : 20,
  runSpeed :40
}
console.log(creatureFor(bird))

let input1 = <HTMLInputElement> document.querySelector("#input1")
let input2 = <HTMLInputElement> document.querySelector("#input2")

let sumBtn = <HTMLButtonElement> document.querySelector("#sumBtn");

const sumFunc = (val1: number, val2: number)=>{
  return val1 + val2;
} 

sumBtn.addEventListener("click", ()=>{
  console.log(sumFunc(+input1.value,+input2.value))
})

let promise : Promise<string> = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("congratulation promise has resolved!")
  },0)
})
promise.then((res)=>{
  console.log(res)
})
.catch((error)=>{
  console.log(error)
})


const data =<A extends object, B extends object> (obj1 : A , obj2 : B) =>{
 
  return {...obj1, ...obj2}
}

console.log(data( {name : "Abdul Rehman"}, {profession : "software engineer"}))