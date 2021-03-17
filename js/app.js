const words = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const keyboard = document.querySelector('#querty');
const letter = document.querySelector('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

// game show phrases go in here
var phrases = [
'The Avengers',
'Captain America',
'Iron Man',
'The Hulk',
'Black Panther'
]; 

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    let phraseWords = phrases[Math.floor((Math.random() * 5) + 1)];
    let phraseSplit = phrase.split('');
    for (let i = 0; i < phraseSplit.length; i++) {
        $('#phrase ul').append('<li class="letter"></li>');
    }
});

// return a random phrase from an array
// function getRandomPhraseAsArray(phrases) {
//     let randomValue = phrases[math.floor(math.random() * phrases.length)];
// }

     



// check if a letter is in the phrase
const checkletter = (button) => {
    let matched = null;
    
    for (let i = 0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
            letter.classList.add('show');
            matched = true;
        }
    };

    return matched;
};

keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkletter(event.target.textContent.toLowerCase());
        if (match === null) {
            missed++;
            // Code to change hear icon from liveHeart.png to lostHeart.png would go here
            misses.textContent = missed;
        }
        //checkWin() function call goes here
        const checkWin = () => {

        }
    }    
});

