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
const displayContainer = document.querySelector(".bottom-display");
let accumulate = "";

numBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        accumulate += event.target.textContent;
        displayContainer.textContent = accumulate;
    });
})

