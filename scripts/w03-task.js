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
    document.querySelector('#difference').value=subtract(num1, num2);
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
    document.querySelector('#product').value=multiply(num1, num2);
    return multiply(num1, num2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

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
let today = new Date();
let thisYear=today.getFullYear();
document.getElementById('year').textContent=thisYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent=numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').textContent=numbersArray.filter(number => (number % 2) != 0);

/* Output Evens Only Array */
document.getElementById('evens').textContent=numbersArray.filter(number => (number % 2) == 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent=numbersArray.reduce((sum,number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent=numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
doubledArray=numbersArray.map(number => number * 2);
document.getElementById('sumOfMultiplied').textContent=doubledArray.reduce((sum,number) => sum + number);
