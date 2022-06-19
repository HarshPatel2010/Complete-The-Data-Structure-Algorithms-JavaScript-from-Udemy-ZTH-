class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}
class stack {
    constructor(){
        this.top=null;
        this.bottom = null;
        this.length=null;
    }
 
    peek(){
        console.log("top is",this.top);
        
      return this.top
    }
    push(value){
        const newNode = new Node(value)
      if(this.length === 0 ){
        this.top = newNode;
        this.bottom = newNode;
      }else{
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer
      }
      this.length++
      console.log(this);
      return this;

    }
    pop(){
        if(!this.top){
            console.log(null);
            return null
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--
        console.log(this);
        return this;
        
    }
}
const myStack = new stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
// myStack.peek()
myStack.pop()
