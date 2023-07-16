// элементы:

const inputText = document.querySelector('input');                  // поле ввода
const button = document.querySelector('button');                    // кнопка 
const duplicateField = document.querySelector('#duplicateField');   //текстовый блок duplicateField


// события: 

// нажатие клавиши на клавиатуре для поля ввода 

inputText.addEventListener('input', () => {
    duplicateField.textContent = inputText.value
})


// нажатие левой клавиши мыши для кнопки

button.addEventListener('click', (event) => {
    if (event.which === 1) {
      console.log('Введенный текст: ' + inputText.value);
      inputText.value = '';
      duplicateField.textContent = '';
    } 
});
