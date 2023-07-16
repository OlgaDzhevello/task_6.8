// Подсказка - пример consol.log, alert и promt

// consoleLog

const pConsoleLog = document.querySelector('#consoleLog');
pConsoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});

// alert

const pAlert = document.querySelector('#alert');
pAlert.addEventListener('click', () => {
    alert('Метод для вывода диалогового окна с сообщением');
});

// promt

const pPromt = document.querySelector('#prompt');
pPromt.addEventListener('click', () => {
    alert('Метод для вывода диалогового окна с сообщением и запросом на ввод текста');
});

// const userText = prompt('Введите текст', 'Значение по умолчанию');
