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
