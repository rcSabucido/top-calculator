function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b ;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operand) {
    let result = 0;
    switch(operand) {
        case "+":
            result += add(a, b);
            break;
        case "-":
            result += subtract(a, b);
            break;
        case "-":
            result += multiply(a, b);
            break;
        case "/":
            result += divide(a, b);   
    }
    return result;
}

let num1 = 0;
let operand = "";
let num2 = 0;
const numBtns = document.querySelectorAll(".num-btns");
const opBtns = document.querySelectorAll(".op-btns");
const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
let accumulate = "";
let topCurrent = "";

numBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        accumulate += event.target.textContent;
        bottomDisplay.textContent = accumulate;     
    });
})

opBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        topCurrent += accumulate + event.target.textContent;
        topDisplay.textContent = topCurrent;
        accumulate = "";
    })
})

