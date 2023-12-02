const buttonColors = ['red', 'blue', 'green', 'yellow'];

const gamePattern = [];
const userClickedPattern = [];

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play;
}

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$('.container').click((event) => {
    if (event.target.classList.contains('btn')) {
        const userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
    }
})