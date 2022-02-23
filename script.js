
// Eventlistener for clicks on buttons
let drumButtons = document.querySelectorAll('.button');

for (let index = 0; index < drumButtons.length; index++) {

    drumButtons[index].addEventListener('click' , () => {

        const buttonName = drumButtons[index].innerHTML;
        soundEffect(buttonName);
        animeffect(buttonName);

    });

}


// Eventlistener for keypress from keyboard
document.addEventListener("keypress", function(event) {
    soundEffect(event.key);
    animeffect(event.key);
  });

//function to trigger Sond effects
function soundEffect(button) {
    switch (button) {
      case "a":
        let sound1 = new Audio('Media/sounds/tom-1.mp3');
        sound1.play();
        break;
    
      case "s":
        let sound2 = new Audio('Media/sounds/tom-2.mp3');
        sound2.play();
        break;
    
      case "d":
        let sound3 = new Audio('Media/sounds/tom-3.mp3');
        sound3.play();
        break;
    
      case "f":
        let sound4 = new Audio('Media/sounds/tom-4.mp3');
        sound4.play();
        break;
    
      case "j":
        let sound5 = new Audio('Media/sounds/snare.mp3');
        sound5.play();
        break;
    
      case "k":
        let sound6 = new Audio('Media/sounds/crash.mp3');
        sound6.play();
        break;
    
      case "l":
        let sound7 = new Audio('Media/sounds/kick-bass.mp3');
        sound7.play();
        break;
    
      default: console.log(button);
    }
  }

//function for animation effects on keypress
function animeffect(Btname) {
    const active = document.querySelector("."+Btname);
    active.classList.add("animation");

    setTimeout(() => {
        active.classList.remove("animation");
    } , 100);
    
}


