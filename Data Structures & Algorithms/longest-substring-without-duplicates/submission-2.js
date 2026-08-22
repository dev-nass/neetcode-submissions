class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let s_array = s.split('');
        let longest = 0;
        
        for(let i = 0; i < s_array.length; i++) {
            let seen = new Set();
            let cur_longest = 0;
            
            for(let j = i; j < s_array.length; j++) {
                if (seen.has(s_array[j])) {
                    break; // duplicate found
                }
                
                seen.add(s_array[j]);
                cur_longest++;
                longest = Math.max(longest, cur_longest);
            }
        }

    console.log(longest);
        return longest;
    }
}

// let s = "zyxzyx";
let s="pwwkew";

sol = new Solution;
sol.lengthOfLongestSubstring(s);