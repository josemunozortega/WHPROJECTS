//this file works on search bar, and uploading whatever you type ==> if not finished get on github

// var githubUsers = document
/*var test = */(function(){
    // var inTheFunction = true;
    
    var outTheFunction = true;
    
    
    
    
    
    var githubUser = document.querySelector('main ul');
    var searchBox = document.querySelector('header input');
    var searchSubmit = document.querySelector('header button');
    searchSubmit.addEventListener('click', getSearchStr);
    // searchBox.addEventListener('keyup', getSearchStr);
    
    // var searchStr = '';
    
    function getSearchStr(){
        // return searchStr = searchBox.value;
    // getKeys();
    // var obj = getReq('js/github.json', getKeys);
    // console.log(githubSearch, clientId, clientSecret);
    var searchStr = searchBox.value;
    var githubUrl = `${githubSearch}$q=${searchStr}$client_id={}`;
    getReq(githubUrl, showUsers);
}

function showUsers(users){
    console.log(users);
    var user = `
    <li>
            <img src="" alt=""
            <h3></h3>
            </li>
            `;
            for(var i = 0; i < users)
        }
        
        function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 & req.status === 200){
            func(JSON.parse(req.responseText)); /*the word 'func' ==> getKeys, which is below*/
        }
    }
    req.send(null);
}

function getKeys(keys){
    githubSearch = keys.github_search;
    clientid = keys.client_id;
    clientSecret = keys.client_secret;
    // var searchStr = getSearchStr();
    // var url = `${keys.github_search}`;
    // console.log(keys);
    // console.log(url, searchStr);
}

getReq('js/github.json', getKeys);


}());