function welcomeMsg(str) {

return 'Welcome' + str;
}


// consoleInfo('Joey');
console.log( welcomeMsg('Joey') )

function calcNums(x, y){
    // console.log(x + y);
    return x + y;
}

console.log( calcNums(3, 2));
//or
//console.log( 5 );  it'll recall it
var h3 = document.querySelector('h3');


function concatStrings(str1, str2){
    return str1 + " " + str2;
}

function getFirstname(){

    return prompt('What is ur first name?');

}

function getLastname() {
    return prompt('what is ur last name?');
}

user.textContent = concatStrings( getFirstname(), getLastname() );
//html.innerHTML = concatStrings( getFirstname(), getLastname() );

// function welcomeUser() {
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );

// }

// welcomeUser();

var span = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'bus driver', 'developer', 'cashier', 'plumber'];
var plurals = ['fish', 'monkey', 'shoes', 'cactii'];
var adjectives = ['hefty','withered', 'thirsty', 'enraged', 'slender'];
var numbers = [3, 22, 4, 37, 99];
console.log(spans, lengths);

for(var i = 0; i < spans.length; i++){
    console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
        // spans[i].style.color = 'red';
    // }
    var s = spans(i);
    
    switch(s.className){
        case 'occupation':
            // console.log( occupation[getRandNum(occupation.length)]);
            // spans[i].textContent = occupation[getRandNum(occupation.length)];
            setText(s.occupation);
            break;
        case 'plural':
            setText(s.plurals);
            // spans[i].style.color = 'red';
            // console.log( plural[getRandNum(occupation.length)]);
            // spans[i].textContent = plurals[getRandNum(plurals.length)];
            break;
        case 'adjective':
            setText(s.adjectives);
            // setText(spans[i], adjectives);
            // spans[i].style.color = 'green';
            break;
        case 'number':
            setText(s.numbers);
            // setText(spans[i], numbers);
            // spans[i].style.color = 'yellow'; 
            break;
        default:

    }
}

function getRandNum(){
    // console.log(num);
    // var rand = Math.random() + num;
    // var str = occupation
    // console.log(rand);
    return Math.floor(Math.random() + num);
}

function setText(currSpan, textArray){
    currSpan.textContent = testArray(getRandNum(testArray, length));
}