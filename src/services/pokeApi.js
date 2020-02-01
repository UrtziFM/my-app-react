import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const buildUrl = id =>  `${baseUrl}${id}/`;

function formatTypes(types) {
    return types.map (({ type }) => type.name);
}

function formatPokemon(pokemon) {
    const { id, name, type, sprites } = pokemon;
    const { front_default } = sprites;

    return {
        id,
        name,
        types: formatTypes(types),
        image: front_default,
    }
}

export async function getPokemonById(id) {
    const url = buildUrl(id);

    const { data } = await axios.get(url);
    return formatPokemon(data);
}