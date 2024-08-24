'use strict';

//Selecting Element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const newGameBtn=document.querySelector('.btn--new')
const rollBtn=document.querySelector('.btn--roll')
const holdBtn=document.querySelector('.btn--hold')
//setting values
score0El.textContent = 0;
score1El.textContent = 0;
diceImage.classList.add('dice-hidden');

//functions
function generateDice() {
  return Math.floor(Math.random() * 6 + 1);
}

// events 
rollBtn.addEventListener('click',function(){
    const diceNumber=generateDice()
    // console.log(diceNumber);
    diceImage.src=`dice-${diceNumber}.png`
    diceImage.classList.remove('dice-hidden')
    
})
