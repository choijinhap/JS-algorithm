//다수개의 배열에서 공통 항목 찾기
function commonElem(kArray){
    let hashmap={};
    let last,answer=[];

    for(let i=0,kArrayLength=kArray.length;i<kArrayLength; i++){
        let currentArray=kArray[i];
        last=null;

        for(let j=0,currentArrayLength=currentArray.length;j<currentArrayLength;j++){
            let currentElem=currentArray[j];
            if(last!=currentElem){
                if(!hashmap[currentElem]){
                    hashmap[currentElem]=1;
                }else{
                    hashmap[currentElem]++;
                }
            }

            last=currentElem;
        }

    }
    for(let prop in hashmap){
        if(hashmap[prop]==kArray.length){
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

console.log(commonElem([[1,2,3],[1,2,3,4],[2,3,4]]));