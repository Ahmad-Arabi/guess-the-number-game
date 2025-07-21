'use strict';
let answer = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bestScore = 0;

const message = document.querySelector('.message');
const body = document.querySelector('.body');
const guessNumber = document.querySelector('.number');
const currentScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Empty input
  if (!guess) {
    message.textContent = '😵 Please enter a guess!';
  }
  // input outside the specified range
  else if (guess > 20 || guess < 1) {
    document.querySelector('.between').style.color = 'red';
    document.querySelector('.between').style.fontSize = '3rem';
    document.querySelector('.between').style.right = '12rem';
    document.querySelector('.between').style.top = '40rem';
    message.textContent = ``;

    setTimeout(() => {
      message.textContent = 'guess again...';
      document.querySelector('.between').style.color = '';
      document.querySelector('.between').style.fontSize = '';
      document.querySelector('.between').style.right = '';
      document.querySelector('.between').style.top = '';
    }, 2000);
  }
  // input less than the answer
  else if (score > 1 && guess < answer) {
    message.textContent = `📉 Too low!`;
    currentScore.textContent = --score;
  }
  // input greater than the answer
  else if (score > 1 && guess > answer) {
    message.textContent = `📈 Too high!`;
    currentScore.textContent = --score;
  }
  // if input match the answer (won the game)
  else if (score > 1 && guess == answer) {
    message.textContent = `🎉 You won!`;
    body.style.backgroundColor = '#60b347';
    guessNumber.textContent = answer;
    guessNumber.style.width = '30rem';
    document.querySelector('.check').style.display = 'none';

    if (score > bestScore) {
      bestScore = score;
      highScore.textContent = bestScore;
    }
  }
  // didn't guess the number within 20 attempts
  else {
    message.textContent = `💔 You lost!`;
    currentScore.textContent = 0;
    body.style.backgroundColor = '#780C28';
    document.querySelector('.check').style.display = 'none';
  }
});

document.querySelector('.guess').addEventListener('keydown', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  //Empty input

  if (e.key === 'Enter') {
    if (!guess) {
      message.textContent = '😵 Please enter a guess!';
    }
    // input outside the specified range
    else if (guess > 20 || guess < 1) {
      document.querySelector('.between').style.color = 'red';
      document.querySelector('.between').style.fontSize = '3rem';
      document.querySelector('.between').style.right = '12rem';
      document.querySelector('.between').style.top = '40rem';
      message.textContent = ``;

      setTimeout(() => {
        message.textContent = 'guess again...';
        document.querySelector('.between').style.color = '';
        document.querySelector('.between').style.fontSize = '';
        document.querySelector('.between').style.right = '';
        document.querySelector('.between').style.top = '';
      }, 2000);
    }
    // input less than the answer
    else if (score > 1 && guess < answer) {
      message.textContent = `📉 Too low!`;
      currentScore.textContent = --score;
    }
    // input greater than the answer
    else if (score > 1 && guess > answer) {
      message.textContent = `📈 Too high!`;
      currentScore.textContent = --score;
    }
    // if input match the answer (won the game)
    else if (score > 1 && guess == answer) {
      message.textContent = `🎉 You won!`;
      body.style.backgroundColor = '#60b347';
      guessNumber.textContent = answer;
      guessNumber.style.width = '30rem';
      document.querySelector('.check').style.display = 'none';

      if (score > bestScore) {
        bestScore = score;
        highScore.textContent = bestScore;
      }
    }
    // didn't guess the number within 20 attempts
    else {
      message.textContent = `💔 You lost!`;
      currentScore.textContent = 0;
      body.style.backgroundColor = '#780C28';
      document.querySelector('.check').style.display = 'none';
    }
  }
});

//reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20 + 1);
  currentScore.textContent = score;
  body.style.backgroundColor = '#222';
  guessNumber.style.width = '15rem';
  message.textContent = 'Start guessing...';
  guessNumber.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
});
