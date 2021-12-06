document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'green';
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Esse é o primeiro filho do filho';

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let pai = document.getElementById('pai');
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

pai.appendChild(document.createElement('section'));

elementoOndeVoceEsta.appendChild(document.createElement('p'));

primeiroFilhoDoFilho.appendChild(document.createElement('p'));

console.log(document.getElementById('primeiroFilhoDoFilho').firstElementChild);