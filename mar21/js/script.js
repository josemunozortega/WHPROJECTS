function welcome() {
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

// welcome();

function fireworks() {
    document.getElementById('h1').style.backgroundImage = "url('../img/ba-large-white-firework-gif-pic.gif')";
    document.getElementById('h1').style.color = "blue";
    toggleColor();
    toggleFontSize();

}

function toggleColor() {
    // document.body.classList.add('colorize'); /* add or toggle*/
    document.body.classList.toggle('colorize');
}

function toggleFontSize() {
    // document.body.classList.toggle('font'); 
    var myh1 = document.getElementById('h1');
    myh1.classList.toggle('font');
}