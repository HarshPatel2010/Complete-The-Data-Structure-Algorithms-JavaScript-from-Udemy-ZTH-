class Htable{
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

        keys(){
            const result = [];
            for(let i=0;i<this.data.length;i++){
                if(this.data[i] && this.data[i].length){
                    //loop through potential collision
                    if(this.data[i].length>1){
                        for(let j=0;j<this.data[i].length;j++){
                            result.push(this.data[i][j][0])
                        }
                    }else{
                        result.push(this.data[i][0])
                    }
                }
            }
            console.log(result);
            
        }
}

const hashTable = new Htable(2);
hashTable.set("grapes",100)
hashTable.set("oranges",10)
hashTable.set("mangoes",50);
hashTable.keys()
