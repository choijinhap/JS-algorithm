function primesLessThanN(n){
    for(var i=2; i<n;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
// O(n * sqrt(n))

function isPrime(n){
    if(n==2 || n==3) return true;

    for(var i=2; i*i<=n; i++){
        if(n%i==0) return false;
    }
    return true;

}

primesLessThanN(15);