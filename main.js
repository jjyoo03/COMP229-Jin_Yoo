function sum(...args){
    let numSum = 0;

    for(const arg of args){
        numSum += arg;
    }
    return numSum;
}

// console.log(sum(1,2,3,4));

function multisum(a,b,...args){
    let numSum = 0;

    for(const arg of args){
        numSum += arg;
    }
    return (a*b) + numSum;
}

console.log(multisum(1,4,3,4,5,6));
