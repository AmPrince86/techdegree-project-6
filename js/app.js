//const $words = document.getElementById('phrase');
const $startButton = document.querySelector('.btn__reset');

const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

// game show phrases go in here
let phrases = [
'The Avengers',
'Captain America',
'Iron Man',
'The Hulk',
'Black Panther'
]; 

//Hide the li
//$('#phrase li').hide();

// #3 click button show keyboard
$('.btn__start').on('click', function() {
    $('#overlay').css('display', 'none');  
});

// #5 return a random phrase from an array
$('.btn__start').on('click', function() {
    $('#banner', '#phrase', '#qwerty', '#scoreboard').css('display', 'inital');
    let phrase = phrases[Math.floor((Math.random() * 5) + 1)];
    let phraseSplit = phrase.split(" ");
    console.log(phraseSplit);
    for(let i =0; i < phrase.length; i++) {
        if (phrases[i] === " ") {
            $('#phrase ul').append('<li class="space"></li>');
        } else {
            $('#phrase ul').append('<li class="letter"></li>');
        }
    } 
});





//adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }


// #7 check if a letter is in the phrase
const checkletter = (button) => {
    let matched = null;
    
    for (i = 0; i < letters.length; i++) {
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            matched = true;
        }
    };

    return matched;
};
 //#8
keyboard.addEventListener('click', (event) =>  {
    if (event.target.tagName === "BUTTON") {
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkletter(event.target.textContent.toLowerCase());
        if (match === null) {
            missed++;
            // Code to change hear icon from liveHeart.png to lostHeart.png would go here
            //tries.textContent = missed;
        }
        //checkWin() function call goes here
        const checkWin = () => {

        }
    }    
});

