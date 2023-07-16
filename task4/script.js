// ЗАДАЧА:
// Создайте страницу с ссылкой, при клике на которую появляется окно для ввода текста. 
// При вводе текста в окно ввода в ссылке должен меняться текст на введенный.
// -	Как окно ввода используйте метод prompt().
// -	Для изменения текста в ссылке используйте свойство textContent.
// -	Для сброса поведения ссылки по умолчанию используйте preventDefault().

const aTextField = document.querySelector('#aTextField');

aTextField.addEventListener('click', 
    function(event) {
        this.textContent = prompt('Введите новый текст ссылки:', 'Новая ссылка');
        event.preventDefault();
    }
);
