const number = Math.floor(Math.random() * 20) +1;
console.log(number);
let score = 20;
let highScore = 0;
const highscoreTag = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const question = document.querySelector('.number');
const scoreField = document.querySelector('.score')
const again = document.querySelector('.again')
const guess = document.querySelector('.guess');
checkBtn.addEventListener('click', function () {
    const userGuess = guess.value;
    if (userGuess !== '') {
        if (Number(userGuess) === number) {
            message.textContent = '🎉 Correct Number!';
            body.style.backgroundColor = '#60b347';
            question.textContent = number;
            question.style.width = '200px';
            highScore = score > highScore ? score: highScore;
            highscoreTag.innerText = highScore;
        }
        else if (Number(userGuess) < number) {
            if (score > 1) {
            message.textContent = '📈 Too low';
            score -= 1;
            scoreField.textContent = `${score}`
            }
            else {
                message.textContent = '💥 You lost the game';
                
            }
        }
        else {
            if (score > 1) {
            message.textContent = '📉 Too high'
            score -= 1;
            scoreField.textContent = `${score}`
            }
            else {
                message.textContent = '💥 You lost the game';
            }
        }
    }
    else {
        message.textContent = '⛔ No number'
    }
})
again.addEventListener('click', function () {
    guess.value = '';
    body.style.backgroundColor = '#222';
    message.textContent = 'Start guessing...'
    score = 20;
    scoreField.textContent = `${score}`;
    question.textContent = '?';
    question.style.width = '15rem';
})
