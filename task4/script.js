// Задача 4
const aTextField = document.querySelector('#aTextField');

aTextField.addEventListener('click', 
    function(event) {
        this.textContent = prompt('Введите новый текст ссылки:', 'Новая ссылка');
        event.preventDefault();
    }
);
