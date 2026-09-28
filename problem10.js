var diff21 = function(n) { 
    let diff=Math.abs(n-21)

    if(n>21){
        return 2*diff
    }
    else{
        return diff
    }
};

let n=22
console.log(diff21(n))