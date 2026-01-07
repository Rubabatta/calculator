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

let currentInput = "";

// Number click
numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        currentInput += button.innerText;
        display.innerText = currentInput;
    });
});

// Operator click
[plusBtn, minusBtn, multiplyBtn, divideBtn].forEach(function(button){
    button.addEventListener("click", function(){
        currentInput += " " + button.innerText + " ";
        display.innerText = currentInput;
    });
});

// Dot click
dotBtn.addEventListener("click", function(){
    currentInput += ".";
    display.innerText = currentInput;
});

// Clear click
clearBtn.addEventListener("click", function(){
    currentInput = "";
    display.innerText = "0";
});

// Equal click
equalBtn.addEventListener("click", function(){
    // Replace X with * for eval
    let expression = currentInput.replace("X", "*");
    try {
        display.innerText = eval(expression);
        currentInput = display.innerText; // result can be used for next calculation
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
});
