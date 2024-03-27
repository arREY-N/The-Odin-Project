const displayText = document.querySelector("#displayText");
const digitButton = document.querySelectorAll(".num");
const operationButton = document.querySelectorAll(".oprt");
const clear = document.querySelector(".clr");
const equal = document.querySelector(".solve");

let value = [];
let operation = " ";
let computing = true;

clear.addEventListener("click", reset);
equal.addEventListener("click", function(event){
    equate();
    clearArray();
    console.log("value.length > 1");
});

if(displayText.textContent == " "){
    disableOperation();
}

digitButton.forEach(button => {
    button.addEventListener("click", function(event) {
        enableOperation();

        if(computing == true){
            clearDisplay();   
            displayText.textContent += event.target.value;
            computing = false; 
        } else{
            displayText.textContent += event.target.value;
        }
    })
})

operationButton.forEach(button => {
    button.addEventListener("click", function(event) {
        computing = true;
        disableOperation();
        button.setAttribute("style", "background-color: #252525; color: white")
        
        if(value.length < 1){
            value.push(parseFloat(displayText.textContent));
            clearDisplay();
        } else{
            equate();
        }

        console.log(value);
        operation = event.target.value;
    })
})

function equate(){
    value.push(parseFloat(displayText.textContent));
    switch(operation){
        case "+":
            console.log("+");
            value[0] = parseFloat(value[0]) + parseFloat(value[value.length-1]);
            break;
        case "-":
            console.log("-");
            value[0] = parseFloat(value[0]) - parseFloat(value[value.length-1]);
            break;
        case "*":
            console.log("*");
            value[0] = parseFloat(value[0]) * parseFloat(value[value.length-1]);
            break;
        case "/":
            console.log("/");
            value[0] = parseFloat(value[0]) / parseFloat(value[value.length-1]);
            break;
    }

    if(!Number.isInteger(value[0])){
        displayText.textContent = value[0].toFixed(2);
    } else {
        displayText.textContent = value[0];
    }
    
    console.log(value);
    equal.disabled = true;
}

function reset(){
    clearDisplay();
    clearArray();
    console.log("All clear");
}

function clearDisplay(){
    console.log("Clear Display");
    displayText.textContent = " ";
}

function clearArray(){
    value = [];
}

function enableOperation(){
    operationButton.forEach(button =>{
        button.disabled = false;
        button.setAttribute("style", "background-color: buttonface;");
    })

    equal.disabled = false;
    equal.setAttribute("style", "background-color: buttonface;");
}

function disableOperation(){
    operationButton.forEach(button =>{
        button.disabled = true;
        button.setAttribute("style", "background-color: buttonface;")
    })

    equal.disabled = true;
    equal.setAttribute("style", "background-color: buttonface;");
}
