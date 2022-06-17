const arr =[2,1,1,2,3,5,1,2,4];
const firstrecurring = (arr)=>{
   const checkList = {};
   for(let i=0;i<arr.length;i++){
    if(checkList[arr[i]] !== undefined){
      return console.log(arr[i]);
    
    }else{
    // checkList.push(arr[i])
    return checkList[arr[i]] = i;
    }
   }
   console.log("checklist is",checkList);
   return undefined;
}
firstrecurring(arr)