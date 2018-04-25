// console.log(searchBox);
searchBox.addEventListener('keypress', getUserSearch);

var userSearch = '';



var cardList = document.querySelector('main ul');

function cardListData(cards){
    for(var i = 0; i < cards.length; i++){
        var card = `
        <li>
            <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
            <h3>${cards.results[i].name}</h3>
        // cardList.innerHTML += cardList.push(cards[i]);
        </li>
        `;
        cardList.innerHTML += card;
    }
}

getReq('https://rickandmortyapi.com/api/character', cardListData);

function getCharacter(searchStr){
    console.log(getReq('https://rickandmortyapi.com/api/character', characterData));
}



function characterData(date){
    console.log(data);
    for(var i = 0; i < data.results.length; i++){
        console.log(data.results[i].name);
    }
}