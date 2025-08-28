

// Listening to Mouse click

var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
} 

function handleClick(event) {
    console.log(event)
    var buttonInnerHTML = this.innerHTML; // this gives us the html with class = drum that was clicked. this points to the
    //  DOM element that received the click.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
}


// Listening to Keys

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})

// Making appropriate sound 
function makeSound(key) {
    switch (key) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            
            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            
            case "l":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
        
        
            default:
                break;
        };
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    // console.log(activeButton.classList);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}

