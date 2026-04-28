class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
       if(!this.map.has(key)) return -1;
       let value = this.map.get(key);
       this.map.delete(key);
       this.map.set(key, value);
       return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key);
        }

        if(this.map.size === this.capacity){
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        
        this.map.set(key, value);
    }
}
