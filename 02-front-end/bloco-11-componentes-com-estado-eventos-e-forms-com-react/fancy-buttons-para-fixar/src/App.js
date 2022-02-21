import React from 'react';
import './App.css';

const botao1 = () => console.log('Botão 1');
const botao2 = () => console.log('Botão 2');
const botao3 = () => console.log('Botão 3');


class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={botao1}>Botão 1</button>
        <button onClick={botao2}>Botão 2</button>
        <button onClick={botao3}>Botão 3</button>
      </div>
    )
  }
}

export default App;
