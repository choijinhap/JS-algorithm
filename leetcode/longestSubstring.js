//#1 brute force. one by one. using recursive function 
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
