"use strict";
const sumBtn = document.querySelector("#sumBtn");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
let sumFunc = (num1, num2) => {
    return num1 + num2;
};
sumBtn === null || sumBtn === void 0 ? void 0 : sumBtn.addEventListener("click", () => {
    console.log(sumFunc(+inp1.value, +inp2.value));
});
var userName;
userName = "hassan";
// userName = 33  error
var contries = [];
contries.push("pakistan");
contries.push("china");
// console.log(contries)
let tubleArray;
tubleArray = ["hassan", 92, true];
let studentOne = {
    name: "hassan",
    id: 255799,
    skills: ["html", "css", "js"],
    isEnrolled: true,
    email: "hassan@gmail.com"
};
let studentData = [];
studentData.push(studentOne);
// console.log(studentOne)
class studentDetails {
    constructor(n, p) {
        this.name = n;
        this.position = p;
    }
    getName() {
        return this.name;
    }
    setName(userName) {
        this.name = userName;
    }
}
let student1 = new studentDetails("taimoor", 1);
student1.setName("hassan");
console.log(student1);
class newBatch {
    constructor(stdlength) {
        this.stdlength = stdlength;
    }
}
let strength = new newBatch(50);
console.log(strength);
