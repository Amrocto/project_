'use strict'

function showFirstMessage(){
    console.log('hello');
}

showFirstMessage();

function showFirstMessage2(text){
    console.log(text);
}

showFirstMessage2("hi!");

let a=50
function rewriteValue(){
    a=20
};
rewriteValue();
console.log(a);
// => 20

let a=50
function rewriteValue(){
    let a=20
};
rewriteValue();
console.log(a);
// => 50

//function declaration
function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));
// => 7


//function experession 
const logger = function() {
    console.log("hello");
};

logger();

//стрелочные функции 
const calc = (a, b) => a + b;
const sqr = a => a*a;

const calc = (a, b) => { return a + b } ;




//делаем функцию универсальной
const usdCurr=99;
const eurCurr=110;
const discount = 0.9;
function convert(amount, curr)
{
    // console.log (amount*curr);
    return amount*curr;
}

function promotion(result) {
    console.log(result * discount);
}

// convert(500, usdCurr);
// convert(100, eurCurr);
promotion(convert(400, eurCurr));


const randomWord ="hello";
console.log(randomWord[2]);
console.log(randomWord.toUpperCase());

const fruit ="Some fruit";
console.log(fruit.indexOf("Fruit"));

const logg ="Hello World!";
console.log(logg.slice(-6,-1));
console.log(logg.substring(3,7)); 
console.log(logg.substring(-6,-1)); // не работает
console.log(logg.substr(7,5)); // указывыаем длину отрезка, которую вырезаем

const num = 12.9;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}

const f = createFunction();
console.log(f(3, 4)); // 7


