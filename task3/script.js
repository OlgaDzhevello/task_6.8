// Круг 
const trafficLightEl = document.querySelector('#trafficLight');

//  красить в Зеленый
function makeGreen() {                  
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);         // не слушать Зеленый
    trafficLightEl.addEventListener('click', makeYellow);           // слушать Желтый
};

//  красить в Желтый
function makeYellow() {                  
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);        // не слушать Желтый
    trafficLightEl.addEventListener('click', makeRed);              // слушать Красный
};

//  красить в Красный
function makeRed() {                  
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);           // не слушать Красный
    trafficLightEl.addEventListener('click', makeGreen);            // слушать Зеленый
};

// событие по клику на круге
trafficLightEl.addEventListener('click', makeGreen);                
