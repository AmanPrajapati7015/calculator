const addition = (a, b) => (+a)+(+b);
const subtraction = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b)=>{
    if (b == 0) return "Can't divide by 0!";
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
    if (operator == undefined){
        display.textContent ="give an operator!";
    }
    else if (display.textContent == ''){
        alert('give another operand!');
    }
    else{
        no2 = +(display.textContent);
        let result =  operate(operator, no1, no2);
        display.textContent= result;
        no1Display.textContent="";
        no1 = undefined;
    }
}

const display = document.querySelector('.display-text');
const no1Display = document.querySelector(".no1");

const digits = Array.from(document.querySelectorAll('.digit'));
digits.forEach((digitBtn)=>{
    digitBtn.addEventListener("click", (e)=>{
        display.textContent += e.target.getAttribute("id");
    })
})

const pointBtn = document.querySelector(".point");
pointBtn.addEventListener("click", ()=>{
    if (display.textContent.includes(".")) return ;
    display.textContent += "."
})

const operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach((operatorBtn)=>{
    operatorBtn.addEventListener("click", (e)=>{
        if (no1 && operator){
            let result = operate(operator, no1, +(display.textContent));
            no1 = result;
        }
        else{
            no1 = +(display.textContent)
        }
        operator = e.target.getAttribute("id");
        display.textContent = "" ;
        no1Display.textContent = `${no1} ${operator}`;
    })
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", getResult);

const clear = document.querySelector("#ac");
clear.addEventListener("click", ()=>{
    no1 = undefined;
    no2 = undefined;
    operator = undefined;
    display.textContent = "";
    no1Display.textContent = '';
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", ()=>{
    let l = display.textContent.length -1;
    display.textContent = display.textContent.slice(0, l);
})