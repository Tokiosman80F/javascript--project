'use strict';

//Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceImage = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
//setting values
score0El.textContent = 0;
score1El.textContent = 0;
diceImage.classList.add('dice-hidden');
//global variable
const currentScore = [current0El, current1El];
const playerScore = [0, 0];
let totalCurrentScore = 0;
let activePlayer = 0;
//functions
function generateDice() {
  return Math.floor(Math.random() * 6 + 1);
}

// events
rollBtn.addEventListener('click', function () {
  const diceNumber = generateDice();
  // console.log(diceNumber);
  diceImage.src = `dice-${diceNumber}.png`;
  diceImage.classList.remove('dice-hidden');
  if (diceNumber === 1) {
    currentScore[activePlayer].textContent = 0;
    totalCurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else {
    totalCurrentScore += diceNumber;
    currentScore[activePlayer].textContent = totalCurrentScore;
  }
  console.log('Active player:', activePlayer);
});

holdBtn.addEventListener('click', function () {
  playerScore[activePlayer] += totalCurrentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = playerScore[activePlayer];
});
