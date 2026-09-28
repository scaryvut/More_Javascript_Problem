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