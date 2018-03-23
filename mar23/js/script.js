function getUserName() {
    var username = prompt("What is your first name?");
    var result = username;
    alert(username);

    document.getElementById('welcome').innerHTML = `${username}` + ", ";
}

function firstButton() {
    document.getElementById('words').style.color = "blue";
    

    // var font = document.getElementById('words'); Wrong
    // font.classList.toggle('words');  Wrong
}