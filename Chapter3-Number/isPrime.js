
//소수알고리즘
// #1 숫자 n을 2부터 n-1까지의 수로 나눠 나머지가 0인지 확인

function isPrime1(n){
    if(n<=1){
        return false;
    }
    for(var i =2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
//시간복잡도 O(n)

//최적화하기
//2,3,5,7,11,13,17,19,23,29,31,37...
//소수는 2와3을 제외하고는 6k ± 1이다.
//또 n이 소수인지 확인하려면 n의 제곱근까지만 확인해보면 된다.
function isPrime2(n){
    if(n<=1) return false;
    if(n<=3) return true;

    if(n%2==0 || n%3==0) return false;

    for(var i=5; i*i<n; i=i+6){
        if(n%i==0 || n%(i+2)==0) return false;
    }
    return true;
}
//시간복잡도 O(sqrt(n))
