class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        const visit = new Set();

        // create an empty prerequisites map < 0, [] >
        for(let i = 0; i < numCourses; i++) {
            preMap.set(i,[]);
        }

        // fill the prerequisites map < 0, [1,2] >
        for(const [course, pre] of prerequisites) {
            preMap.get(course).push(pre);
        }

        const dfs = (cur) => {
            if(visit.has(cur)) {
                return false;
            } 
            if( preMap.get(cur).length === 0){
                return true;
            }

            visit.add(cur);
            const preList = preMap.get(cur);
            for (let pre of preList) {
                if(!dfs(pre)){
                    return false;
                }
            }
            visit.delete(cur);
            preMap.set(cur,[]);
            return true
        }

        // run dfs on every course
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }

        return true;

    }
}
