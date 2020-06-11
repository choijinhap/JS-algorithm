//slice()를 구현해본다
function arraySlice(arr,startIndex,endIndex){
    //startIndex와 endIndex 파라미터 둘다 없으면 그대로 반환
    if(!startIndex && !endIndex){
        return arr;
    }

   if(!endIndex){
       endIndex=arr.length;
   }

   let result=[];
   for(let i=startIndex;i<endIndex;i++){
        result.push(arr[i]);
   }
   return result;
}
//time compelxity O(n) space complexity O(n)
console.log(arraySlice([1,2,3,4]));
console.log(arraySlice([1,2,3,4],1));
console.log(arraySlice([1,2,3,4],1,2));

console.log(arraySlice([1,2,3,4],2,1));