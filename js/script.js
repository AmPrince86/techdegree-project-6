const keyboard = document.querySelector('#querty');
const letter = document.querySelector('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

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
    }    
});
