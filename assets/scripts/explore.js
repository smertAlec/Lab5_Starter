// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let synth = window.speechSynthesis;
  let voices = [];
  let selector = document.getElementById("voice-select");
  function addVoices(){
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++){
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if(voices[i].default){
        option.textContent += " - DEFAULT";
      }
      option.setAttribute("value", voices[i].name);
      selector.appendChild(option);
    }
  }

  addVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
  }

  let text = document.getElementById("text-to-speak");
  let utterance = new SpeechSynthesisUtterance("");
  // change what is said based on the inputted text
  text.addEventListener("input", function(){
    utterance.text = text.value;
  });

  // change the voice to the selected voice
  selector.addEventListener("change", function(){
    for (let i = 0; i < voices.length; i++){
      if(voices[i].name == selector.value){
        utterance.voice = voices[i];
      }
    }
  });

  let button = document.querySelector("button");
  // play the utterance with the selected voice
  button.addEventListener("click", function(){
    synth.speak(utterance);
    let image = document.querySelector("img");
    utterance.addEventListener("start", function(){
      image.src = "assets/images/smiling-open.png";
    });
    utterance.addEventListener("end", function(){
      image.src = "assets/images/smiling.png";
    });
  });
}