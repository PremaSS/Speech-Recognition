let textbox = document.getElementById('speech-textbox');
let instructions = document.getElementById('speech-instructions');
let startBtn = document.getElementById('start-btn');
let h1 = document.getElementById('h1-elem');

// Сохраненяем распознанный контент
let content = '';

// Создаём переменную объекта SpeechRecognition
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// Настраиваем распознавание речи для продолжительной работы
recognition.continuous = true;

// Подключаем обработчики события:

//  onstart
recognition.onstart = function () {
    instructions.innerText = "Voice Recognition is on";
    instructions.classList.add("onstart-animation");
    h1.classList.add("onstart-animation");
};

// onspeechend
recognition.onspeechend = function () {
    instructions.innerText = "No Activity";
};

// onerror
recognition.onerror = function () {
    instructions.innerText = "Try Again";
};

// onresult
recognition.onresult = function (e) {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    content += transcript;
    textbox.value = content;
};

// 'click' для кнопки запуска распознавания речи
startBtn.addEventListener('click', function (e) {
    recognition.start();

});

// 'input' для текстового поля,  он обновляет содержимое переменной content при вводе текста
textbox.addEventListener('input', function () {
    content = textbox.value;
});

