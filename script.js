'use strict';

let number = -1, actual_number = (Math.floor(Math.random() * Math.floor(20)) % 19) + 1,
  score = 20, high_score = 0;

document.querySelector('body').addEventListener('keypress', (input) => {
  if (input.key === 'Enter') play();
});

document.querySelector('.check').addEventListener('click', () => play());
document.querySelector('.again').addEventListener('click', () => reset());

const play = function() {
  number = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = logic(number);
  if (number === actual_number) {
    if (score > high_score)
      document.querySelector('.highscore').textContent = String(score);
    document.querySelector('.number').textContent = String(actual_number);
    high_score = score;
  }
};

const logic = function(number) {
  if (score <= 0) {
    document.querySelector('body').style.backgroundColor = '#F79862';
    return '😔 You Lost, Try Again!';
  }

  if (number < 1 || number > 20) {
    return '❗️ Numbers Between 1 & 20 only';
  } else if (number > actual_number) {
    score--;
    document.querySelector('.score').textContent = String(score);
    return '📈 Too High!';
  } else if (number < actual_number) {
    score--;
    document.querySelector('.score').textContent = String(score);
    return '📉 Too Low!';
  } else if (number === actual_number) {
    score--;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').style.backgroundColor = '#333';
    document.querySelector('.number').style.color = '#eee';
    document.querySelector('.score').textContent = String(score);
    return '🎉 Congratulations!';
  }
};

const reset = function() {
  number = -1;
  actual_number = (Math.floor(Math.random() * Math.floor(20)) % 19) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
};

