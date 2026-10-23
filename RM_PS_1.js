//******************Problem01***************/
var solveMeFirst = function(a, b) {
    return a + b;
};
let a=2
let b=3

let result=solveMeFirst(a,b)
console.log(result)

//******************Problem02***************/
var solveMeFirst = function(x, y) {
    return a * b;
};
let x=4
let y=5

let output=solveMeFirst(x,y)
console.log(output)


//******************Problem03***************/
var evenOrOdd = function(number) {
  return  number;
 };

 let number=6
 if(number%2==0){
    console.log("Even")
 }
 else{
    console.log("odd")
 }


//******************Problem04***************/
var makeNegative = function(numbers) { 
    return -numbers
};
let numbers=10
console.log(makeNegative(numbers))


//******************Problem05***************/
var opposite = function(num) { 
    return -num
};
let num=-10
console.log(opposite(number))


//******************Problem06***************/
var simpleArraySum = function(ar) { 
    let sum=0;

    for(let i=0; i<ar.length; i++){
        sum=sum+ar[i]
    }
    return sum;
};

let ar=[1,2,3,4,5]
console.log(simpleArraySum(ar))


//******************Problem07***************/
var sleepIn = function(weekday, vacation) { 
    if(!weekday || vacation){
        return true
    }
    else{
        return false
    }
};

let weekday=true
let vacation=false

console.log(sleepIn(weekday, vacation))


//******************Problem08***************/
var monkeyTrouble = function(aSmile, bSmile) { 
return aSmile==bSmile
};

let aSmile=true
let bSmile=true

console.log(monkeyTrouble(aSmile, bSmile))


//******************Problem09***************/
var sumDouble = function(m, p) { 
    if(m==p){
        return 2*(m+p)
    }
    else{
        return m+p
    }
};

let m=5
let p=3
let score=sumDouble(m,p)
console.log(score)


//******************Problem10***************/
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

//******************Problem11***************/
var parrotTrouble = function(talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
};

console.log(parrotTrouble(true, 7))

//******************Problem12***************/
var makes10 = function(a, b) {
    if(a+b==10){
        return true
    }else{
        return false
    }
 };

 console.log(makes10(5,6))

//******************Problem13***************/
var nearHundred = function(n) {
    if((n<=100 && n>90) || (n<=200 && n>190) ){
        return true
    }else{
        return false
    }
 };
 console.log(nearHundred(201))

//******************Problem14***************/
var posNeg = function(a, b, negative) {
    if (negative) {
        return (a < 0 && b < 0);
    } else {
        return ((a < 0 && b > 0) || (a > 0 && b < 0));
    }
};

console.log(posNeg(-1,-1, true))

//******************Problem15***************/
var notString = function(str) {
    if (str.startsWith("not")) {
        return str;
    } else {
        return "not " + str;
    }
};

console.log(notString('good'))
console.log(notString('not bad'))

//******************Problem16***************/
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

//******************Problem17***************/
var aVeryBigSum = function(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    return sum;
};

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003]));

//******************Problem18***************/
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

//******************Problem19***************/
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

//******************Problem20***************/
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


//******************Problem21***************/
var repeatStr = function(n, s) {
    return s.repeat(n);
};

console.log(repeatStr(10, "ha"));

//******************Problem22***************/
var solution = function(str) {
    return str.split("").reverse().join("");
};

console.log(solution("world"))

//******************Problem23***************/
var positiveSum = function(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
};

console.log(positiveSum([1, -4, 7, 12]));

//******************Problem24***************/
var summation = function(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
};

console.log(summation(10));

//******************Problem25***************/
var booleanToString = function(b) {
    return String(b);
};

console.log(booleanToString(true));
