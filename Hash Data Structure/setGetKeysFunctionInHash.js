class HashTable{
    constructor(size){
        this.data = new Array(size)
    }

    // create hash function for hash value
    _hash(key){
        let hash =0;
        for(let i=0; i<key.length;i++ ){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        console.log("hash is",hash);
        return hash;
    }

    // how to set key and value in hashtable
    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        console.log(this.data)
        return this.data
    }

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let index=0;index<currentBucket.length;index++){
                if(currentBucket[index][0] === key){
                    console.log("result of get function is ",currentBucket[index][1]);
                    return currentBucket[index][1]
                }
            }
            //using ES6 syntax
            // currentBucket.forEach((element,index) => {
            //     if(currentBucket[index][0] === key){
            //         console.log("result of get function is ",currentBucket[index][1]);
            //         return currentBucket[index][1]
            //     }
            // });
        }
        console.log("undefined");
        return undefined
    }

    keys(){
        const keysArray = [];
        for(let i=0; i < this.data.length;i++){
            if(this.data[i]){
            keysArray.push(this.data[i][0][0])
            }
        }
        console.log(keysArray);
        return keysArray
    }
}
const htable = new HashTable(5);
htable.set("grapes",100000)
htable.set("apples",2)
htable.set("oranges",1)
htable.keys()


