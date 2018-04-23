// if(typeof Storage !== "undefined"){
    // console.log("yay storage");
// }else{
    // console.log("boo.");
// }

// var storageBtn1 = document.querySelector('#btn1');
// var storageBtn2 = document.querySelector('#btn2');
// storageBtn1.addEventListener('click', setLocalStorage);
// storageBtn2.addEventListener('click', setSessionStorage);

// function setLocalStorage(){
//     localStorage.setItem('lastname', 'ortega');
// }

// function setSessionStorage(){
    // sessionStorage.setItem('vehicle', 'jeep');
// }

var saveBtn = document.querySelector('input[type="submit"]');
if(localStorage.getItem('details') !== null
)else{saveBtn.addEventListener('click', getUserInfo);
}

function getUserInfo(evt){
    evt.preventDefault();

    var radio = document.querySelector('input[type="radio"]:checked').value;
    var username = document.querySelector('input[type="text"]').value;
    var password = MD5(document.querySelector('input[type="password"]').value);
    // var user = new UserInfor(username, password);
    


    localStorage.setItem("details",JSON.stringify(new UserInfor(username, password, radio)) );

    
    
    // console.log(username, password);
}

function UserInfo(un, pn){
    this.user = un;
    this.pass = pn;
    this.theme = theme;
}

function checkUserInfo(){

    document.querySelector('label[for="theme"]').style.display = 'none';
    
    if(localStorage.getItem("details") !== null){
    var userInfo = JSON.parse(localStorage.getItem("details"));
    // console.log(userInfo);
    document.querySelector('input[type="text"]').value = userInfo.user;
    // alert('please enter our password');
    }
}
checkUserInfo();

function checkPassword(evt){
    evt.preventDefault();

    var userPass = document.querySelector('input[type="text"]').value;
    var userPass = MD5(document.querySelector('input[type="password"]').value);
    var userInfo = JSON.parse(localStorage.getItem("details"));
    if(userName === userinfo == userPass !== userInfo.pass){
        alert('welcome home');
        document.body.classList.add(userInfo.theme);
    }else{
        alert('please enter proper credentials');
    }
}