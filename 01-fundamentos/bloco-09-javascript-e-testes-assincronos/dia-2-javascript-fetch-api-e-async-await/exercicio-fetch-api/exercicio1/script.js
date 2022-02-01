// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.getElementById('jokeContainer');

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

// const fetchJoke = () => {
//   fetch(API_URL, myObject)
//     .then((response) => response.json())
//     .then((data) => data.joke)
//     .then((joke) => jokeContainer.innerText = joke)
//     .catch((error) => console.log(error));
// };

const fetchJoke = async () => {
  try {
    const response = await fetch(API_URL, myObject);
    const object = await response.json();
    jokeContainer.innerText = object.joke;
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => fetchJoke();

