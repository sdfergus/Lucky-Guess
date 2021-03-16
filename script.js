'use strict';

// document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 25;

//Random generated number
const secretNum = Math.floor(Math.random() * 23) + 1;
document.querySelector('.number').textContent = secretNum;

// document.querySelector('.guess').value = 23;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.score').textContent++;
  } else if (guess < secretNum) {
    document.querySelector('.message').textContent = '⏬ Number too low!';
    document.querySelector('.score').textContent--;
  } else {
    document.querySelector('.message').textContent = '⏫ Number too high!';
    document.querySelector('.score').textContent--;
  }

  if (document.querySelector('.score').textContent === '0') {
    console.log('Game over!');
    document.querySelector('.message').textContent = 'GAME OVER!!';
  }
});

//Reminder: a function is just a value! Since it's just a value, it can be passed in another function as an argument; just like any other string or number
