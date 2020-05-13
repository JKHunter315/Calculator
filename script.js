// selects all the numbers and operators
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators');
// gets the id of the Clear display and equals button. 
//Other methods must be done with loops
let clearDisplay = document.querySelector('#clear');
let result = document.querySelector('#equals')
let displayScreen = document.querySelector('#display-value');

//initialize array for storing the users numbers
let usersArray = [];

let userNum = 0;
let chosenOp = '';

let userNumArr = [];
let userOpArr = [];
let userNumFinal = 0;
let displayNums = [];

// for each number, its id is pushed into the number array
numbers.forEach(function(number) {
    number.addEventListener('click', function(e) {
        usersArray.push(number.id);
    });
});

// adds operator ids to array 
operators.forEach(function (operator) {
    operator.addEventListener('click', findUserNum);
});
    
function findUserNum(e){
    let userFirstArr = usersArray.join(''); // joins the strings together
    userNum = Number(userFirstArr); //turns them into a number
    usersArray = []; //resets the numbers the user chooses 
    chosenOp = e.target.id; // declares operator id
    userNumArr.push(userNum); // pushes number into array
    userOpArr.push(chosenOp); // pushes operator into array

    }; 

result.addEventListener('click', calculate);

function calculate(e) {
    let userSecondArr = usersArray.join(''); //joins the numbers after last operator into string
    usersArray = [];
    userNumFinal = Number(userSecondArr); //turns it into a number
    userNumArr.push(userNumFinal); // pushes final num into array;
    if (userNumArr.length < 2) {
        let calculated = giveResult(userOpArr[0], userNumArr[0], userNumArr[1]);
        displayScreen.textContent = calculated;
    } else { 
        for (let i = 0; i < userNumArr.length - 1; i++) {
            calculated = giveResult(userOpArr[i], userNumArr[i], userNumArr[i+1]);
            userNumArr[i + 1] = calculated;
        }
    }
    calculated = userNumArr[userNumArr.length-1];
    console.log(calculated);
    displayScreen.textContent = calculated;
    clearNums();
}

clearDisplay.addEventListener('click', clearAll);

function clearAll(e) {
    userNumArr = [];
    userOpArr = [];
    chosenOp = '';
    usersArray = [];
    userNum = 0;
    userNumFinal = 0;
    calculated = 00;
    displayScreen.textContent = calculated;
}
        

function clearNums() {
    userNumArr = [];
    userOpArr = [];
    chosenOp = '';
}

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
        return times.toFixed(2);
    } else if (operator == "divide") {
        let divided = divide(numA, numB);
        return divided.toFixed(2);
    }
}

