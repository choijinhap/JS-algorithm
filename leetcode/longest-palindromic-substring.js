//using dynamic programming
//p[i,j]가 palindrome이려면 s[i]와 s[j]가 같고 p[i+1,j-1]이 palindrome이면 된다.
let longestPalindrome = function(s) {    
    const n = s.length;
    const dp = [];
    let longest = "";
    
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false);
    }
    
    for (let len = 1; len <= n; len++) {
        for (let row = 0; row < n - len + 1; row++) {
            const col = row + len - 1;
            if (s.charAt(row) == s.charAt(col)) {
                if (len <= 2 || dp[row + 1][col - 1] == true) {
                    dp[row][col] = true;
                    const substr = s.substring(row, col + 1);
                    if (substr.length > longest.length) longest = substr;
                }
            }
        }
    }
    
    return longest;
};
