class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    const map = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (let i = 0; i < s.length; i++) {
      let char = s[i];

      if (map[char]) {
        // its an opening
        stack.push(char);
      } else {
        // its a closing
        let lastSeenClosing = stack.pop();

        if (map[lastSeenClosing] !== char) {
          return false;
        }
      }
    }
    // stack.push("(");
    // stack.push("[");
    // console.log(stack);
    // stack.pop();
    // console.log(stack);
    // console.log(map[")"]);
    return stack.length === 0;
  }
}

const s = "([{}])";

sol = new Solution();
sol.isValid(s);

