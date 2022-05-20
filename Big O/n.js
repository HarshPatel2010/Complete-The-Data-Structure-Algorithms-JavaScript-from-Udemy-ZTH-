// BigO(n)
// lets create an array to find time complexity to find any item
// i'm going to use ES6 JS so dont be confused with the syntax
const arr = ["Harsh", "Jay"];
const largeArr = new Array(1000).fill("Harsh");

// lets create a function to find a item from the array
const findItem = (item) => {
  // t0 calcualte the starting time of this function
  let t0 = performance.now();
  item.forEach((element) => {
    console.log(element);
  });
  // t1 define the end time of this function
  let t1 = performance.now();
  console.log("call to find Harsh took " + (t1 - t0) + " miliseconds");
};

// run the function of findItem
// findItem(arr);
// findItem(largeArr); //O(n) --> Linear Time or O(1000)



// ----------------------------------------------------------------------------
// BigO(1)
const Boxes = [0,1,2,3,4,55];
const logFirstBox = (boxes)=>{
  
    // here we are finding a value which is stored in the index which is first index of the box
    console.log("First item is",boxes[0]); //O(1) -Constant Time
    console.log("Second item is",boxes[1]);//O(1) -Constant Time
   
  
}
logFirstBox(Boxes); //O(2) operations "no matter how big the basket gets  num of  operations here is going to be 2"