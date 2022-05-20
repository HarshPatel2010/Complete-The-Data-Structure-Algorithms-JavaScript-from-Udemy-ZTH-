// R1.-Worst Case
//Example
// lets Find jigar from this array as its last element thats called worst case
const arr = ["Harsh", "Jay","Harsh", "Jay","Harsh", "Jay","Harsh", "Jay","Harsh", "Jay","Jigar"];

// lets create a function to find a item from the array
const findItem = (item) => {
  item.forEach((element,index) => {
    if(element === "Jigar"){
        console.log("Jigar has been found at ",index,"th Index");   
    }
  });
};
findItem(arr)

// R2. - Remove Constant
// lets create a function to find a item from the array
const findItem2 = (item) => {
    item.forEach((element,index) => {
      if(element === "Jigar"){//O(n)
          console.log("Jigar has been found at ",index,"th Index");  //O(1) 
      }
    });
  };
  findItem2(arr)
//Big O(1+n)
// we can drop the constant 1,we can right as BigO(n)

// R3. - Different terms for inputs
//when two different inputs are defined so the tiime complexity should not be only n means time complexity (BIg O) should be different like BigO(a+b) where a for input 1 and b for input 2
let b = [1,2,3,4]
let c = new Array(1000).fill("Harsh Patel");
const printItems = (item1,item2)=>{
    //for Item1
    item1.forEach((element)=>{
        console.log(element,"is element of item 1");
    })
    //for Item2
    item2.forEach((element)=>{
        console.log(element,"is element of item 2");   
    })
}
printItems(b,c)
//BigO(n+n) or BigO(n) // these time complexity is wrong bcz be have different input so time complexity should be different like
// BigO(a+b) where a is for item 1 and b for item 2
// R4. - Drop non dominant term
const sumOfPairs=(numbers)=>{
  console.log("numbers are");
  
  numbers.forEach((number)=>{
    console.log(number);
    
  })
console.log("sum has been started");

  numbers.forEach((firstNum)=>{
    numbers.forEach((secondNumber)=>{
      console.log(firstNum + secondNumber);
    })
  })
}
sumOfPairs([1,2,3,4,5,6])
//O(n+n^2) so we will drop the non dominant term which is n as when n^2 will scale n can not compare with n^2 so time complexity is
//O(n^2)



