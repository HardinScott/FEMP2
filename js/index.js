let numOne = "0";
let numTwo = "";
let operator = 0;
let display = null;

function init(){
    document.getElementsByClassName("button-two")[0].addEventListener('click', clearButton);
    document.getElementsByClassName("backspace")[0].addEventListener('click', backSpace);
    let holder = document.getElementsByClassName("num-button");
    for(let i = 0; i < holder.length; i++){
        holder[i].addEventListener('click', numButton)
    }
    holder = document.getElementsByClassName("manipulator-button");
    for(let i = 0; i < holder.length; i++){
        holder[i].addEventListener('click', manipulatorButton)
    }
    display = document.getElementsByClassName("calc-display")[0];
    display.innerHTML = numOne;
}
function clearButton(){
    numOne = "0";
    numTwo = "0";
    operator = 0;
    display.innerHTML = numOne
}

function backSpace(){
    if(operator === 0){
        if(parseInt(numOne) < 10){
            numOne = "0";
        }
        else {
            numOne = numOne.slice(0, -1);
        }
        display.innerHTML = numOne;
    }
    else{
        if(parseInt(numTwo) < 10){
            numTwo = "0";
        }
        else {
            numTwo = numTwo.slice(0, -1);
        }
        display.innerHTML = numTwo;
    }
}

function numButton(){
    if(operator === 0){
        if(parseInt(numOne) > 0) {
            numOne = numOne.concat(this.innerHTML.trim());
        }
        else{
            numOne = this.innerHTML.trim();
        }
        display.innerHTML = numOne;
    }
    else{
        if(parseInt(numTwo) > 0) {
            numTwo = numTwo.concat(this.innerHTML.trim());
        }
        else{
            numTwo = this.innerHTML.trim();
        }
        display.innerHTML = numTwo;
    }
}

function manipulatorButton(){
    switch(this.innerHTML.trim()){
        case "/":
            operator = 1;
            break;
        case "x":
            operator = 2;
            break;
        case "-":
            operator = 3;
            break;
        case "+":
            operator = 4;
            break;
        default: //equals
            equal();
            break;
    }
    if(operator > 0){
        display.innerHTML = numTwo;
    }
}

function equal(){
    switch(operator){
        case 1:
            numOne = (parseInt(numOne) / parseInt(numTwo)).toString();
            break;
        case 2:
            numOne = (parseInt(numOne) * parseInt(numTwo)).toString();
            break;
        case 3:
            numOne = (parseInt(numOne) - parseInt(numTwo)).toString();
            break;
        case 4:
            numOne = (parseInt(numOne) + parseInt(numTwo)).toString();
            break;
        default:
            break;
    }
    operator = 0;
    numTwo = "";
    display.innerHTML = numOne;
}