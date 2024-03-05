let input = document.getElementById('input');
let button = document.getElementById('button');

button.addEventListener('click',function(){
    let word = input.value;
    let speech = new SpeechSynthesisUtterance();

    function pronounce(){
        speech.text = word;
        speech.rate = 2;
        speech.volume = 1;
        speech. pitch = 1000;

        speech.lang = 'en-US';
        speechSynthesis.speak(speech);
    };
    pronounce();
});