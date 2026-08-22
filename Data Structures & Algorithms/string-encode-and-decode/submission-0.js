class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let string = [];
    strs.forEach((elem) => {
      const eachLetter = elem.split("");
      elem = `${eachLetter.length}#${elem}`;

      string.push(elem);
    });

    return string.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let string = [];

    let i = 0;

    while (i < str.length) {
      let pos = 0; // position of #
      let len = 0; // length of the word

      pos = str.indexOf("#", i);

      // no more # found
      if (pos === -1) {
        break;
      }

      len = Number(str.substring(i, pos)); // extract the portion of string or array and retrieve the length

      console.log(len);
      string.push(str.substring(pos + 1, pos + 1 + len));

      i = pos + 1 + len;
    }

    console.log(string);
    return string;
  }
}

const strs = ["neet", "code", "love", "you"];
const strsToDecode = "4#neet4#code4#love3#you"; // 1 based, 23 letters

// indexOf method is 0 based
// lenght is 1 based

sol = new Solution();
sol.decode(strsToDecode);

