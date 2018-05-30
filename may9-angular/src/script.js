// prompt ('I am a house');
const value = 5;

document.getElementById("test").innerHTML = 'I am a house';

//if the value is less than 10 display a warning

const warn = document.querySelector('#warning');

if (value < 10) {
  warn.innerHTML = "Warning: too low!"
}

const colors = ['red', 'blue', 'yellow', 'orange'];
let result = '';

//loop
colors.forEach(eachColor => {
  result = result + ' ' + eachColor;
})//loop

document.getElementById('colors').innerHTML = 'result';
