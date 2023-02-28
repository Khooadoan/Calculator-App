let num;
let num1 = 0;
let operator = 'none';
let num2 = 0;

const digitArea = document.getElementById("digitarea");
const clearKeyBtn = document.getElementById("clearkey");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");
let numKeyPressedAfterOperator = false;
let resultValue;

function numKey () {
    if (digitArea.innerHTML == "0") {
        digitArea.innerHTML = num;
        if (digitArea.innerHTML !== "0") {
        clearKeyBtn.innerHTML = "C";
        }
        if (num1) {
           numKeyPressedAfterOperator = true;
        };
    } else if(num1 && digitArea.innerHTML !== "0" && !numKeyPressedAfterOperator) {
        digitArea.innerHTML = num;
        numKeyPressedAfterOperator = true;
    } else if(digitArea.innerHTML.length < 15) {
        digitArea.innerHTML = digitArea.innerHTML + `${num}`;
    };
}

function decimalKey() {
   if (!digitArea.innerHTML.includes(".") && digitArea.innerHTML.length < 14) {
    digitArea.innerHTML = digitArea.innerHTML + "."; 
   };
};

function clearKey() {
    if (digitArea.innerHTML == "0") {
    digitArea.innerHTML = 0;
    num1 = 0;
    clearKeyBtn.innerHTML = "AC";
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbutton";
    operator = 'none';
    numKeyPressedAfterOperator = false;
    } else {
       digitArea.innerHTML = 0;
       clearKeyBtn.innerHTML = "AC";
       numKeyPressedAfterOperator = false;
    };
};

function add() {
    addBtn.className = "oprbuttontoggled";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbutton";
    if (operator == "none") {
    num1 = parseFloat(digitArea.innerHTML);
    }
    operator = '+';
};

function subtract() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbuttontoggled";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbutton";
    if (operator == "none") {
    num1 = parseFloat(digitArea.innerHTML);
    }
    operator = '-'
};

function multiply() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbuttontoggled";
    divisionBtn.className = "oprbutton";
    if (operator == "none") {
    num1 = parseFloat(digitArea.innerHTML);
    }
    operator = '*'
};

function division() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbuttontoggled";
    if (operator == "none") {
    num1 = parseFloat(digitArea.innerHTML);
    }
    operator = '/'
};

function result() {
    if (operator !== "none") {
        num2 = parseFloat(digitArea.innerHTML);
    };
    switch(operator) {
        case "+":
           resultValue = (num1 + num2);
           digitArea.innerHTML = resultValue;
           num1 = 0;
           clearKeyBtn.innerHTML = "AC";
           addBtn.className = "oprbutton";
           subtractBtn.className = "oprbutton";
           multiplyBtn.className = "oprbutton";
           divisionBtn.className = "oprbutton";
           operator = 'none';
           numKeyPressedAfterOperator = false;
        break;
        case "-":
           resultValue = (num1 - num2);
           digitArea.innerHTML = resultValue;
           num1 = 0;
           clearKeyBtn.innerHTML = "AC";
           addBtn.className = "oprbutton";
           subtractBtn.className = "oprbutton";
           multiplyBtn.className = "oprbutton";
           divisionBtn.className = "oprbutton";
           operator = 'none';
           numKeyPressedAfterOperator = false;
        break;
        case "*":
           resultValue = (num1 * num2);
           digitArea.innerHTML = resultValue;
           num1 = 0;
           clearKeyBtn.innerHTML = "AC";
           addBtn.className = "oprbutton";
           subtractBtn.className = "oprbutton";
           multiplyBtn.className = "oprbutton";
           divisionBtn.className = "oprbutton";
           operator = 'none';
           numKeyPressedAfterOperator = false;
        break;
        case "/":
           resultValue = (num1 / num2);
           digitArea.innerHTML = resultValue;
           num1 = 0;
           clearKeyBtn.innerHTML = "AC";
           addBtn.className = "oprbutton";
           subtractBtn.className = "oprbutton";
           multiplyBtn.className = "oprbutton";
           divisionBtn.className = "oprbutton";
           operator = 'none';
           numKeyPressedAfterOperator = false;
        break;
    }
}