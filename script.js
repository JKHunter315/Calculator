// selects all the numbers and operators
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators');
// gets the id of the Clear display and equals button. 
//Other methods must be done with loops
const clearDisplay = document.querySelector('#clear').id;
let result = document.querySelector('#equals')
let displayScreen = document.querySelector('#display-value');

//initialize an array to store the id tags on the numbers
let numberArray = [];

//initializearray for storing operator ids
let operatorArray = [];

//initialize array for storing the users numbers
let usersArray = [];

// for each number, its id is pushed into the number array
numbers.forEach(function(number) {
    numberArray.unshift(number.id);
    number.addEventListener('click', function(e) {
        usersArray.push(number.id);
    });
});

numberArray.sort(); //sorts array so index matches number

// adds operator ids to array 
operators.forEach(function (operator) {
    operatorArray.push(operator.id);
    operator.addEventListener('click', function(e) {
        let userFirstOpArr = usersArray.join(''); // joins the strings together
        let userNum1 = Number(userFirstOpArr); //turns them into a number
        usersArray = []; //resets the numbers the user chooses 
        let thisOp = operator.id; // declares operator id

        result.addEventListener('click', function(e) { 
            let userSecondOpArr = usersArray.join(''); //performs s
            let userNum2 = Number(userSecondOpArr, 10);
            let result = giveResult(thisOp, userNum1, userNum2);
            console.log(result);
            usersArray = [];
        });
    });
});

function add(numA, numB) {
    return numA + numB;
}
function subtract(numA, numB) {
    return numA - numB;
}
function multiply(numA, numB) {
    return numA * numB;
}
function divide(numA, numB) {
    return numA / numB;
}

function giveResult(operator,numA, numB) {
    if (operator == "plus") {
        let addition = add(numA, numB);
        return addition;
    } else if (operator == "minus") {
        let minus = subtract(numA, numB);
        return minus;
    } else if (operator ==  "multiply") {
        let times = multiply(numA, numB);
        return times;
    } else if (operator == "divide") {
        let divided = divide(numA, numB);
        return divided;
    }
}