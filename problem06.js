var simpleArraySum = function(ar) { 
    let sum=0;

    for(let i=0; i<ar.length; i++){
        sum=sum+ar[i]
    }
    return sum;
};

let ar=[1,2,3,4,5]
console.log(simpleArraySum(ar))