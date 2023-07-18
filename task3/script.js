// Коробка

const boxTrafficLight = document.querySelector('.box');

// Круги

const light1 = document.querySelector('#light1');
const light2 = document.querySelector('#light2');
const light3 = document.querySelector('#light3');

//  красить в Зеленый

function makeGreen() {                  
    light1.style.background = ('black');
    light2.style.background = ('black');
    light3.style.background = ('green');

};

//  красить в Желтый

function makeYellow() {                 
    light1.style.background = ('black');
    light2.style.background = ('yellow');
    light3.style.background = ('black');

};

//  красить в Красный

function makeRed() {                  
    light1.style.background = ('red');
    light2.style.background = ('black');
    light3.style.background = ('black');

};

// Порядок смены цвета

function changeColor() {
    if (currenColor === 'red') {
        currenColor = 'green';
        makeGreen();
    } else if (currenColor === 'green') {
        currenColor = 'yellow';
        makeYellow();
    } else if (currenColor === 'yellow') {
        currenColor = 'red';
        makeRed();
    };
};                 

// Начальный цвет
let currenColor = 'red'

// события по клику на кругах
boxTrafficLight.addEventListener('click', (event) =>{
    if (event.target.className === 'trafficLight') {
        changeColor();
    }
});

