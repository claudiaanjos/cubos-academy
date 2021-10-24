import { TextField, Button } from '@material-ui/core';
import useStyles from './style';

function SearchItem({ searchPokemon, setSearchPokemon, handleFindPokemon }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField 
                label="Search New Pokemon"
                variant="outlined"
                value={searchPokemon}
                onChange={e => setSearchPokemon(e.target.value)}
            />

            <Button 
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleFindPokemon}
            >
                Search 
            </Button>
        </div>
    )
}

export default SearchItem;