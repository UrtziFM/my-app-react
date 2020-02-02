import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PokemonCard from '../../components/PokemonCard';

import { getPokemonById } from '../../services/pokeApi';

function PokemonProfile({ match }) {
    const [pokemon, setPokemon] = useState(null);

    const { params } = match;
    const { id } = params;

    useEffect(() => {
        async function fetchPokemon() {
            const pokemon = await getPokemonById(id);
            setPokemon(pokemon);
        }

        fetchPokemon();
    }, [id]);

    return pokemon ? <PokemonCard {...pokemon} /> : <h3>loading pokemon... </h3>;
}

PokemonProfile.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        })
    }).isRequired,
}

export default PokemonProfile;