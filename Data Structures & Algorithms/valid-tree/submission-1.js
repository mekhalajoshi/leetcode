class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        }

        const visit  = new Set();
        const adj = Array.from({length:n}, ()=>[]);

        for(const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        
        const dfs = (cur, parent) =>{
            if(visit.has(cur)){
                return false;
            }

            visit.add(cur);
            for(const node of adj[cur]) {
                if (node === parent) {
                    continue;
                }
                if (!dfs(node,cur)){
                    return false;
                }
            }

            return true;
        }
            
        return dfs(0, -1) && visit.size === n;
    }
}
