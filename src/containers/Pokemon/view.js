import React, { useState } from 'react';

import FetchButton from '../../components/FetchButton';
import PokemonList from '../../components/PokemonList';

function Pokemon() {
    const [pokemonList, setPokemonList] = useState([]);

    function addNewPokemon(pokemon) {
       
        setPokemonList([...pokemonList, pokemon]);
    }

    return (
        <div className="App">
            <h1>Welcome to my APP on React</h1>
            <FetchButton
                initialCounter= { pokemonList.length }
                onFetch= { addNewPokemon }
            />
            <PokemonList list={ pokemonList } />
        </div>
    );
}

export default Pokemon;