class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length:n}, ()=>[]);
        const visited = Array(n).fill(false);

        for (const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const bfs = (node) => {
            const q = [node];
            visited[node] = true; 

            while(q.length) {
                const cur = q.shift();

                for (const nei of adj[cur]) {
                    if(!visited[nei]){
                        q.push(nei);
                        visited[nei] = true;
                    }
                }
            }
        }

        let res = 0;
        for ( let i=0; i<n; i++) {
            if(!visited[i]) {
                bfs(i);
                res++;
            }
        }

        return res;
    }
}
