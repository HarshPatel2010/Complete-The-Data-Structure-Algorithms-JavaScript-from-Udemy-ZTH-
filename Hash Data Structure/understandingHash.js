// Hashing is a technique or process of mapping keys, values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.

// Let a hash function H(x) maps the value x at the index x%10 in an Array. For example if the list of values is [11,12,13,14,15] it will be stored at positions {1,2,3,4,5} in the array or Hash table respectively.


let User = {
    age:33,
    name:"user",
    magic:true,
    scream:function(){
        console.log("good!")
    }
}

// here age,name,magic,scream are key
// we can access the data through this key in the O(1) time complexity
console.log(User.age);// we will get 33 in the constant amount of time
User.name = "author";
console.log(User.name);//name has been changed
console.log(User);

// ES6 
 
