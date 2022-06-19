class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}
class stack {
    constructor(){
      this.array = []
    }
 
    peek(){
        console.log(this.array[this.array.length-1]);
        return this.array[this.array.length-1]
        }
    push(value){
     this.array.push(value);
     console.log(this.array);
     
    }
    pop(){
    console.log(this.array.pop());
    return this.array.pop()

        
    }
}
const myStack = new stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");

