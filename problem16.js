var compareTriplets = function(a, b) {
    var alice = 0;
    var bob = 0;

    for (var i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
};

console.log(compareTriplets([5, 6, 7], [7, 6, 10]));