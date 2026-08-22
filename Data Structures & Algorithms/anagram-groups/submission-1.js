class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    // loop over each value strs
    // apply the anagram code (cat) -> (act)
    // the anagram answer will be used as key  within the map (Introduce each element to the dictionary)
    // the elements of strs that matches the key will be added as value

    // loop over each value strs
    for (let i = 0; i < strs.length; i++) {
      // apply the anagram code (cat) -> (act)
      const anagramVal = strs[i].split("").sort().join();

      // the elements of strs that matches the key will be added as value if their group already existed
      if (map.has(anagramVal)) {
        map.get(anagramVal).push(strs[i]);
        continue;
      }

      // the anagramVal will be used as key  within the map (Introduce each element to the dictionary)
      map.set(anagramVal, [strs[i]]);
    }

    console.log(Array.from(map.values()));

    return Array.from(map.values());
  }
}

const val = ["act", "pots", "tops", "cat", "stop", "hat"];

sol = new Solution();
sol.groupAnagrams(val);

