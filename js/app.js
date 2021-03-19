// #2 Declare variables
//const $words = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

// #4 game show phrases go here
let phrases = [
'The Avengers',
'Captain America',
'Iron Man',
'The Hulk',
'Black Panther'
]; 

// #3 click button to hide overlay
$('.btn__start').on('click', function() {
    $('#overlay').css('display', 'none');  
});

//#5 return a random phrase from an array
 function getRandomPhraseAsArray(arr) {
    // Get random phrase from array
    return phrases[Math.floor(Math.random() * arr.length)].split('');
}
   randomPhrase = getRandomPhraseAsArray(phrases);

//#6 adds the letters of a string to the display
 function addPhraseToDisplay (arr)  {
      for(let i =0; i < arr.length; i++) {
        //append empty li to ul
        if (arr[i] === " ") {
            $('#phrase ul').append('<li class="space"></li>');
        } else {
            $('#phrase ul').append('<li class="letter"></li>');
        }
        return addPhraseToDisplay(phrases);
    }
 }


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
 //#8 Add an event listener to the
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