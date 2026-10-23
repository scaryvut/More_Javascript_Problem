var staircase = function(n) {
    var result = "";

    for (var i = 1; i <= n; i++) {
        var spaces = " ".repeat(n - i);
        var hashes = "#".repeat(i);

        result += spaces + hashes;

        if (i < n) {
            result += "\n";
        }
    }

    return result;
};

console.log(staircase(5));