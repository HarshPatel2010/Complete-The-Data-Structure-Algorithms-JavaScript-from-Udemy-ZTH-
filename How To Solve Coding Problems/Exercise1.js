// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false
const arr11 = ['a', 'b', 'c', 'x']
const arr22 = ['z', 'y', 't']


const containsCommonItem = (arr1,arr2)=>{
    arr1.forEach((element,iIndex) => {
        arr2.forEach((ele,jIndex)=>{
            if(arr1[iIndex] === arr2[jIndex])
                return true;
            else{
                return false;
            }
        })
    });
    
}
containsCommonItem(arr11,arr22)



