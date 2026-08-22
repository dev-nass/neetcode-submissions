class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
        let word1 = s.split('').sort().join();
        let word2 = t.split('').sort().join();
        
        console.log("word 1:", word1);
        console.log("word 2:", word2);

        return word1 == word2 ? true : false;
    }
}
