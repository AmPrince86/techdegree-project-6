// #2 Declare variables
const overLay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

// #3 click button to hide overlay
$('.btn__start').on('click', function() {
    $('#overlay').css('display', 'none');  
});

// #4 game show phrases go here
let phrases = [
'The Avengers',
'Captain America',
'Iron Man',
'The Hulk',
'Black Panther'
]; 

//#5 return a random phrase from an array
 function getRandomPhraseAsArray(arr) {
    // Get random phrase from array
    return arr[Math.floor(Math.random() * arr.length)].split('');
}
   randomPhrase = getRandomPhraseAsArray(phrases);

//#6 adds the letters of a string to the display
 function addPhraseToDisplay (arr)  {
      for(let i =0; i < arr.length; i++) {
        //append empty li to ul
        if (arr[i] === " ") {
            $('#phrase ul').append('<li class="space"></li>');
        } else {
            $('#phrase ul').append('<li class="letter">' +arr[i] + '</li>');
        }
    }
 }
         addPhraseToDisplay(randomPhrase);

// #7 check if a letter is in the phrase
const checkletter = (button) => {
    let matched = null;
    const letterPhrase = document.querySelectorAll('li');
    for (i = 0; i < letterPhrase.length; i++) {
        if (button === letterPhrase[i].textContent.toLowerCase()) {
            letterPhrase[i].classList.add('show');
            letterPhrase[i].style.transition = '1s';
            letterPhrase[i].style.color = 'white';
            matched = true;
        }
    }
    return matched;
};
 
 //#8 Add an event listener to the keyboard
keyboard.addEventListener('click', (event) =>  {
    if (event.target.tagName === "BUTTON") {
        event.target.className = 'chosen';
        event.target.disabled = true;
        const match = checkletter(event.target.textContent.toLowerCase());
        if (match === null) {
            missed++;
 // #9 Code to change heart icon from liveHeart.png to lostHeart.png would go here
            const lostHeart = 5 - missed;
            const hearts = document.querySelectorAll('img');
            hearts[lostHeart].setAttribute('src', 'images/lostHeart.png')
        }   
        checkWin()
    } 

// #10 checkWin() function call goes here
    function checkWin () {
        const letter = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show');
        let message = document.querySelector('.title')
        if (letter.length === show.length) {
            overLay.className = "win"; 
            message.textContent = `YOU WIN!!`;
            overLay.style.display = "flex";
        } else if (missed > 4) {
            overLay.className = "lose"; 
            message.textContent = `YOU LOST :-(`;
            overLay.style.display = "flex";
            } 
        }
        reset ();
});
 function reset () {
                startButton.textContent = 'Play Again';
                startButton.addEventListener('click', ()=> {
                    location.reload();
                    startButton.style.transition = '5s';
                });
            }


    