var nearHundred = function(n) {
    if((n<=100 && n>90) || (n<=200 && n>190) ){
        return true
    }else{
        return false
    }
 };
 console.log(nearHundred(201))