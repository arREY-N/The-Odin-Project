const digits = document.querySelector(".digits");
const opts = document.querySelector(".operations");
let digit = 1;
const size = 40 / 3;
digits.setAttribute("style", "display: flex; flex-direction: column;")
opts.setAttribute("style", "display: flex; flex-direction: row;")

const values = [];

const display = document.querySelector(".display");
display.setAttribute("style", "border: 1px solid black; margin: 0; width: 100%; font-size: 30px; height: 65px; padding: 15px; box-sizing: border-box; display: flex; flex-direction: row;");

const user = document.createElement("div");
const equation = document.createElement("div");

display.append(user);
display.append(equation);

equation.setAttribute("style", "flex: 1.5; text-align: center;")
user.setAttribute("style", "flex: 1; text-align: center;")
user.textContent = "";


for(let i = 0; i < 3; i++){
    const rowDigits = document.createElement("div");
    rowDigits.setAttribute("style", "display: flex; flex-direction: row; flex: 1;")
    digits.appendChild(rowDigits);
    for(let j = 0; j < 3; j++){
        const num = document.createElement("button");
        num.classList.add("num" + digit);
        num.setAttribute("style", "flex: 1; margin: 10px; font-size: 30px");
        num.setAttribute("value", "" + digit)
        num.style.height = size + 'vh';
        rowDigits.append(num);
        num.textContent = "" + digit;
        digit++;
    }
}

const num = document.createElement("button");
num.classList.add("num10");
digits.append(num);
num.setAttribute("style", "margin: 10px; font-size: 30px;");
num.setAttribute("value", "0");
num.style.height = size + 'vh';
num.textContent = "0";
digit++;

const add = document.createElement("button");
const sub = document.createElement("button");
const mul = document.createElement("button");
const dvd = document.createElement("button");
const equ = document.createElement("button");

opts.appendChild(add);
opts.appendChild(sub);
opts.appendChild(mul);
opts.appendChild(dvd);
opts.appendChild(equ);

add.textContent = "+";
sub.textContent = "-";
mul.textContent = "*";
dvd.textContent = "/";
equ.textContent = "=";

add.value = "+";
sub.value = "-";
mul.value = "*";
dvd.value = "/";
equ.value = "=";

equ.classList.add("operate");

[add, sub, mul, dvd, equ].forEach(button => {
    button.style.flex = "1";
    button.style.margin = "10px";
    button.style.height = size + 'vh';
    button.style.fontSize = "30px";
})

const buttons = document.querySelectorAll("[class^='num']");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(!/^\d+$/.test(user.textContent)){
            user.textContent = "";    
        }
        if(!/^\d+$/.test(equation.textContent)){
            equation.textContent = "";    
        }
        const buttonValue = button.value;
        console.log(buttonValue);
        user.textContent += buttonValue;
    })
});

let optValue = ' ';

[add, sub, mul, dvd].forEach((operation) => {
    operation.addEventListener("click", () => {
        const storeValue = user.textContent.replace(/\D/g,'').trim();
        values[0] = storeValue;
        console.log(values);
        user.textContent = " ";
        optValue = operation.value;
        console.log(optValue);
        user.textContent = (" " + optValue + " ");
    })
});

const equal = opts.querySelector(".operate");

equal.addEventListener("click", () => {
    const storeValue = display.textContent.replace(/\D/g,'').trim();
    values[1] = storeValue;
    switch(optValue){
        case '+':
            user.textContent = " ";
            console.log("value 1: " + values[0]);
            console.log("value 2: " + values[1]);
            user.textContent = "Equation: "
            equation.textContent = values[0] + " + " + values[1] + " = " + (parseInt(values[0]) + parseInt(values[1]) + " ");
            break;
        case '-':
            user.textContent = " ";
            console.log("value 1: " + values[0]);
            console.log("value 2: " + values[1]);  
            user.textContent = "Equation: "
            equation.textContent = values[0] + " - " + values[1] + " = " + (parseInt(values[0]) - parseInt(values[1]) + " ");
            break;
        case '*':
            user.textContent = " ";
            console.log("value 1: " + values[0]);
            console.log("value 2: " + values[1]);
            user.textContent = "Equation: "
            user.textContent = "Equation: "  
            equation.textContent = values[0] + " * " + values[1] + " = " + (parseInt(values[0]) * parseInt(values[1]) + " ");
            break;
        case '/':
            user.textContent = " ";
            console.log("value 1: " + values[0]);
            console.log("value 2: " + values[1]);  
            user.textContent = "Equation: "
            equation.textContent = values[0] + " / " + values[1] + " = " + (parseInt(values[0]) / parseInt(values[1]) + " ");
            break;
    }
});