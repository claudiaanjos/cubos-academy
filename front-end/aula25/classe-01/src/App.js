import './index.css';
import Navbar from './components/Navbar';
import CustomCard from './components/CustomCard';
import SearchItem from './components/SearchItem';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import CustomAlert from './components/CustomAlert';

function App() {
    const [cacheSearch, setCacheSearch, removeCacheSearch] = useLocalStorage('pokemonSearch', []);

    const [pokemon, setPokemon] = useState({});
    const [searchPokemon, setSearchPokemon] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        handleRequestToAPI();
    }, []);

    useEffect(() => {
        saveInCache();
    }, [pokemon]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false);
            setSearchPokemon('');
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [open]);

    function checkInCache() {
        return cacheSearch.find(item => item.name === searchPokemon.toLowerCase());
    }

    function saveInCache() {
        setCacheSearch([...cacheSearch, pokemon]);
    }

    async function handleFindPokemon() {
        const result = checkInCache();
        if (result) {
            return setPokemon(result);
        }

        await handleRequestToAPI();
    }

    async function handleRequestToAPI() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon || 'pikachu'}`);
            const { name, sprites: { other }, abilities } = await response.json();
            const { dream_world: { front_default } } = other;

            const currentPokemon = {
                name: name,
                abilities: abilities,
                image: front_default
            }

            setPokemon(currentPokemon);
        } catch (error) {
            console.log(error);
            setOpen(true);
            setSearchPokemon('');
        }
    }

    return (
        <div className="App">
            <Navbar />
            <div className="container-card">
                <CustomCard
                    name={pokemon.name}
                    abilities={pokemon.abilities}
                    image={pokemon.image}
                />
                <SearchItem
                    searchPokemon={searchPokemon}
                    setSearchPokemon={setSearchPokemon}
                    handleFindPokemon={handleFindPokemon}
                />
            </div>
            {open && <CustomAlert />}
        </div>
    );
}

export default App;