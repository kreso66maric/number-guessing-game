let modal = document.getElementById('modal');
let gameContainer = document.getElementById('game-container');
let modalBtn = document.getElementById('modal-btn');
let resetBtn = document.getElementById('reset-btn');
let numberGuess = document.getElementById('number-guess');
let message = document.getElementById('message');
let endMessage = document.getElementById('end-message');
let counterNumber = document.getElementById('counter-number');
let historyNumber = document.getElementById('history-number');
let answer = numberGuess.value;
let arr = [];

let tries = 10;
let secretNumber = Math.floor(Math.random() * 100 + 1);

function gameInit() {
    gameContainer.style.display = 'none';
    modal.style.display = '';
    endMessage.style.display = 'none';
    resetBtn.style.display = 'none';
    colorOfTries();
}

function gameReset() {
    gameContainer.style.display = "block";
    modal.style.display = 'none;'
    endMessage.style.display = 'none';
    resetBtn.style.display = 'none';
    tries = 10;
    secretNumber = Math.floor(Math.random() * 100 + 1);
    numberGuess.value = '';
    message.innerText = '';
    historyNumber.innerText = '';
    counterNumber.innerText = tries;
    counterNumber.classList.remove('red');
    counterNumber.classList.remove('orange');
    colorOfTries();
}


numberGuess.addEventListener('change', function() {
    numberCheck();
});

modalBtn.addEventListener('click', function() {
    gameContainer.style.display = 'block';
    modal.style.display = 'none';
});

resetBtn.addEventListener('click', function() {
    gameReset();
});

counterNumber.innerText = tries;

function numberCheck() {
    if (numberGuess.value < secretNumber) {
        historyNumber.innerText = numberGuess.value;
        numberGuess.value = '';
        message.innerText = 'Too low, try again!';
        tries--
        counterNumber.innerText = tries;
        countTimes();
    } else if (numberGuess.value > secretNumber) {
        message.innerText = 'Too high, try again!';
        historyNumber.innerText = numberGuess.value;
        numberGuess.value = '';
        tries--
        counterNumber.innerText = tries;
        countTimes();
    } else {
        gameContainer.style.display = 'none';
        endMessage.style.display = 'block';
        resetBtn.style.display= 'block';
        endMessage.innerText = 'Your number was ' + numberGuess.value + ' You Win!!! You used numbers ' + arr;
    }
}

function countTimes() {
    if (tries === 0) {
        gameContainer.style.display = 'none';
        endMessage.style.display = 'block';
        endMessage.innerText = 'Game over! Correct number was ' + secretNumber + 'You use numbers ' + arr;
        resetBtn.style.display = 'block';
    }
    colorOfTries();
}

function colorOfTries() {
    if (tries > 8) {
        counterNumber.classList.add('green');
    } else if (tries < 8 && tries > 5) {
        counterNumber.classList.add('orange');
        counterNumber.classList.remove('green');
    } else if (tries < 5){
        counterNumber.classList.add('red');
        counterNumber.classList.remove('orange');
    }
}

gameInit();
