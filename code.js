const addition = (a, b) => (+a)+(+b);
const subtraction = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b)=>{
    if (b == 0) return "OOPS";
    return a/b;
};

let no1;
let operator;
// let no2=6;

let operate = function(operator, no1, no2){
    if (operator == "+") return addition(no1, no2);
    else if (operator == "-") return subtraction(no1, no2);
    else if (operator == "*") return multiply(no1, no2);
    else if (operator == "/") return divide(no1, no2);
    return "Not a valid operator"
}

const display = document.querySelector('.display-text');

let digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach((digitBtn)=>{
    digitBtn.addEventListener("click", (e)=>{
        display.textContent += e.target.getAttribute("id");
        no1 = +(display.textContent);
    })
})

let operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach((operatorBtn)=>{
    operatorBtn.addEventListener("click", (e)=>{
        operator = e.target.getAttribute("id");
        console.log(operator);
        display.textContent = "" 
    })
})


