var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');


// ! == not true
// for(var i = 0; i < paras.lenght; i++){
    // console.log(paras[i].classList.contains('para'));
    // if(1/*paras[i].classList.contains('para')*//*){
        // console.log('thats true');
    // }
// }


// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// == loose coparison
// === strict comparison

// var username = parseInt(prompt('pick a number'));

// if(!usernum){
// console.log(3 + usernum);
// }else{
    // console.log('please enter something');
// }

//HMLHttpRequest

// console.log(new XMLHttpRequest());


console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com');
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(req.responseText);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    console.log(data);
}


//check Higleys code in Github around these lines to pull back api unto page setup



