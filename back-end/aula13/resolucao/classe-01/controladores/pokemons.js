const axios = require('axios');

async function obterPokemons(req, res) {
    let inicio = req.query.inicio;
    let quantidade = req.query.quantidade;

    if (!inicio) {
        inicio = 0;
    }
    if (!quantidade) {
        quantidade = 20;
    }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);

    res.json(response.data.results);
}

async function obterPokemon(req, res) {
    const idOuNome = req.params.idOuNome;
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

    const { id, name, height, weight, base_experience, forms, abilities, species } = response.data;

    res.json({
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    });
}

module.exports = {obterPokemons, obterPokemon};