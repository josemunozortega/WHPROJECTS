// function getUserName() {
//     var name = prompt("what is your name?").split(" ");
//     // var splitUserName = username.split(" ");
//     // console.log(splitUserName);
//     outputUserName(username);
// }

// function outputUserName(nameArray) {
//     // console.log(nameArray);
//     // document.getElementById('firstname').innerHTML = nameArray[0];
//     // document.getElementById('lastname').innerHTML = nameArray [nameArray.length - 1]; /*this will get first and last word*/

//     for(var i = 0; i < nameArray.length; i++){
//         if( i == 0 ){
//             // console.log("we got the zeroth element!", nameArray[i]);
//             document.getElementById('firstname').innerHTML += nameArray[i] + " ";
//         }// }else{
//             // console.log("not the zeroth");
//         // }

//     }

// }

// getUserName();

/* 
Arrays
ABOVE
*/

// var cars = ["jeep", "subaru", "bmw"];
// console.log(cars[1]);
// console.log(cars.length);

// /* Push Method will add whatever is in the paranthesis*/
// cars.push("mustang");
// console.log(cars);

// /* will remove last item each and everytime*/
// cars.pop();
// console.log(cars);

// /*unshift method will add anything in the paranthesis with value of 0*/
// cars.unshift("chevy");

// /*splice will put and remove whatever number value with what's written inside paranthesis*/
// cars.splice(1, 1, "red", "green");

// cars.splice(1, 1, "grape");
// /*first number will replace/target whatever value u want*/

// cars.slice(1);
// console.log(cars);

// var movies = ["King Arthur", "Tomb Raider", "Fight Club", "Thor", "Star Wars"];

// movies.unshift("Die Hard");
// console.log(movies);

// movies.splice(3, 1, "Godfather I");

// movies.splice(4, 1, "Godfather II", "Godfather III");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// movies.slice(1);
// console.log(movies);

// movies.push("Jurassic Park");
// console.log(movies);



/*
IF / ELSE IF / ELSE
little section under
 */
// function getUserAge() {
//     var userage = parseInt(prompt("how old are you?"));

//     // and => &&
//     //or // (but lines are straight up)
//     if(userage < 21) {
//         console.log('not old enough');

//     }else if(userage > 21){
//         console.log('good to go, start browsing websites alcoholic drinks');
//     }

// }

// getUserAge();

// /**
//  * TERNARY OPERATOR
//  * setion under
//  */

//  function getAge() {
//      var age = prompt('What is ur age?');
//     (age >= 21) ? comsole.log('true') : console.log('false');
// }

//  getAge();



 // write a function and a prompt the user telling the user a "story" asking for 1 of 3 choices
 //each choice continues to their own function
//Simple Version:
//alerts, prompts, confirms
//if / else if / else
//Complex Version: 
//loops
//arrays

function getUserName() {

    /**
     * var warrior => variable
     * "warrior" => string
     * if(name == [could be variable or string placed here])
     */
    var name = prompt('Are you a warrior, wizard, or orc?');
    if(name == 'warrior'){
        var warrior = prompt('What is your name Warrior?');
        alert('weak name GAME OVER');
    }else if(name == 'wizard'){
        var wizard = prompt('What is your name Wizard?');
        alert('weak name GAME OVER');
    }else if(name == 'orc') {
        var orc = prompt('What is your name Orc?');
        alert('Orcs always die GAME OVER');
    }
    alert('click start here to choose different path');
}

// getUsername();

// function myFunction() {
// var text;
// var favDrink = prompt('What is your favorite cocktail drink?');
// switch (favDrink){
//     case "Maritini":
//     alert("Excellent!");
//     maritini();  <==Added a function to extend the prompts==>
//     break;
//     case "Vodka":
//     text = "Bad for the soul";
//     break;
//     case "Four Loko":
//     text = "Not a cocktail Drink";
//     break;
//     default:
//     alert("wrong choice");
//     break;
// }
// }

// function maritini() {
//     var why = prompt('Why?');
// }