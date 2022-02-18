import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props.pokemons;
    const { value, measurementUnit } = this.props.pokemons.averageWeight;

    return (
      <section className="card">
        <div className="text-div">
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>
            Average Weight: {value}{measurementUnit}
          </p>
        </div>
        <div className="image-div">
          <img className="image" src={image} alt={name}></img>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  }).isRequired
}

export default Pokemon;
