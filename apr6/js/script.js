/**
 * MATH Object
 */

 //Integers - Whole Numbers
 //Floats - Decimals

 var wha = .1 * .2;
 //.02000000004
 var rounded = Math.round(wha);
 // .49 && below rounds up
 // .5 up rounds up

 var roundedUp = Math.ceil(0.0000000001);
 console.log(rounded, roundedUp);

 //Math.ceil(); 
 var roundedUp = Math.ceil(0.0000000001);

 //Math.floor();
 var roundedDown = Math.floor(0.99999999999);

 //Math.PI();
//  var pi = Math.PI();

 // Math.pow():
//  console.log( Math.pow(8,2) );

 //Math.sqrt();
//  console.log( Math.sqrt(64) );

 //Math.random();
//  console.log( Math.random() );


//  console.log('.round():'+rounded, '.ceil():'+roundedUp, '.floor():'+roundedDown, 'PI:'+pi);

/**
 * RANDOM NUMBER GENERATOR
 */

// var rand = Math.random();
// // rand = (rand * 10) + 1;
// rand = Math.floor(rand * 11); //this gives out whole number
// console.log( rand );

// function pickANum() {
//     var userNum = prompt('guess a number between 0 and 10');
//     checkNum(userNum);
// }
// pickANum();

// function pickAnotherNum(){
//     var userNum = prompt('guess again');
//     checkNum(userNum);
// }

// function checkNum(num) {
//     if(num < rand){
//         alert(num + ' is too low. Pick again');
//     }else if(num > rand){
//         alert(num + ' is too high. pick again')
//     }else{
//         alert(num + ' is the right number! you win!');
//     }

// }

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#submit');
var submitBtn = document.querySelector('#reset');
var userPickRes = document.querySelector('h1');


submitBtn.addEventListener('click', getUserPick);
submitBtn.addEventListener('click', getRandNum);

var rand;

function getRandNum(){
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
}
getRandNum();

// var rand = Math.random();
// rand = Math.floor(rand * 11);

function getUserPick() {
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
}
function checkUserPick(x){
        if(x < rand){
        printUserRes(x + ' is too low. Pick again');
    }else if(x > rand){
        printUserRes(x + ' is too high. pick again');
    }else{
        printUserRes(x + ' is the right number! you win!');
    }
}

function printUserRes(userRes) {
    userPickRes.innerHTML = userRes;
}

//add another button that will reset random number

