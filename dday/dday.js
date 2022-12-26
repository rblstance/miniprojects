
//const year;

const timer = document.body.querySelector('.timer');
const timeBox = timer.querySelector('.time');
const dateBox = timer.querySelector('.date');

setInterval(updateTime, 1000);

const form = document.body.querySelector('form');
const name = form.querySelector('#name');
const start = form.querySelector('#start');
const end = form.querySelector('#end');
const list = document.body.querySelector('.list');

form.addEventListener('submit', e => {
    e.preventDefault();
    const startDate = new Date(start.value);
    const endDate = new Date(end.value);

    const goal = (endDate.getTime() - startDate.getTime())/(1000*60*60*24) // (ms)
    
    const item = document.createElement('li');
    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'itemName');
    item.append(itemName);
    item.querySelector('.itemName').innerHTML = name.value;
    const itemDay = document.createElement('span');
    itemDay.setAttribute('class', 'itemDay');
    item.append(itemDay);
    item.querySelector('.itemDay').innerHTML = `D-${goal}`;
    const itemChecked = document.createElement('input');
    itemChecked.setAttribute('type', 'checkbox');
    itemChecked.setAttribute('class', 'checkbox');
    item.append(itemChecked);
    item.setAttribute('class', 'item')
    list.append(item);
})

const item = document.body.querySelector('.item');
list.addEventListener('click', e => {
    if(e.target.tagName === 'INPUT'){
        if(e.target.checked){
            list.removeChild(e.target.parentNode);
        }
    }
});


function updateTime(){
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = getDayStr(now.getDay());
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    timeBox.innerHTML = `${getNumStr(hour)}:${getNumStr(min)}:${getNumStr(sec)}`;
    dateBox.innerHTML = `${getNumStr(year)}년 ${getNumStr(month)}월 ${getNumStr(date)}일 ${day}요일`;
}

function getNumStr(number){
    return `${number < 10 ? `${number}` : `${number}`}`;
}

function getDayStr(day){
    switch(day) {
        case 0 : return '일'
        case 1 : return '월'
        case 2 : return '화'
        case 3 : return '수'
        case 4 : return '목'
        case 5 : return '금'
        case 6 : return '토'
    }
    return;
}