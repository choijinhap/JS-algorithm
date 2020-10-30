//#1 brute force. one by one. using recursive function. too long time spend
let lengthOfLongestSubstring = function (s) {
    if(s.length<1){
        return 0;
    }
  let resultArray = [];
    for (const c of s) {
    if (!resultArray.includes(c)) {
      resultArray.push(c);
    } else {
      break;
    }
  }
  let cnt=lengthOfLongestSubstring(s.slice(1));
  return resultArray.length>cnt?resultArray.length:cnt;
};


//#2 other one(not mine) using set
//문자열s를 왼쪽 오른쪽 offset을 두고 중복되는 단어가 나오면 새로 maxlen을 측정해서 최종 maxlen이 높은걸 사용하는 방식 훨씬 빠르다.
let lengthOfLongestSubstring2 = function(s) {
    let left =0;
    let right =0;
    let set = new Set();
    let maxLen = 0;
    while(right<s.length){
        let char = s.charAt(right);
        if(!set.has(char)){
            set.add(char);
            maxLen = Math.max(maxLen, set.size)
            right++
        } else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    return maxLen;
};
