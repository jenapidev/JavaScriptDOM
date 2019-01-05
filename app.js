/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var  scores, roundScore, activePlayer, gamePlaying, dices;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        //uses a random number
        dices[0] = Math.floor(Math.random() * 6) + 1;

        dices[1] = Math.floor(Math.random() * 6) + 1;
        
        //display results 
        var diceDOM0 = document.querySelector('.dice-0');
        var diceDOM1 = document.querySelector('.dice-1');

        diceDOM0.style.display = 'block';
        diceDOM1.style.display = 'block';

        diceDOM0.src = 'dice-' + dices[0] + '.png';
        diceDOM1.src = 'dice-' + dices[1] + '.png';

        //uses a random number
        
        
        //as the rules said, only IF the rolled number != 1 update round score... So we can say that
    
        if (dices[0] !== 1 && dices[1] !== 1) {
            
            //add to score
            roundScore += dices[0] + dices[1];

            document.querySelector('#current-' + activePlayer).textContent = roundScore;    

        }else {
            //next player's tourn
            nextPlayer();

            /* 
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
    
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display = 'none';
    
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            */
        }

        if (dices[0] === 6 && dices[1] === 6) {
            //Loses all his points 
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
        }
    } 
    
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-0').style.display = 'block';
    document.querySelector('.dice-1').style.display = 'block';


    //document.querySelector('.dice-0').style.display = 'none';
    //document.querySelector('.dice-1').style.display = 'none';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
        //we have to pass the CURRENT score to the GLOBAL score

        scores[activePlayer] += roundScore;

        var input = document.getElementById('final-score').value;

        var topScore;

        

        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if has won the game

        var input = document.getElementById('final-score').value;
        var topScore;

        if (input) {
            topScore = input;
        } else {
            topScore = 100;
        }

        if(scores[activePlayer] >= topScore) {
            document.getElementById('name-' + activePlayer).textContent = 'winner!'; 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        } else {
        //change the active player

        nextPlayer();
        
        
        /*
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        */ 
        }
    }
    
});

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    dices = [0, 0];

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'p1 global score';
    document.getElementById('name-1').textContent = 'p2 global score';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');document.querySelector('.player-0-panel').classList.add('active');

}