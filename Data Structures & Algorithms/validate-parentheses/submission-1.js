class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let open = ['[', '(','{'];

        for(let c of s){
            if(open.includes(c)){
                stack.push(c)
            }else{
                let match = stack.pop()
                if ((c === ']' && match !== '[' )
                    ||( c === '}' && match !== '{') 
                    ||( c === ')' && match !== '(')){
                        return false;
                }
            }
            
        }
    return stack.length ? false :true
    }
}
