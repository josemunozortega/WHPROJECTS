function userStr(evt){
    console.log(searchBox.value);
    // SWvvxUy6Ubw6MWFTB3_tFoGPQUz_V1VP   Client id ==> get line of code underneath this one from Github/Matt  
    getReq('http://api.github.com/search/users?q=${searchBox.value{access_token=${clientId}')
    // if(
        // evt.key !== 'undefined' &&
        // evt.key !== 'Backspace' &&
        // evt.key !== 'Tab'
    // )
    // str += evt.key;

    // console.log(str, searchBox.value);
    // getCharacter(userSearch);
}