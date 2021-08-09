const express = require('express');
const { obterPokemons, obterPokemon } = require('./controladores/pokemons');

const app = express();
app.use(express.json());

app.get('/pokemons', obterPokemons);
app.get('/pokemons/:idOuNome', obterPokemon);

app.listen(8000);