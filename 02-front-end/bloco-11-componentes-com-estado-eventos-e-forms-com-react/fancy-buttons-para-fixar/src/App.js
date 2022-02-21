import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.botao1 = this.botao1.bind(this);
  }

  botao1() { console.log(this, 'Botão 1'); }; // função comum precisa do bind para exibir 'this'.
  botao2 = () => console.log(this, 'Botão 2'); // arrow function não precisa de bind, mas é menos performática.
  botao3 = () => console.log(this, 'Botão 3');

  render() {
    return (
      <div>
        <button onClick={this.botao1}>Botão 1</button>
        <button onClick={this.botao2}>Botão 2</button>
        <button onClick={this.botao3}>Botão 3</button>
      </div>
    )
  }
}

export default App;
