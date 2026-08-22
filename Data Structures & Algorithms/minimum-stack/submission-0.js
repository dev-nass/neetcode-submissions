class MinStack {
  constructor() {
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.minStack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    // const arrange_MinStack = this.minStack.sort((a, b) => b - a);
    //
    // return arrange_MinStack[0];
    return this.minStack[this.minStack.length - 1]; // return the top (last) element
  }

  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.minStack);
  }
}
const input = [
  "MinStack",
  "push",
  1,
  "push",
  2,
  "push",
  0,
  "getMin",
  "pop",
  "top",
  "getMin",
];
sol = new MinStack(input);
