// look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}

// - Write a Function Expression
let addOne = function (n) {
  return n + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (n) => n + 1; 

// - Write an Arrow Function with curly brackets

let addOne = (n) => {
  return n+1;
}

// - Execute the function

addOne(99);

// - Execute the function and store the return value in a variable.
let returnAddOne = addOne(99);

// - What is the typeof returnValue
typeof returnAddOne // 'number'

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(n) {
  return n - 1;
}

// - Write a Function Expression

let substractOne = function(n) {
  return n - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

substractOne = (n) => n-1;

// - Write an Arrow Function with curly brackets
substractOne = (n) =>{
  return n-1;
}

// - Execute the function
substractOne(10)

// - Execute the function and store the return value in a variable.
let returnSubstractOne = substractOne(10);

// - What is the typeof returnValue
typeof of returnSubstractOne is 'number'

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1 , num2) {
  return num1 + num2;
}
// - Write a Function Expression
let sum = function(num1 ,num2) {
  return num1 + num2;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (num1 ,num2) => num1 + num2;

// - Write an Arrow Function with curly brackets
let sum = (num1 + num2) => {
  return num1 + num2;
}
// - Execute the function
sum(5, 6);

// - Execute the function and store the return value in a variable
let returnSum = sum(9, 6);

// - What is the typeof returnValue
typeof returnSum is 'number'

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
  return n*n;
}
// - Write a Function Expression
let square = function(n) {
  return n*n;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n*n;

// - Write an Arrow Function with curly brackets
let square = (n) => {
  return n*n;
}
// - Execute the function
square(9);

// - Execute the function and store the return value in a variable
let returnSquare = square(9);

// - What is the typeof returnValue
"number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return true;
  }else{
    return false;
  }
}
// - Write a Function Expression

let isGreater = function(x, y) {
  if (x > y) {
    return true;
  }else{
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
// not possible

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  if (x > y) {
    return true;
  }else{
    return false;
  }
}

// - Execute the function
isGreater(500, 200);
// - Execute the function and store the return value in a variable
let returnIsGreater = isGreater(500, 200);
// - What is the typeof returnValue
'boolean'
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(n) {
  if (typeof n != Number) {
    return "not a number"
  }else if(n % 2 == 0) {
    return "Number is even"
  }else{
    return "Number is odd"
  }
}

// - Write an anonymous Function Expression
let oddOrEven = function(n) {
    if(n % 2 == 0) {
    return "Number is even"
  }else{
    return "Number is odd"
  }
}


// - Write an named Function Expression
let oddOrEven = function EvenOrOdd(n) {
  if(n % 2 == 0) {
  return "Number is even"
}else{
  return "Number is odd"
}
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => (n % 2 == 0)?("number is even"): ( "number is odd");

// - Write an Arrow Function with curly brackets
let oddOrEven = (n) => {
  if(n % 2 == 0) {
  return "Number is even"
}else{
  return "Number is odd"
}
}

// - Execute the function
oddOrEven(6);
// - Execute the function and store the return value in a variable
let returnOddOrEven = oddOrEven(6);
// - What is the typeof returnValue
string