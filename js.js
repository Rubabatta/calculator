// Display
const display = document.querySelector('.display');

// Number buttons
const numberButtons = document.querySelectorAll(
  '.zero button, .one button, .two button, .three button, .four button, .five button, .six button, .seven button, .eight button, .nine button'
);

// Operator buttons
const plusBtn = document.querySelector('.plus button');
const minusBtn = document.querySelector('.minus button');
const multiplyBtn = document.querySelector('.multiply button');
const divideBtn = document.querySelector('.divide button');

// Special buttons
const equalBtn = document.querySelector('.equal button');
const clearBtn = document.querySelector('.ac button');
const dotBtn = document.querySelector('.dot button');
const plusMinusBtn = document.querySelector('.plus-minus button');
const percentBtn = document.querySelector('.percent button');

let currentInput = "";

// Number buttons click
numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        currentInput += button.innerText;
        display.innerText = currentInput;
    });
});

// Operator buttons click
[plusBtn, minusBtn, multiplyBtn, divideBtn].forEach(function(button){
    button.addEventListener("click", function(){
        // prevent double operator
        if(currentInput && !currentInput.endsWith(" ")){
            currentInput += " " + button.innerText + " ";
            display.innerText = currentInput;
        }
    });
});

// Dot button click
dotBtn.addEventListener("click", function(){
    // prevent multiple dots in same number
    let parts = currentInput.split(/[\+\-\*\/ ]/);
    let lastNumber = parts[parts.length-1];
    if(!lastNumber.includes(".")){
        currentInput += ".";
        display.innerText = currentInput;
    }
});

// Clear button click
clearBtn.addEventListener("click", function(){
    currentInput = "";
    display.innerText = "0";
});

// Plus/Minus toggle
plusMinusBtn.addEventListener("click", function() {
    if(currentInput){
        let parts = currentInput.split(" ");
        let last = parts.pop();
        if(last.startsWith("-")){
            last = last.slice(1);
        } else {
            last = "-" + last;
        }
        parts.push(last);
        currentInput = parts.join(" ");
        display.innerText = currentInput;
    }
});

// Percent button
percentBtn.addEventListener("click", function() {
    if(currentInput){
        let parts = currentInput.split(" ");
        let last = parseFloat(parts.pop());
        last = last / 100;
        parts.push(last.toString());
        currentInput = parts.join(" ");
        display.innerText = currentInput;
    }
});

// Equal button
equalBtn.addEventListener("click", function(){
    let expression = currentInput.replace(/X/g, "*");
    try {
        display.innerText = eval(expression);
        currentInput = display.innerText; 
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
});
