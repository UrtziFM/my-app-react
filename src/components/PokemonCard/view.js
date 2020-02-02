import React from "react";
import { Link } from 'react-router-dom';

import { pokemonPropTypes } from "../../constants/pokemonPropTypes";

import './styles.scss';

function PokemonCard({ id, name, types, image }) {
  return (
    <li className="PokemonCard__card">
      <Link to={`/pokemon/${id}`}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <h4>Types</h4>
        <ol className="PokemonCard__card-types">
          {types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ol>
      </Link>
    </li>
  );
}

PokemonCard.propTypes = pokemonPropTypes.isRequired;

export default PokemonCard;
