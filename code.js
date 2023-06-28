const addition = (a, b) => (+a)+(+b);
const subtraction = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b)=>{
    if (b == 0) return "OOPS";
    return a/b;
};

let no1 = 8;
let operator = "+";
let no2=6;

let operate = function(operator, no1, no2){
    if (operator == "+") return addition(no1, no2);
    else if (operator == "-") return subtraction(no1, no2);
    else if (operator == "*") return multiply(no1, no2);
    else if (operator == "/") return divide(no1, no2);
    return "Not a valid operator"
}

console.log(operator("0/9"));