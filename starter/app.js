/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scroes, roundScore, activePlayer, gamePlaying;

init();

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  
}



document.querySelector('.btn-roll').addEventListener('mousedown',function(){
  if(!gamePlaying) return;
    //1.Random Number
    var dice = Math.floor(Math.random()*6)+1;

    //2.Display Result
    var diceDom = document.querySelector('.dice');
    
    diceDom.style.display = 'block';
    
    
    diceDom.animate([
        // keyframes
        { transform: 'translateX(-20px)' },
        { transform: 'translateY(-20px)' },
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(120deg)' },
        { transform: 'translateY(-45px)' },
        { transform: 'translateX(-100px)' },
        { transform: 'translateX(-60px)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateX(-100px)' },
        { transform: 'translateY(-10px)' },
        { transform: 'rotate(-45deg)' },
        { transform: 'rotate(-120deg)' }
        
      ], { 
        // timing options
        duration: 750,
        
      });
      diceDom.src = 'dice-'+dice+'.png';
      if( dice !== 1 ){
        roundScore += dice;
        upScore();
        
      }else{
        
        nextPlayer();
        
        
        /* document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active'); */
     
      }
   
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;

});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(!gamePlaying) return;
  //Add current score to global score
  scores[activePlayer] += roundScore;
  //Update the UI
  document.getElementById('score-' + activePlayer).textContent = ''+scores[activePlayer];

  //Check if player won the game
  if(scores[activePlayer] >=100){
    gamePlaying = false;
    document.querySelector('#name-'+activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    winnerDeclaration();
  }else{
    nextPlayer();
  }


});

function nextPlayer(){
  document.querySelector('#current-'+ activePlayer).textContent = '0';
  activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  
  roundScore = 0;
}

document.querySelector('.btn-new').addEventListener('mousedown',init);

function upScore(){
    var score = document.querySelector('#current-'+activePlayer);
    score.style.fontSize  = "55px;";
    
    score.animate([
        // keyframes

        { transform: 'translateY(2px)' },
        { transform: 'translateY(-2px)'},
        { transform: 'translateY(-3px)' },
        { transform: 'translateY(3px)' },
        { transform: 'translateY(1px)' },
        { transform: 'translateY(-1px)' },
        { transform: 'translateY(-3px)' },
        { transform: 'translateY(3px)' },
        { transform: 'translateY(-1px)' },
        { transform: 'translateY(2px)' },
        { transform: 'translateY(2px)' }
        
        
      ], { 
        // timing options
        duration: 750,
      });
      
}


function winnerDeclaration(){
  var winnerDec = document.querySelector('#name-'+activePlayer);
  winnerDec.animate([
      // keyframes
      { transform: 'translate(1px, 1px)', fontSize: '50px' },
      { transform: 'translate(-1px, -2px)', fontSize: '50px' },
      { transform: 'translate(-3px, 0px)' , fontSize: '50px'},
      { transform: 'translate(3px, 2px)' , fontSize: '50px' },
      { transform: 'translate(1px, -1px)' , fontSize: '50px' },
      { transform: 'translate(-1px, 2px)' , fontSize: '50px' },
      { transform: 'translate(-3px, 1px)' , fontSize: '50px' },
      { transform: 'translate(3px, 1px)' , fontSize: '50px' },
      { transform: 'translate(-1px, -1px)' , fontSize: '50px' },
      { transform: 'translate(1px, 2px)' ,fontSize: '50px' },
      { transform: 'translate(1px, -2px)' , fontSize: '50px'}         
    ], { 
      // timing options
      duration: 750,
    });      
  }







/* document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' +  dice + '</em>'; */
/* var x = document.querySelector('#current-'+ activePlayer).textContent; */








