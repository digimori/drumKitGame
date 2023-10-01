function makeSound(key) {
    switch (key) {
        case "w":
            let tom_1 = new Audio('assets/media/sounds/tom-1.mp3');
            tom_1.play()
            break;
        case "a":
            let tom_2 = new Audio('assets/media/sounds/tom-2.mp3');
            tom_2.play()
            break;
        case "s":
            let tom_3 = new Audio('assets/media/sounds/tom-3.mp3');
            tom_3.play()
            break;
        case "d":
            let tom_4 = new Audio('assets/media/sounds/tom-4.mp3');
            tom_4.play()
            break;
        case "j":
            let crash = new Audio('assets/media/sounds/crash.mp3');
            crash.play()
            break;
        case "k":
            let kick_bass = new Audio('assets/media/sounds/kick-bass.mp3');
            kick_bass.play()
            break;
        case "l":
            let snare = new Audio('assets/media/sounds/snare.mp3');
            snare.play()
            break;
    
        default:
            console.log(buttonInnerHTML.innerHTML)
            break;
}}

// Detecting button press, looping through the buttons to get all of them.

let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
})
}

// Detecting keyboard press

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key)
})

function buttonAnimation(currentKey) {
    // Lights up the button on press/click as they're both passed into the event listener anonymous functions
   let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 150);
}


// Remember, 'this' is like saying 'THIS thing in particular'

/* Below is the Constructor function to create the Audio objects
let audio = new Audio('Drumkit/sounds/tom-1.mp3');
    audio.play(); */
