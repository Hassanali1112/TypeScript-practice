let userName : string;
userName = "John Doe";

let fruits : string[]= [];

fruits.push("Apple");
// fruits.push(9) error

type student ={
  name : string,
  skills : string[],
  class : string,
  id : number,
}


let student1 : student = {
  name : "hassan ali",
  skills : ["javascript", "react"],
  class : "matric",
  id : 255799,
}

type studentSkills = [string,string];

let student1Skills : studentSkills = ["HTML","CSS"]
student1.skills = student1Skills;

console.log(student1);


type studentData = {
  name : string,
  skills : studentSkills,
  class : string,
  id : number,
  email? : string,
}

let student1Data : studentData ={
  name : "taimoor",
  skills : ["Mobile Repairing","gaming"],
  class : "2nd Year",
  id : 345987,
}

console.log(student1Data)

class Student {
  name : string;
  id : number;
  skills : string[] = [];
  constructor(n : string, i : number){
    this.name = n;
    this.id = i;
  }
  // newSkill (skill : string){
  //  return this.skills.push(skill)
  // }

 set newSkill(skill : string){
    this.skills.push(skill)
  }

  // getSkills (){
  //   return this.skills;
  // }

  get getSkills (){
    return this.skills;
  }
}

let firstStudent = new Student("Abdul Rehman", 255988);

//     normal Methods
// firstStudent.newSkill("Lab Technician")
// firstStudent.newSkill("Lab testing")

// console.log(firstStudent.getSkills())

console.log(firstStudent)

//    get and set methods

firstStudent.newSkill = "html"

class VStudent extends Student {
 canVolunteerEvent : string[] = [];

 constructor(name : string, id : number ){
  super(name = name , id = id)
 }

 set studentEligibleForEvent (evnt : string){
  this.canVolunteerEvent.push(evnt)
 }

 get getVolunteerEvent (){
  return this.canVolunteerEvent;
}
}

let vStuent1 = new VStudent("Hassan", 255799);
vStuent1.studentEligibleForEvent = "IT mega Test";

// console.log(vStuent1)

interface customer {
  name : string,
  lastShop () : void,
}

let customer1 = {
  name : "hassan ali",
  lastShop (){
    console.log("last week")
  }
}

console.log(customer1.lastShop())

class customerInfo implements customer {
  name: string;
  constructor(n : string){
    this.name = n;
  }
  lastShop(): void {
     
  }
}