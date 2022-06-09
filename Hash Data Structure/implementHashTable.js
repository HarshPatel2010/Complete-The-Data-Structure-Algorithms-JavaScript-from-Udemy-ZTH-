// lets create own hash function
class Hashtable{
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i)% this.data.length
            console.log("key.charcodeat is ",  key.charCodeAt(i));
            console.log("i is   ",  i);
            console.log("hash is   ",  hash);
            console.log((hash + key.charCodeAt(i) * i));
        }
        console.log(hash)
        
     }
}
const hashTab = new Hashtable(50);
hashTab._hash("Hello")

