import React, { Component } from "react";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      conteudos.map(({ conteudo, bloco, status}) =>
      <div key={ conteudo } className="card">
        <div>O conteúdo é: {conteudo}</div>
        <div>Status: {status}</div>
        <div>Bloco: {bloco}</div>
      </div>
      )
    )
  }
}

export default Content;
