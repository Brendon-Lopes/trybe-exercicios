import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends React.Component {
  render() {
    const pokeList = pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemons={pokemon} />);
    return(
      <div>
      <div className="logo-container">
        <img
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="PokeDex Logo"
        ></img>
      </div>
      <div className="main-container">
        <div className="cards-control">{pokeList}</div>
      </div>
    </div>
    )
  }
}

export default Pokedex;
