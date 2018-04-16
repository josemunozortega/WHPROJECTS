function getUserName() {

    alert('Not all stories have happy endings. This epic quest will end in demise. Lose all hope now. Get ready to pick a side.');
    var name = prompt('Whose story will you listen to? The story of the warrior, wizard, or orc?');
    if(name == 'warrior'){        
        alert('A good path at the very least, but this story is not about you, and you have not been blessed.');
        var warrior = prompt('Type a name so that the warriors soul ever prolongs his legacy');
        alert('Weak name the warrior rejects you.');
    }else if(name == 'wizard'){
        var wizard = prompt('Are you sure to pick the intelligent path? The wizard is not a kind gentle soul.');
        alert('intelligence has great value, but the wizard does not give you his blessing');
    }else if(name == 'orc') {
        var orc = prompt('Are you sure you about this?');
        alert('This quest does not belong to orcs. Yet continue, and the orc race will exile you because of it. Continue at your own risk.');
    }

    var story = prompt('The story begins a great many years ago when an elven mage decided to go A-Wall and kill all of mother nature with the people in it. Did you get the blessing of path you have chosen? yes or no?');
    if(story == 'yes'){
        alert('Easter Egg!, keep going on this route to find true glory or tragedy from the story.');
    }else if(story == 'no'){
        alert('Seems like the story is continuing for you. Even though it should not. Only strong candidates can get this far.');
    }

    //insert var within each space with prompts to make it fun
    
    alert('A source of power calls to you. Whatever it is, its powerful, and in your grasp.')

    alert('The wicked mage killed many, among those his blood brother the wizard, and his closest friend the warrior. Power was the name of the game, and only those with power can stand up to live.');

    alert('The wizard carried a great staff, among the staff was a crystal called the Power Stone who only the most intelligent can carry. The wizard obtained this crystal deep in a wretched cave that put might and soul to the very limits of one, and could have not been achieved without the help of the warrior.');

    alert('With true jealousy from power being obtained by an impossible feat, yet done. The elven mage took the stone after deceiving the brother into thinking the warrior wanted this power for himself. The noble warrior dies by trickery, and his face ever plastered by fire and stick, never to be recognized by the public ever again.')


    alert('click Story to choose different path');
}