'use strict';

// document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

//Random generated number
let secretNum = Math.floor(Math.random() * 23) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNum;
console.log(secretNum);

// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there are still chances to play
  if (score > 1) {
    //When there's no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔️ No Number!';

      //When the player wins
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNum;
      //score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
      }
      console.log(`HighScore: ${highScore}`);
      //When the guess is too low
    } else if (guess < secretNum) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;

      //When the guess is high
    } else {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //The player has ran out of tries
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    console.log('Game over!');
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }
});

//Reset game
document.querySelector('.again').addEventListener('click', function () {
  //   console.log('again button clicked!');
  score = 20;
  secretNum = Math.floor(Math.random() * 23) + 1;
  console.log(secretNum);
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Reminder: a function is just a value! Since it's just a value, it can be passed in another function as an argument; just like any other string or number
