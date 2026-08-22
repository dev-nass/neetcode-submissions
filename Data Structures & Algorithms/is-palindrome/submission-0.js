class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s.replace(/[^a-zA-Z0-9]/g, "");
    const palindrome = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // ignores non-alphanumeric characters

    // reverses the value of the 'palindrome' var
    const reversedPalindrome = palindrome.split("").reverse().join("");

    // console.log(palindrome);
    // console.log(reversedPalindrome);

    return palindrome === reversedPalindrome ? true : false;
  }
}

// const s = "Was it a car or a cat I saw?";
const s = "tab a cat";

sol = new Solution();
sol.isPalindrome(s);

