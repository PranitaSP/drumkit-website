
// **********ADD EVENT LISTENER TO FIRST BUTTON BY PASSING FUNCTION NAME

//document.querySelector("button").addEventListener("click", handleClick);

//***********NOW REMOVE FUNCTION NAME AND CALL ANONYMOUS FUCTION */

// document.querySelector("button").addEventListener("click", function()
// {
//     alert("I have got clicked");
// });

//***********NOW ADD THIS EVENT LISTENER TO ALL DRUM BUTTONS */

// var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i=0; i<numberOfDrums; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function()
//     {
//         alert("I have got clicked");
//     });
// }

//************PLAY THE SOUND ON BUTTON CLICK USE AUDIO OBJECT

// var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i=0; i<numberOfDrums; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function()
//     {
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//     });
// }

//******** TO GET WHICH BUTTON HAS BEEN CLICKED USE THIS AND CHANGE THE INNER HTML OF CLICKED BUTTON */

// var numberOfDrums = document.querySelectorAll(".drum").length;

// for (var i=0; i<numberOfDrums; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function()
//     {
//        this.style.color = "white";
//     });
// }

//*********GET INNERHTML OF BUTTON CLICKED AND ASSIGN THE DIFFERENT AUDIO USING SWITCH STATEMENT.

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log(this);
        var buttonInnerHtml = this.innerHTML;
        
        playSounds(buttonInnerHtml);
        btnAnimation(buttonInnerHtml);
    });
}

//ADDING EVENT LISTENER TO KEY BOARD.
// document.addEventListener("keydown", function () {
//     alert("Keypressed")
// })

//ADD PARAMETER TO FUCTION WHICH WILL GET WHICH EVENT TRIGGERED THE FUNCTION
document.addEventListener("keydown", function (event) {
    //console.log(event);
    playSounds(event.key);
    btnAnimation(event.key);
})

//CREATE FUNCTION THAT TAKES KEY AND PLAY SOUND AND PASS THE FUNCTION FOR BOTH EVENT LISTENERS

function playSounds(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(key);
            break;
    }
}

//CREATE NEW FUNCTION TO GIVE ANIMATION EFFECT. //SELECT THE CLICKED BUTTON TO ADD CSS OF PRESSED.

function btnAnimation(currentKey)
{
  var selectedButton =  document.querySelector("."+ currentKey);
  selectedButton.classList.add("pressed");

  setTimeout(function(){
    selectedButton.classList.remove("pressed");
  }, 100);
}