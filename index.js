//detecting button Press


let numberOfDrum = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAmination(buttonInnerHTML);

    });
}


//detecting Keyboard Press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAmination(event.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }

}

function buttonAmination(currentKey){
let activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout (function(){

    activeButton.classList.remove("pressed")
}, 100);

}