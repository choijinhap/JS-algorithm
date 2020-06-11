//배열에서 두 수를 합해서 특정값 나오는지 확인
function findSum1(arr,val){
    for(var i=0; i<arr.length; i++){
        for(var j=i; j<arr.length; j++){
            if(arr[i]+arr[j]==val){
                return [i,j];
            }
        }
    }
    return -1;
}
//time complexity : O(n2) space complexity : O(n)
console.log(findSum1([1,2,3,4,5,6,7,8,9],11));


//배열을 순서대로 뒤지는데 타겟값과 차이를 해쉬테이블에 담아서 그값을 사용해서 찾는다.
//time complexity : O(n) space complexity : O(n)
function findSum2(arr,val){
    let hashtable={};

    for(let i=0;i<arr.length;i++){
        let curElem=arr[i];
        let diff=val-curElem;

        if(hashtable[curElem]!=undefined){
            return [i,hashtable[curElem]];
        }else{
            hashtable[diff]=i;
        }
    }
    return -1;
}
console.log(findSum2([1,2,3,4,5,6,7,8,9],11));
