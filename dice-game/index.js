document.querySelector('button.startButton').addEventListener(
    'click',
    function () {
        makeVisible();
        resetDice();
        rollDice();
        showResult();
    }
);

function makeVisible() {
    document.querySelectorAll('.display.hidden').forEach((element) => element.classList.remove('hidden'));
}

function resetDice() {
    document.querySelectorAll('.diceDot').forEach((element) => element.classList.add('hidden'));
}

function rollDice() {
    const diceArray = document.querySelectorAll('div.dice');
    for (let i = 0; i < diceArray.length; i++) {
        const randomNum = Math.floor(Math.random() * 6 + 1);
        diceArray[i].setAttribute('id', randomNum);
        const dotArray = document.querySelectorAll('.diceDot.dice' + i + '.num' + randomNum);
        for (let n = 0; n < randomNum; n++) {
            dotArray[n].classList.remove('hidden');
        }
    }
}

function showResult() {
    const dice0Value = document.querySelector('.dice.dice0').getAttribute('id');
    const dice1Value = document.querySelector('.dice.dice1').getAttribute('id');
    if (dice0Value > dice1Value) {
        document.querySelector('.gameMessage h1').innerHTML = "Player 1 is the Winner!";
    } else if (dice0Value < dice1Value) {
        document.querySelector('.gameMessage h1').innerHTML = "Player 2 is the Winner!";
    } else {
        document.querySelector('.gameMessage h1').innerHTML = "It is a tie... Try again!";
    }
}
