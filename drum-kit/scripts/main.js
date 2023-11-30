function playSound(drumButton) {
    const splitWords = getComputedStyle(drumButton).getPropertyValue('background-image').split('/');
    const mediaName = splitWords[splitWords.length - 1].split('.')[0];
    const audio = new Audio(`sounds/${mediaName}.mp3`);
    audio.play();
}

function buttonAnimation(drumButton) {
    drumButton.classList.add('pressed');
    setTimeout(() => {
        drumButton.classList.remove('pressed');
    }, 800);
}

// play sound on button clicks
document.querySelector('.set').addEventListener('click', (event) => {
    if (event.target.classList.contains('drum')) {
        playSound(event.target);
        buttonAnimation(event.target);
    }
});

// play sound on keyboard presses
document.addEventListener('keydown', function (event) {
    playSound(document.querySelector(`.${event.key}`));
    buttonAnimation(document.querySelector(`.${event.key}`));
});
