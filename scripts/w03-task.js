/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers()
{
    let num1=Number(document.querySelector('#add1').value);
    let num2=Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value=add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
let subtract=function (number1, number2)
{
    return number1 - number2;
}

let subtractNumbers = function ()
{
    let num1=Number(document.querySelector('#subtract1').value);
    let num2=Number(document.querySelector('#subtract2').value);
    document.querySelector('#product').value=multiply(num1, num2);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => 
{
    return number1 * number2;
}

let multiplyNumbers = () =>
{
    let num1=Number(document.querySelector('#factor1').value);
    let num2=Number(document.querySelector('#factor2').value);
    return multiply(num1, num2);
}

document.querySelector('#product').value=multiplyNumbers();

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers()
{
    let num1=Number(document.querySelector('#dividend').value);
    let num2=Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value=divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
