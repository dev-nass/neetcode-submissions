class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let el of strs) {
            let el_Key = el.split("").sort().join();

            if (map.has(el_Key)) {
                map.get(el_Key).push(el);
                continue;
            }

            map.set(el_Key, [el]);
        }

        console.log([...map.values()]);
        return [...map.values()];
    }
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
sol = new Solution();
sol.groupAnagrams(strs);
