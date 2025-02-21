"use strict";
let userName;
userName = "John Doe";
let fruits = [];
fruits.push("Apple");
let student1 = {
    name: "hassan ali",
    skills: ["javascript", "react"],
    class: "matric",
    id: 255799,
};
let student1Skills = ["HTML", "CSS"];
student1.skills = student1Skills;
console.log(student1);
let student1Data = {
    name: "taimoor",
    skills: ["Mobile Repairing", "gaming"],
    class: "2nd Year",
    id: 345987,
};
console.log(student1Data);
class Student {
    constructor(n, i) {
        this.skills = [];
        this.name = n;
        this.id = i;
    }
    // newSkill (skill : string){
    //  return this.skills.push(skill)
    // }
    set newSkill(skill) {
        this.skills.push(skill);
    }
    // getSkills (){
    //   return this.skills;
    // }
    get getSkills() {
        return this.skills;
    }
}
let firstStudent = new Student("Abdul Rehman", 255988);
//     normal Methods
// firstStudent.newSkill("Lab Technician")
// firstStudent.newSkill("Lab testing")
// console.log(firstStudent.getSkills())
console.log(firstStudent);
//    get and set methods
firstStudent.newSkill = "html";
class VStudent extends Student {
    constructor(name, id) {
        super(name = name, id = id);
        this.canVolunteerEvent = [];
    }
    set studentEligibleForEvent(evnt) {
        this.canVolunteerEvent.push(evnt);
    }
    get getVolunteerEvent() {
        return this.canVolunteerEvent;
    }
}
let vStuent1 = new VStudent("Hassan", 255799);
vStuent1.studentEligibleForEvent = "IT mega Test";
let customer1 = {
    name: "hassan ali",
    lastShop() {
        console.log("last week");
    }
};
console.log(customer1.lastShop());
class customerInfo {
    constructor(n) {
        this.name = n;
    }
    lastShop() {
    }
}
