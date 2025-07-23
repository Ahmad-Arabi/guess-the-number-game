'use strict';
let answer = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bestScore = 0;

const body = document.querySelector('.body');
const guessNumber = document.querySelector('.number');
const currentScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelectorAll('.message').forEach(e => {
    e.textContent = message;
  });
};

const bodyBackground = function (color) {
  document.querySelector('.body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess =
    document.querySelector('.guess').value != ''
      ? Number(document.querySelector('.guess').value)
      : document.querySelector('.guess').value;
  console.log(guess);

  //Empty input
  if (guess === null || guess === '' || guess === undefined) {
    displayMessage('😵 Please enter a guess!');
  }
  // input outside the specified range
  else if (guess > 20 || guess < 1) {
    const rangeAlert = document.querySelector('.between');

    rangeAlert.classList.add('range-alert');
    displayMessage('');

    setTimeout(() => {
      displayMessage('guess again...');
      rangeAlert.classList.remove('range-alert');
    }, 2000);
  }
  // input less/greater than the answer
  else if (score > 1 && guess !== answer) {
    displayMessage(guess > answer ? '📈 Too high!' : '📉 Too low!');
    currentScore.textContent = --score;
  }

  // if input match the answer (won the game)
  else if (score > 1 && guess == answer) {
    displayMessage(`🎉 You won!`);
    bodyBackground('#60b347');
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
    displayMessage(`💔 You lost!`);
    currentScore.textContent = 0;
    bodyBackground('#780C28');
    document.querySelector('.check').style.display = 'none';
  }
});

document.querySelector('.guess').addEventListener('keydown', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  if (e.key === 'Enter') {
    //Empty input
    if (!guess) {
      displayMessage('😵 Please enter a guess!');
    }
    // input outside the specified range
    else if (guess > 20 || guess < 1) {
      const rangeAlert = document.querySelector('.between');

      rangeAlert.classList.add('range-alert');
      displayMessage('');

      setTimeout(() => {
        displayMessage('guess again...');
        rangeAlert.classList.remove('range-alert');
      }, 2000);
    }
    // input less/greater than the answer
    else if (score > 1 && guess !== answer) {
      displayMessage(guess > answer ? '📈 Too high!' : '📉 Too low!');
      currentScore.textContent = --score;
    }

    // if input match the answer (won the game)
    else if (score > 1 && guess == answer) {
      displayMessage(`🎉 You won!`);
      bodyBackground('#60b347');
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
      displayMessage(`💔 You lost!`);
      currentScore.textContent = 0;
      bodyBackground('#780C28');
      document.querySelector('.check').style.display = 'none';
    }
  }
});

//reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20 + 1);
  currentScore.textContent = score;
  bodyBackground('#222');
  displayMessage('Start guessing...');
  guessNumber.style.width = '15rem';
  guessNumber.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
});
