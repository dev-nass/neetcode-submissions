class Solution {
  map = new Map(); // encodedValue -> actual array of element
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (!strs || strs.length === 0) return "";

    let encodedKey = "";

    strs.forEach((elem) => {
      const eachLetter = elem.split("");
      encodedKey += `${eachLetter.length}#${elem}`;
    });

    this.map.set(encodedKey, strs);

    console.log(`Map key and value:  ${[...this.map.entries()]}`);

    return encodedKey;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str.length === 0 || !str) return [];

    // console.log(this.map.get(str));
    return this.map.get(str);
  }
}

const strs = ["neet", "code", "love", "you"];
const strsToDecode = "4#neet4#code4#love3#you"; // 1 based, 23 letters

// indexOf method is 0 based
// lenght is 1 based

sol = new Solution();
sol.encode(strs);
sol.decode(strsToDecode);

