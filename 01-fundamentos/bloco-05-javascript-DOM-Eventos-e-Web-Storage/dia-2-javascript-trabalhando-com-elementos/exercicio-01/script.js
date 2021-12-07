document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'green';
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Esse é o primeiro filho do filho';

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let pai = document.getElementById('pai');
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

pai.appendChild(document.createElement('section'));

elementoOndeVoceEsta.appendChild(document.createElement('p'));

primeiroFilhoDoFilho.appendChild(document.createElement('p'));

console.log(document.getElementById('primeiroFilhoDoFilho').firstElementChild.parentElement.lastElementSibling);

let paiDoPai = document.getElementById('paiDoPai');

pai.removeChild(document.getElementById('primeiroFilho'));
pai.removeChild(document.getElementById('terceiroFilho'));
pai.removeChild(document.getElementById('quartoEUltimoFilho'));
elementoOndeVoceEsta.removeChild(document.getElementById('segundoEUltimoFilhoDoFilho'));
primeiroFilhoDoFilho.removeChild(document.getElementsByTagName('p')[0]);
elementoOndeVoceEsta.removeChild(document.getElementsByTagName('p')[0]);
pai.removeChild(document.querySelectorAll('section')[3]);

// pai.removeChild(pai.getElementsByTagName('section')[2]);
// também funciona! ^