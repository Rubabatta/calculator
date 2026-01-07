
const display = document.querySelector('.display');


const numberButtons = document.querySelectorAll(
  '.zero button, .one button, .two button, .three button, .four button, .five button, .six button, .seven button, .eight button, .nine button'
);


const plusBtn = document.querySelector('.plus button');
const minusBtn = document.querySelector('.minus button');
const multiplyBtn = document.querySelector('.multiply button');
const divideBtn = document.querySelector('.divide button');


const equalBtn = document.querySelector('.equal button');
const clearBtn = document.querySelector('.ac button');
const dotBtn = document.querySelector('.dot button');

let currentInput = "";


numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        currentInput += button.innerText;
        display.innerText = currentInput;
    });
});


[plusBtn, minusBtn, multiplyBtn, divideBtn].forEach(function(button){
    button.addEventListener("click", function(){
        currentInput += " " + button.innerText + " ";
        display.innerText = currentInput;
    });
});


dotBtn.addEventListener("click", function(){
    currentInput += ".";
    display.innerText = currentInput;
});


clearBtn.addEventListener("click", function(){
    currentInput = "";
    display.innerText = "0";
});


equalBtn.addEventListener("click", function(){
    
    let expression = currentInput.replace("X", "*");
    try {
        display.innerText = eval(expression);
        currentInput = display.innerText; 
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
});
