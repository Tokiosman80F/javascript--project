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

let currentScore, playerScore, playing, totalCurrentScore, activePlayer;

// Initialization function is to reset the game to it starting state
function init() {
  playing = true; // Game is active
  activePlayer = 0;
  totalCurrentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playerScore = [0, 0]; // Array to store player's total score
  currentScore = [current0El, current1El];
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceImage.classList.add('dice-hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

//Calling init to set up the game initially
init();

// function to handle player switching
function switching() {
  currentScore[activePlayer].textContent = 0;
  totalCurrentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// function to generate random dice roll (1-6)
function generateDice() {
  return Math.floor(Math.random() * 6 + 1);
}

// Event listener  for starting new game
newGameBtn.addEventListener('click', init);

//Event listen for rolling the dice
rollBtn.addEventListener('click', function () {
  if (playing) {
    const diceNumber = generateDice();
    diceImage.src = `dice-${diceNumber}.png`;
    diceImage.classList.remove('dice-hidden');
    if (diceNumber === 1) {
      switching();
    } else {
      totalCurrentScore += diceNumber;
      currentScore[activePlayer].textContent = totalCurrentScore;
      console.log('total current score:', totalCurrentScore);
    }
  }
});

//Event listener for holding the current score
holdBtn.addEventListener('click', function () {
  if (playing) {
    playerScore[activePlayer] += totalCurrentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      playerScore[activePlayer];

    if (playerScore[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switching();
    }
  }
});
