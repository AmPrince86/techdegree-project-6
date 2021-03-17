//const words = getElementById('phrase');
const resetBtn = document.querySelector('.btn__reset');
phrases = []; // game show phrases go in here
const keyboard = document.querySelector('#querty');
const letter = document.querySelector('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

// Listen for the start game button to be pressed
//startButton.addEventListener('click', e => {

//});

document.getElementById("overlay").addEventListener("click", function () {
 var e =document.getElementsByClassName("start");

        e[0].style.display = 'block';
   
})	;
document.getElementById("banner").addEventListener("click", function () {
   var e =document.getElementsByClassName("start");
 e[0].style.display= 'none';
});

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

