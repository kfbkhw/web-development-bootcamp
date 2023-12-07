const buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userClickedPattern = [];

let gameStart = false;
let gameLevel = 0;

$(document).keypress(() => {
    if (!gameStart) {
        nextSequence();
    }
})

$('.container').click((event) => {
    if (event.target.classList.contains('btn')) {
        const userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    }
})

function startOver() {
    gameStart = false;
    gameLevel = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence() {
    gameStart = true;
    gameLevel += 1;
    $('#level-title').html('Level ' + gameLevel);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play;
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(() => {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        const audio = new Audio('sounds/wrong.mp3');
        audio.play;
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        $('#level-title').html('Game Over<br>Press A Key to Restart');
        startOver();
    }
}