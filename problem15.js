var notString = function(str) {
    if (str.startsWith("not")) {
        return str;
    } else {
        return "not " + str;
    }
};

console.log(notString('good'))
console.log(notString('not bad'))