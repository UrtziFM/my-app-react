import PropTypes from 'prop-types';

export const pokemonPropTypes = PropTypes.shape({
    id : PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
});

export const arrayOfPokemonPropTypes = PropTypes.arrayOf(pokemonPropTypes);