// Круги
const light1 = document.querySelector('#light1');
const light2 = document.querySelector('#light2');
const light3 = document.querySelector('#light3');

//  красить в Зеленый
function makeGreen() {                  
    light1.style.background = ('black');
    light2.style.background = ('black');
    light3.style.background = ('green');
    light1.removeEventListener('click', makeGreen);         // не слушать Зеленый
    light2.removeEventListener('click', makeGreen);
    light3.removeEventListener('click', makeGreen);
    light1.addEventListener('click', makeYellow);           // слушать Желтый
    light2.addEventListener('click', makeYellow); 
    light3.addEventListener('click', makeYellow); 
};

//  красить в Желтый
function makeYellow() {                 
    light1.style.background = ('black');
    light2.style.background = ('yellow');
    light3.style.background = ('black');
    light1.removeEventListener('click', makeYellow);        // не слушать Желтый
    light2.removeEventListener('click', makeYellow);        // не слушать Желтый
    light3.removeEventListener('click', makeYellow);        // не слушать Желтый
    light1.addEventListener('click', makeRed);              // слушать Красный
    light2.addEventListener('click', makeRed);              // слушать Красный
    light3.addEventListener('click', makeRed);              // слушать Красный
};

//  красить в Красный
function makeRed() {                  
    light1.style.background = ('red');
    light2.style.background = ('black');
    light3.style.background = ('black');
    light1.removeEventListener('click', makeRed);           // не слушать Красный
    light2.removeEventListener('click', makeRed);           // не слушать Красный
    light3.removeEventListener('click', makeRed);           // не слушать Красный
    light1.addEventListener('click', makeGreen);            // слушать Зеленый
    light2.addEventListener('click', makeGreen);            // слушать Зеленый
    light3.addEventListener('click', makeGreen);            // слушать Зеленый
};

// события по клику на кругах
light1.addEventListener('click', makeGreen);
light2.addEventListener('click', makeGreen);
light3.addEventListener('click', makeGreen);
