const addition = (a, b) => (+a)+(+b);
const subtraction = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b)=>{
    if (b == 0) return "OOPS";
    return a/b;
};

let no1;
let operator;
let no2;

let operate = function(operator, no1, no2){
    if (operator == "+") return addition(no1, no2);
    else if (operator == "-") return subtraction(no1, no2);
    else if (operator == "*") return multiply(no1, no2);
    else if (operator == "/") return divide(no1, no2);
    return "Not a valid operator"
}

const getResult = ()=>{
    if (operator== undefined){
        console.log("operator is not selected");
         display.textContent ="OOPS";
    }
    else{
        no2 = +(display.textContent);
        display.textContent=  operate(operator, no1, no2);
    }
}


const display = document.querySelector('.display-text');

let digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach((digitBtn)=>{
    digitBtn.addEventListener("click", (e)=>{
        display.textContent += e.target.getAttribute("id");
    })
})

let operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach((operatorBtn)=>{
    operatorBtn.addEventListener("click", (e)=>{
        no1 = +(display.textContent);
        operator = e.target.getAttribute("id");
        display.textContent = "" ;
    })
})

let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", getResult);

let clear = document.querySelector("#ac");
clear.addEventListener("click", ()=>{
    no1 = undefined;
    no2 = undefined;
    operator = undefined;
    display.textContent = "";
});

