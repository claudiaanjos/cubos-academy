import React, { useState } from "react";
import "./style.css";

import getSpotifyToken from "./utils/getSpotifyToken";
import Card from "./Components/Cards.js";

const baseURL = (pesquisa) =>
    `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

function App() {
    const [pesquisa, setPesquisa] = useState("");
    const [tracks, setTracks] = useState([]);
    const [pesquisando, setPesquisando] = useState(false);
    const [erro, setErro] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        setErro('')


        if (!pesquisa) {
            setTracks([])
            return;
        }

        setPesquisando(true);
        try {

            const token = await getSpotifyToken();

            const response = await fetch(baseURL(pesquisa), {
                headers: {
                    Authorization: token,
                },
            });
            const { tracks } = await response.json();

            setTracks(tracks.items);
        } catch (error) {
            setErro(error.message)
            setTracks([])
        }
        setPesquisando(false);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
                <div>{pesquisando && "Pesquisando..."}</div>
                <span>{erro}</span>
            </form>
            {tracks.map((track) => (
                <Card track={track} />
            ))}
        </div>
    );
}

export default App;