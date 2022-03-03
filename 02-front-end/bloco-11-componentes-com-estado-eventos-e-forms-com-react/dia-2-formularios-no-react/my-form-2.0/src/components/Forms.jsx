import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereço: "",
      cidade: "",
      estado: "ceará",
      casa: false,
      apartamento: false,
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleInputs, state } = this;

    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="nome">
            Nome:
            <input onChange={ handleInputs } value={ state.nome } name="nome" maxLength={40} type="text" />
          </label>
          <label htmlFor="email">
            E-mail:
            <input onChange={ handleInputs } value={ state.email } name="email" maxLength={50} type="text" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input onChange={ handleInputs } value={ state.cpf } name="cpf" maxLength={11} type="text" />
          </label>
          <label htmlFor="endereço">
            Endereço:
            <input onChange={ handleInputs } value={ state.endereço } name="endereço" maxLength={200} type="text" />
          </label>
          <label htmlFor="cidade">
            Cidade:
            <input onChange={ handleInputs } value={ state.cidade } name="cidade" maxLength={28} type="text" />
          </label>
          <label htmlFor="estado">
            Estado:
            <select name="estado" value={ state.estado } onChange={ handleInputs }>
              <option value="ceará">Ceará</option>
              <option value="são paulo">São Paulo</option>
            </select>
          </label>
          <label>
            Tipo:
            <input type="radio" value="casa" checked={ state.casa } onChange={ handleInputs } /> Casa
            <input type="radio" value="apartamento" checked={ state.apartamento } onChange={ handleInputs } /> Apartamento
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Forms;
