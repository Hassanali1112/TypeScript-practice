const sumBtn = document.querySelector("#sumBtn");
const inp1 = document.querySelector("#inp1")! as HTMLInputElement;
const inp2 = document.querySelector("#inp2")! as HTMLInputElement;

let sumFunc = (num1: number, num2: number) => {
  return num1 + num2;
};

sumBtn?.addEventListener("click", () => {
  console.log(sumFunc(+inp1.value, +inp2.value));
});

var userName: string;
userName = "hassan";

// userName = 33  error

var contries: string[] = [];

contries.push("pakistan");
contries.push("china");

// console.log(contries)

let tubleArray: [string, Number, boolean];

tubleArray = ["hassan", 92, true];

// console.log(tubleArray);

type studentInfo = {
  name: string;
  id: number;
  skills: string[];
  isEnrolled: boolean;
  email?: string;
};

let studentOne: studentInfo = {
  name: "hassan",
  id: 255799,
  skills: ["html", "css", "js"],
  isEnrolled: true,
  email : "hassan@gmail.com"
};

let studentData: studentInfo[] = [];
studentData.push(studentOne);

// console.log(studentOne)


class studentDetails {
 private name : string;
  position : number;

  constructor (n : string, p : number){
    this.name = n;
    this.position = p;
  }

  getName (){
   return this.name
  }

  setName (userName : string){
    this.name = userName;
  }
}

let student1 = new studentDetails("taimoor",1);
student1.setName("hassan")
console.log(student1)

class newBatch {
  constructor(public stdlength : number ){
  }
}

let strength = new newBatch(50);
console.log(strength)