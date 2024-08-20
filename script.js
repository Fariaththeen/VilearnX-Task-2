const synth = window.speechSynthesis;
const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');
const voiceSelect = document.getElementById('voice-select');
const pitchControl = document.getElementById('pitch');
const rateControl = document.getElementById('rate');
const volumeControl = document.getElementById('volume');

let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// Populate voice list when voices are loaded
synth.onvoiceschanged = populateVoiceList;

speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
    utterance.pitch = pitchControl.value;
    utterance.rate = rateControl.value;
    utterance.volume = volumeControl.value;
    synth.speak(utterance);
});