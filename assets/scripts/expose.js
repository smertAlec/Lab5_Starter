// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let horn_image = document.querySelector("header + img");
  let horn_audio = document.querySelector(".hidden");
  let selector = document.getElementById("horn-select");

  // set the horn image and the horn audio based on selection
  selector.addEventListener("change", function(){
    if(selector.value == "air-horn"){
      horn_image.src = "assets/images/air-horn.svg";
      horn_image.alt = "Air horn";
      horn_audio.src = "assets/audio/air-horn.mp3";
    }
    if(selector.value == "car-horn"){
      horn_image.src = "assets/images/car-horn.svg";
      horn_image.alt = "Car horn";
      horn_audio.src = "assets/audio/car-horn.mp3";
    }
    if(selector.value == "party-horn"){
      horn_image.src = "assets/images/party-horn.svg";
      horn_image.alt = "Party horn";
      horn_audio.src = "assets/audio/party-horn.mp3";
    }
  })

  let slider = document.getElementById("volume");
  let sound_icon = document.querySelector("input + img");
  // set sound icon and volume based on slider position
  slider.addEventListener("input", function(){
    if(slider.value >= 67){
      sound_icon.src = "assets/icons/volume-level-3.svg";
      sound_icon.alt = "Volume level 3";
      horn_audio.volume = slider.value * 0.01;
    }
    if(slider.value >= 33 && slider.value < 67){
      sound_icon.src = "assets/icons/volume-level-2.svg";
      sound_icon.alt = "Volume level 2";
      horn_audio.volume = slider.value * 0.01;
    }
    if(slider.value >= 1 && slider.value < 33){
      sound_icon.src = "assets/icons/volume-level-1.svg";
      sound_icon.alt = "Volume level 1";
      horn_audio.volume = slider.value * 0.01;
    }
    if(slider.value == 0){
      sound_icon.src = "assets/icons/volume-level-0.svg";
      sound_icon.alt = "Volume level 0";
      horn_audio.volume = slider.value * 0.01;
    }
  })

  let button = document.querySelector("button");
  let confetti = new JSConfetti();
  button.addEventListener("click", function(){
    if(selector.value == "party-horn"){
      confetti.addConfetti();
    }
    horn_audio.play();
  })
}