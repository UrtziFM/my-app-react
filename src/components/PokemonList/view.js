import React from "react";

import { arrayOfPokemonPropTypes } from "../../constants/pokemonPropTypes";

import PokemonCard from "../PokemonCard";

import "./styles.scss";

function PokemonList({ list }) {
  return (
    <ul className="PokemonList__main-list">
      {list.map(pokemon => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </ul>
  );
}

PokemonList.propTypes = {
  list: arrayOfPokemonPropTypes.isRequired
};

export default PokemonList;
