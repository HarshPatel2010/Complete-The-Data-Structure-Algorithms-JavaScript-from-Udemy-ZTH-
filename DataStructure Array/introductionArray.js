const string = ["a","b","c","d"];
//4*4 = 16 bytes of storage

//push - add the item at the end 
string.push("e");  //[O(1)]
console.log(string);
//Output: [ 'a', 'b', 'c', 'd', 'e' ]

//pop - remove an item from an array 
string.pop()  //[O(1)]
console.log(string);
//Output: [ 'a', 'b', 'c', 'd' ]

//unshift - add a new item at the begining of an array
string.unshift("x")  //[O(n)]
console.log(string);
//Output: [ 'x','a', 'b', 'c', 'd' ]

//splice
// string.splice(startIndex,deleteCount,addThe Item which u want)
string.splice(2,0,"Harsh"); 
console.log(string);




