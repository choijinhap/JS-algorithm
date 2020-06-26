function solution(n, lost, reserve) {      
    let lo=lost.slice().filter(r=>r!==reserve.find(a=>a==r));
    let re=reserve.slice().filter(r=>r!==lost.find(a=>a==r));
    
    return n - lo.filter(a => {
        const b = re.find(r => Math.abs(r-a) <= 1);
        if(!b) return true
        re = re.filter(r => r !== b)
    }).length
}