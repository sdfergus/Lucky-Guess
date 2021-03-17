'use strict';

//Random generated number
let secretNum = Math.floor(Math.random() * 23) + 1;
let score = 20;
let highScore = 0;

//Refactored function created for all text content calls
const displayQuerySelector = function (type, message) {
  document.querySelector(type).textContent = message;
};

// document.querySelector('.number').textContent = secretNum;
//console.log(secretNum);

// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there are still chances to play
  if (score > 1) {
    //When there's no input
    if (!guess) {
      //document.querySelector('.message').textContent = '⛔️ No Number!';
      displayQuerySelector('.message', '⛔️ No Number!');

      //When the player wins
    } else if (guess === secretNum) {
      //   document.querySelector('.message').textContent = '🎉 Correct Number!';
      //   document.querySelector('.number').textContent = secretNum;
      //   //score++;
      //   document.querySelector('.score').textContent = score;

      displayQuerySelector('.message', '🎉 Correct Number!');
      displayQuerySelector('.number', secretNum);
      displayQuerySelector('.score', score);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //Only assign new highscore if latest winning score is greater
      if (score > highScore) {
        highScore = score;
        //document.querySelector('.highscore').textContent = highScore;
        displayQuerySelector('.highscore', highScore);
      }
      //console.log(`HighScore: ${highScore}`);

      //When the guess is too low
    } else if (guess < secretNum) {
      displayQuerySelector('.message', '📉 Too low!');
      score--;

      //document.querySelector('.score').textContent = score;
      displayQuerySelector('.score', score);

      //When the guess is high
    } else {
      //document.querySelector('.message').textContent = '📈 Too high!';
      displayQuerySelector('.message', '📈 Too high!');
      score--;

      //document.querySelector('.score').textContent = score;
      displayQuerySelector('.score', score);
    }

    //The player has ran out of tries
  } else {
    score--;
    //document.querySelector('.score').textContent = score;
    displayQuerySelector('.score', score);
    //console.log('Game over!');
    // document.querySelector('.message').textContent = '💥 You lost the game!';
    displayQuerySelector('.message', '💥 You lost the game!');
    document.querySelector('.check').disabled = true;
    document.querySelector('.check').style.backgroundColor = '#ccc';
    document.querySelector('.check').style.cursor = 'no-drop';
  }
});

//Reset entire game
document.querySelector('.again').addEventListener('click', function () {
  //console.log('again button clicked!');
  score = 20;
  secretNum = Math.floor(Math.random() * 23) + 1;
  //console.log(secretNum);
  displayQuerySelector('.number', '?');
  displayQuerySelector('.message', 'Start guessing...');
  displayQuerySelector('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});

//Reminder: a function is just a value! Since it's just a value, it can be passed in another function as an argument; just like any other string or number
