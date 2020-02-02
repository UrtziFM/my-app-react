/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getPokemonById } from "../../services/pokeApi";

import "./styles.scss";

function FetchButton({ initialCounter, onFetch }) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    async function fetchPokemon() {
      const pokemon = await getPokemonById(counter);
      onFetch(pokemon);
    }

    if (counter) {
      fetchPokemon();
    }
  }, [counter]);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h4>Current Id: {counter}</h4>
      <button type="button" onClick={increaseCounter}>
        Fetch a new Pokemon
      </button>
    </div>
  );
}

FetchButton.propTypes = {
  initialCounter: PropTypes.number.isRequired,
  onFetch: PropTypes.func.isRequired
};

export default FetchButton;
