let num;
let num1 = 0;
let operator = 'none';
let usingOperator = false;

const digitArea = document.getElementById("digitarea");
const clearKeyBtn = document.getElementById("clearkey");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("division");

function numKey () {
    if (digitArea.innerHTML == "0") {
        digitArea.innerHTML = num;
        if (digitArea.innerHTML !== "0") {
        clearKeyBtn.innerHTML = "C";
        };
    } else if (operator !== "none" && !usingOperator) {
        digitArea.innerHTML = num;
        usingOperator = true;
        if (digitArea.innerHTML !== "0") {
        clearKeyBtn.innerHTML = "C";
    } else {
        digitArea.innerHTML = digitArea.innerHTML + `${num}`; 
    };
    } else {
        digitArea.innerHTML = digitArea.innerHTML + `${num}`; 
    };
};

function decimalKey() {
   if (!digitArea.innerHTML.includes(".")) {
    digitArea.innerHTML = digitArea.innerHTML + "."; 
   }
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
    usingOperator = false;
    } else {
       digitArea.innerHTML = 0;
       clearKeyBtn.innerHTML = "AC";
    };
};

function add() {
    addBtn.className = "oprbuttontoggled";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbutton";
    num1 = parseFloat(digitArea.innerHTML);
    operator = '+';
};

function subtract() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbuttontoggled";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbutton";
    num1 = parseFloat(digitArea.innerHTML);
    operator = '-'
};

function multiply() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbuttontoggled";
    divisionBtn.className = "oprbutton";
    num1 = parseFloat(digitArea.innerHTML);
    operator = '*'
};

function division() {
    addBtn.className = "oprbutton";
    subtractBtn.className = "oprbutton";
    multiplyBtn.className = "oprbutton";
    divisionBtn.className = "oprbuttontoggled";
    num1 = parseFloat(digitArea.innerHTML);
    operator = '/'
};