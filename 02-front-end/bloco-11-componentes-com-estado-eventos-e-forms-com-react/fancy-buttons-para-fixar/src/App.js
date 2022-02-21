import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.botao1 = this.botao1.bind(this);
    this.state = {
      numCliques: 0
    }
  }

  botao1() { // função comum precisa do bind para exibir 'this'.
    this.setState((prevState, _props) => ({
      numCliques: prevState.numCliques + 1
    }));
    if(this.state.numCliques % 2 === 0) {

    }
  };
  botao2 = () => console.log(this, 'Botão 2'); // arrow function não precisa de bind, mas é menos performática.

  render() {
    return (
      <div>
        <button
        onClick={this.botao1}
        style={{backgroundColor: this.state.numCliques % 2 === 0 ? 'green' : 'initial'}}
        >{this.state.numCliques}
        </button>

        {/* <button onClick={ () => this.botao1('parâmetros') }>{this.state.numCliques}</button>
        ^ forma de chamar uma função com parâmetros no evento onClick */ }
        
        <button onClick={this.botao2}>Botão 2</button>
      </div>
    )
  }
}

export default App;
