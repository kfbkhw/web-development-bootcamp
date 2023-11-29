for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const splitWords = getComputedStyle(this).getPropertyValue('background-image').split('/');
        const mediaName = splitWords[splitWords.length - 1].split('.')[0];
        const audio = new Audio(`sounds/${mediaName}.mp3`);
        audio.play();
    });
}
