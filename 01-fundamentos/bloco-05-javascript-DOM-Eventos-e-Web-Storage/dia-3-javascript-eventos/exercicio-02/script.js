function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let UlList = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for(i = 0; i < dezDaysList.length; i += 1){
  let listItem = document.createElement('li');
  listItem.innerText = dezDaysList[i];
  listItem.classList = 'day';
  if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
    listItem.classList.add('holiday');
  }
  if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
    listItem.classList.add('friday');
  }
  UlList.appendChild(listItem);
}

function createButtonHoliday(param){
  let button = document.createElement('button');
  button.innerText = param;
  // button.setAttribute('id', 'btn-holiday');
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}

createButtonHoliday('Feriados');

let holidays = document.getElementsByClassName('holiday');
function clickButtonHoliday(){
  for(let i of holidays){
    if(i.style.backgroundColor !== 'red'){
      i.style.backgroundColor = 'red';
      i.style.color = 'whitesmoke';
    } else {
      i.style.backgroundColor = 'rgb(238,238,238)';
      i.style.color = '#777';
    }
  }
}

document.querySelector('#btn-holiday').addEventListener('click', clickButtonHoliday);

function createButtonFriday(param){
  let button = document.createElement('button');
  button.innerText = param;
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button);
}

createButtonFriday('Sexta-feira');

let fridays = document.getElementsByClassName('friday');
function clickButtonFriday(){
  for(i of fridays){
    if(i.innerText.includes('Friday')){
      i.innerText = parseInt(i.innerText);
    }else{
      i.innerText += ' Friday!';
    }
  }
}

document.querySelector('#btn-friday').addEventListener('click', clickButtonFriday);

function zoomIn(event){
  event.target.style.fontSize = '30px';
}

function zoomOut(event){
  event.target.style.fontSize = '20px';
}

for(i of document.querySelectorAll('.day')){
  i.addEventListener('mouseover', zoomIn);
}

for(i of document.querySelectorAll('.day')){
  i.addEventListener('mouseout', zoomOut);
}