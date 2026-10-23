var parrotTrouble = function(talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
};

console.log(parrotTrouble(true, 7))