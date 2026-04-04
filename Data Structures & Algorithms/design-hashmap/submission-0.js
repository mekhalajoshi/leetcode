class MyHashMap {
    constructor() {
        this.k = [];
        this.v = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // get index
        let i = this.k.findIndex((a)=>a===key);
        if(i===-1){//not present
            this.k.push(key);
            this.v.push(value);
        }else{ // already present
            this.v[i] = value;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let i = this.k.findIndex((a)=>a===key);
        if(i===-1){ //not present
           return -1
        }else{ // already present
            return this.v[i];
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let i = this.k.findIndex((a)=>a===key);
        if(i!==-1){ // present
           this.k.splice(i,1);
           this.v.splice(i,1);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
