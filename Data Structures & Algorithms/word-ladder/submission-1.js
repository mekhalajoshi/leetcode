class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) {
            return 0;
        }
        let res = 0;
        let n = wordList.length;
        let m = wordList[0].length;
        let map = new Map();

        for (let word of wordList){
            for(let i=0; i<m; i++){
                let pattern  = word.substring(0,i) + 
                '*' + 
                word.substring(i+1, m);

                if(map.has(pattern)){
                    map.get(pattern).push(word)
                }else{
                    map.set(pattern, [word]);
                }
            }
        }
        let q = [beginWord];
        let set = new Set([beginWord]);

        while(q.length){
            let size = q.length;
            for(let j=0; j<size; j++){
                let w = q.shift();

                if (w === endWord) {
                    return res+1;
                }
                for (let j = 0; j < m; ++j){
                    
                    let pattern  = w.substring(0,j) + 
                    '*' + 
                    w.substring(j+1, m);

                    for(let nei of  map.get(pattern)||[]){
                        if(!set.has(nei)){
                            set.add(nei);
                            q.push(nei)
                        }
                    }
                }
                
            }
            res++;
        }
        return 0;
    }
}
