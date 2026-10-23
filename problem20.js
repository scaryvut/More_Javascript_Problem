var timeConversion = function(s) {
    var period = s.slice(-2);
    var time = s.slice(0, 8);
    var parts = time.split(":");

    var hour = Number(parts[0]);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }

    return String(hour).padStart(2, "0") + ":" + parts[1] + ":" + parts[2];
};

console.log(timeConversion("07:05:45PM"));
