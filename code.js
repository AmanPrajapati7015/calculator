const addition = (a, b) => (+a)+(+b);
const subtraction = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b)=>{
    if (b == 0) return "division by Zero";
    return a/b;
};

console.log(addition(6,7));
console.log(subtraction(3,7));
console.log(multiply(3,7));
console.log(divide(3,0));
console.log(divide(22,7));


