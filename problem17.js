var aVeryBigSum = function(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    return sum;
};

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003]));