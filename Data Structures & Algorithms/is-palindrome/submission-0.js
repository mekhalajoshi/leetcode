class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
        
        let i = 0;
        let j = s.length-1;

        while(i<j){
            if( s.charAt(i) !== s.charAt(j)) {
                return false;
            }
           
            i++;
            j--;
        }
        return true;
    }
}
