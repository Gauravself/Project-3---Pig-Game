'use strict';

//Selecting ID by querselector
const score0P1 = document.querySelector("#score--0");
//select ID by getelement
const score1P2 = document.getElementById("score--1");
const currScoreP1 = document.getElementById("current--0"); 
const currScoreP2 = document.getElementById("current--1");
const P0 = document.querySelector(".player--0");
const P1 = document.querySelector(".player--1");


const diceImg = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

//To store total score of both Player
const scores = [0,0];
let currentScore = 0;
//Active player is player 0 intially,used to change player
let activePlayer = 0;
let currPlaying = true;

//Reset Function
const resetGame = function(){
score0P1.textContent = 0;
score1P2.textContent = 0;
currentScore = 0;
diceImg.classList.add('hidden');
P0.classList.add("player--active");
P1.classList.remove("player--active");
currScoreP1.textContent = 0;
currScoreP2.textContent = 0;
document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
}
resetGame();

const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        //Switch to next Player
        currentScore = 0;
        activePlayer = activePlayer===0?1:0;
        //.classList.remove('player--active');
        P0.classList.toggle('player--active');
        P1.classList.toggle('player--active'); 
}
//Event listener for Dice roll click
btnRoll.addEventListener('click',function(){
    if(currPlaying){
    //1.Generate random dice roll
    const diceRoll = Math.trunc(Math.random()*6) + 1;
    //2.Display Dice Img
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceRoll}.png`;

    //3.Check for Dice roll = 1
    if(diceRoll===1){        
        switchPlayer();
    }
    else{
        //Add dice roll to current score
        currentScore+=diceRoll;
        //Select Player Dynamically
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //currScoreP1.textContent = currentScore;
    }
}
});

//Event Listener for Button New Game click
btnNew.addEventListener('click',resetGame);

//Event Listener for Button Hold Click
btnHold.addEventListener('click',function(){
    if(currPlaying){
    //1.Add current score to score of active Players
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2.Check score is >=100 if not switch player
    if(scores[activePlayer] >= 100){
        currPlaying = false; 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceImg.classList.add('hidden');       
    }
    else{ 
    switchPlayer();
    }
}
});