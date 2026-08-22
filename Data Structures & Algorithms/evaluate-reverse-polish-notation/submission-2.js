class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = []; // holds the number

    for (const token of tokens) {
      if (!isNaN(token)) {
        // if a its a number
        stack.push(Number(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();

        let res;
        if (token === "+") res = a + b;
        if (token === "-") res = a - b;
        if (token === "*") res = a * b;
        if (token === "/") res = Math.trunc(a / b);

        stack.push(res);
      }
    }
    console.log(stack);
    return stack[0];
  }
}

// const tokens = ["1", "2", "+", "3", "*", "4", "-"];
const tokens = ["4", "13", "5", "/", "+"];

sol = new Solution();
sol.evalRPN(tokens);
