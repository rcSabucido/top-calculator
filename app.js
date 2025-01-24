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
        case "×":
            result += multiply(a, b);
            break;
        case "÷":
            result += divide(a, b);   
    }
    return result;
}

function clear() {
    num1 = 0;
    operand = "";
    num2 = 0;
    newArr = [];
    accumulate = "";
    topCurrent = "";
    bottomDisplay.textContent = "";
    topDisplay.textContent = "";
}

function deleteLast() {
    accumulate = accumulate.slice(0, -1);
    bottomDisplay.textContent = accumulate;
}

let num1 = 0;
let operand = "";
let num2 = 0;
let newArr = [];
const numBtns = document.querySelectorAll(".num-btns");
const opBtns = document.querySelectorAll(".op-btns");
const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".delete-btn");
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
        const operator = event.target.textContent;
        if (operator === "=") {
            if (topCurrent.trim() !== "" && /[+\-×÷]/.test(topCurrent) && accumulate !== "") {
                topCurrent += accumulate + operator;
                newArr = topCurrent.split(/([+\-×÷])/);
                num1 = parseFloat(newArr[0]);
                operand = newArr[1];
                num2 = parseFloat(newArr[2]);
                if ((num1 < 1 || num2 < 1) && operand === "÷") {
                    alert("Dawg you can't divide by zero (>_<)");
                } else {
                    accumulate = operate(num1, num2, operand);
                    bottomDisplay.textContent = accumulate;
                    topDisplay.textContent = topCurrent;
                    topCurrent = "";
                }
            } else {
                return;
            }
        } else {
            if (topCurrent.trim() !== "" && /[+\-×÷]/.test(topCurrent) && accumulate !== "") {
                newArr = topCurrent.split(/([+\-×÷])/);
                num1 = parseFloat(newArr[0]);
                operand = newArr[1];
                num2 = parseFloat(accumulate);
                if ((num1 < 1 || num2 < 1) && operand === "÷") {
                    alert("Dawg you can't divide by zero (>_<)");
                } else {
                    accumulate = operate(num1, num2, operand);
                    bottomDisplay.textContent = accumulate;
                    topCurrent = accumulate;
                    topDisplay.textContent = topCurrent;
                    accumulate = "";
                }
            }
            topCurrent += accumulate + operator;
            topDisplay.textContent = topCurrent;
            accumulate = "";
        }
    })
})

clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", deleteLast);
