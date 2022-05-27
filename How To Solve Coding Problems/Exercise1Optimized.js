// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
const arr2 = ['a', 'b', 'c', 'x']
const arr1 = ['a', 'y', 't']

// Firstly, we will create an object of a then we will compare this object with array b so the time complexity will be linear
const containItem = (array1,array2)=>{
    let map = {} // lets create an object
    array1.forEach((element,indexOfArray1) => {
        if(!map[array1[indexOfArray1]]){
            const item = array1[indexOfArray1];
            map[item] = true; //lets set a true in map[item]
        }
    });
    array2.forEach((element,indexOfArray2)=>{
        if(map[array2[indexOfArray2]]){
            console.log("done2");

            return true;
            
        }
    
    }
)
  
    return false
 
    
}

containItem(arr1,arr2);

