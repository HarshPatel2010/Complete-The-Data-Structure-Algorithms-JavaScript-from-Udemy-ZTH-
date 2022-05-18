// BigO(n)

// lets create an array to find time complexity to find any item
// i'm going to use ES6 JS so dont be confused with the syntax 
const arr = ["Harsh"];
const largeArr = new Array(1000).fill("Harsh")

// lets create a function to find a item from the array
const findItem = item =>{

    // t0 calcualte the starting time of this function
    let t0 = performance.now()
    item.forEach(element => {
        console.log(element)
    });

    // t1 define the end time of this function
    let t1 = performance.now()
    console.log("call to find Harsh took "+  (t1-t0) + " miliseconds");
  
    
    

}

// run the function of findItem
findItem(largeArr)
