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
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        playSound(this);
        buttonAnimation(this);
    });
}

// play sound on keyboard presses
document.addEventListener('keydown', function (event) {
    playSound(document.querySelector(`.${event.key}`));
    buttonAnimation(document.querySelector(`.${event.key}`));
});
