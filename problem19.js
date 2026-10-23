/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
    var result = [];

    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            result.push(grades[i]);
        } else {
            var nextMultiple = Math.ceil(grades[i] / 5) * 5;

            if (nextMultiple - grades[i] < 3) {
                result.push(nextMultiple);
            } else {
                result.push(grades[i]);
            }
        }
    }

    return result;
};

console.log(gradingStudents([73, 67, 38, 33]));