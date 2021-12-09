let body = document.querySelector('body');
let paragraph = document.getElementById('paragraph');
let darkModeBtn = document.getElementById('dark-mode');
let textColorBtn = document.getElementById('text-color');
let fontSizeBox = document.getElementById('font-size');
let lineSpacingBox = document.getElementById('line-spacing');
let changeFontBox = document.getElementById('change-font');

darkModeBtn.addEventListener('click', darkModeFunction);
textColorBtn.addEventListener('click', textColorFunction);
fontSizeBox.addEventListener('change', fontSizeFunction);
lineSpacingBox.addEventListener('change', lineSpacingFunction);
changeFontBox.addEventListener('change', changeFontFunction);

function darkModeFunction(){
  if (darkModeBtn.classList.contains('btn-on')) {
    body.style.backgroundColor = 'whitesmoke';
    darkModeBtn.classList.remove('btn-on');
    darkModeBtn.innerHTML = 'Dark Mode';
  } else {
    body.style.backgroundColor = 'darkslategray';
    darkModeBtn.classList.add('btn-on');
    darkModeBtn.innerHTML = 'Light Mode';
  }
}

function textColorFunction(){
  if (textColorBtn.classList.contains('btn-on')) {
    body.style.color = 'black';
    textColorBtn.classList.remove('btn-on');
    textColorBtn.style.color = 'black';
  } else {
    body.style.color = 'red';
    textColorBtn.classList.add('btn-on');
    textColorBtn.style.color = 'red';
  }
}

function fontSizeFunction(){
  if (fontSizeBox.value > 80) {
    window.alert('Cannot increase font size above 80px');
    paragraph.style.fontSize = '80px';
  } else if (fontSizeBox.value < 10){
    window.alert('Cannot set font size under 10px');
    paragraph.style.fontSize = '10px';
  } else {
    paragraph.style.fontSize = fontSizeBox.value + 'px';
    console.log(fontSizeBox.value + 'px');
  }
}

function lineSpacingFunction(){
  if (lineSpacingBox.value > 3) {
    window.alert('Cannot increase line spacing above 3')
    paragraph.style.lineHeight = '3';
  } else if (lineSpacingBox.value < 1){
    window.alert('Cannot set line spacing below 1');
    paragraph.style.lineHeight = '1';
  } else {
    paragraph.style.lineHeight = lineSpacingBox.value;
  }
}

function changeFontFunction(){
  changeFontBox.value = localStorage.font;
  paragraph.style.fontFamily = changeFontBox.value;
  localStorage.setItem('font', changeFontBox.value);   
}