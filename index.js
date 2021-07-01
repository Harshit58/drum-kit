
var totalNumberOfDrums = document.querySelectorAll(".drum").length;

// Button Click Event Listener
for (var i=0; i<totalNumberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleOnClick);
}

// Key Press Event Listener
document.addEventListener("keypress", handleOnKeyPress);

function handleOnKeyPress(event) {
  var pressedKey = event.key;
  playSoundOnKeyPressedOrClick(pressedKey);
  buttonAnimation(pressedKey)
}

function handleOnClick() {
  var buttonInnerHtml = this.innerHTML;
  playSoundOnKeyPressedOrClick(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed")

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function playSoundOnKeyPressedOrClick(keyValue) {
  switch (keyValue) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default: console.log(keyValue);

  }
}
