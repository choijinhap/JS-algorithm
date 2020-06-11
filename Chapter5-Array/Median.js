//정렬된 두개의 배열이 동일한 크기일때 해당 배열들의 중앙값 찾기
function medianOfArray(arr){
    let len=arr.length;
    if(len%2==0){
        return (arr[len/2-1]+arr[len/2])/2;
    }else{
        return arr[Math.floor(len/2)];
    }
}
console.log(medianOfArray([1,2]));