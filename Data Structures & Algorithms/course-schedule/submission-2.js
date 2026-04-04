class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //Create map
        const map = new Map();
        for(let i=0 ; i<numCourses; i++){
            map.set(i,[]);
        }
console.log(map);
        for(let [a,b] of prerequisites){
            map.set(a, [...map.get(a),b]) ;
        }
console.log(map)
        //Create visiting set
        const visiting = new Set();

        //if map val is empty return true
        //cur has visiting then return false

        const dfs = (cur) => {
            const neighbours = map.get(cur);
            console.log (neighbours);

            if(neighbours.length === 0) {console.log("this should be true"); return true} ;

            if(visiting.has(cur)) return false

            
                visiting.add(cur);
            for(let pre of neighbours){
            console.log (visiting);
            console.log (pre);

                if(!dfs(pre)) return false
            }
            visiting.delete(cur);
            map.set(cur,[]);
            return true;
        }


        //dfs starting with every node

        for(let [node, pre] of map) {
            if(!dfs(node)) {
                console.log("is this printing?")
                return false}
        }
        return true;
    }
}
