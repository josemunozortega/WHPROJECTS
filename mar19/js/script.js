// document.getElementById('btn2').style.color = "red" ;
// document.getElementById('btn2').style.fontSize = "32px" ;

console.log("Here is my first console message");
console.info("This is info");
console.warn("Danger Will Robinson!");
console.error("uh uh uh. you did not say the magic words");

//Browser Alert
// alert('Here is my first popup');

//Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult); 

// Browser Prompt Box
// prompt("What is your name?");
// var userName = prompt("What is your name?");
// console.log(userName);

/* Variables
    must start with lowercase
    must start with a letter
    can contain underscore
    may use camelCasing
*/
var username;
var room1;
var userName;
var user_name;

//Math 
var age = 24;
var decade = 10;
var double = 2;
var divide = 4;
var newAge = (age + decade) * double / divide;
//PEMDAS matters!
console.log(newAge);
// var stringAge = "24";

//concatination
// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");
// alert('${firstName} ${lastName}');
/*
    or
alert(firstName + " " + lastname);
*/

/*
interpolation
    ${ variable }
*/

//prompt user
//for the make of vehicle
//year
//color
//confirm the result

//3 new variables
//formatting: color, year, make

// function getUserVehicle(){
// var carColor = prompt("what is ur vehicle's color?");
// var carYear = prompt ("what is the year of ur vehicle?");
// var carMake = prompt("what is the make of ur vehicle?");
// // alert('${carColor} ${carYear} ${carMake}');
// var result = carColor + ", " + carYear + ", " + carMake;
// alert(result);
// }

// function primaryUser(){
//     var first = prompt("what is your first name?");
//     var last = prompt("what is your last name?");
//     var place = prompt("where were you born");

//     document.getElementById("primaryUser").innerHTML = first + " " + last + ", born in" + place;

// }

function secondaryUser(){
    var third = prompt("favorite show?");
    var fourth = prompt("favorite movie?");
    var fifth = prompt("favorite place");

    document.getElementById("secondaryUser").innerHTML = `${third} ${fourth} ${fifth}`;
}

function thirdUser(){
    var boo = prompt("put random text");
    var lol = prompt("did u put random text");
    var sure = prompt("Good....Good");

    document.getElementById("thirdUser").innerHTML = `${boo} ${lol} ${sure}`;
}

function tobeOrnottobe(){
    var be = prompt("write something from hamlet");
    var or = prompt("follow instructions from last prompt");
    var not = prompt("Good....join the empire");

    document.getElementById('tobeOrnottobe').style.color = "purple";
    document.getElementById('tobeOrnottobe').style.fontSize = "32px";
    document.getElementById('tobeOrnottobe').style.backgroundColor = "black";

    document.getElementById("tobeOrnottobe").innerHTML = `${be} ${or} ${not}`;
}
/*
function theme(){
    document.getElementById('theme').style.color = "purple";
    document.getElementById('theme').style.fontSize = "32px";
    document.getElementById('theme').style.backgroundColor = "black";
}
*/
