//reference type
const object1 = {value:10};
const object2 = object1;
const object3 = {value:10};

console.log(object1 === object2); //true as both are same
console.log(object1 == object3); //false because both are different objects as objects are non primtive

//context 
const obj4 = {
    a:function(){
        console.log(this);
        
    }
}

//instantiation - ES6 syntax
class Employee {
    constructor(name,salary,age){
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
    intro(){
        return `I am a ${this.name},and i am ${this.age} years old`
        // console.log(`I am a ${this.name},and i am ${this.age} years old`)
     
    }
}
class ExperienceOfEmployee extends Employee{
    constructor(name,salary,age,joiningYear){
        super(name,salary,age)
        this.joiningYear = joiningYear
    }
    Experience(){
      
       return `${2022 - this.joiningYear} years of an experience in this company`;

        
    }
}
const e1 = new Employee("eName",20000,22);
console.log(e1.intro());

const experience = new ExperienceOfEmployee("harsh",10000,22,2021);
console.log(experience.Experience());


