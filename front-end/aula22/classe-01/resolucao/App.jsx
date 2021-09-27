import React, { useEffect, useState } from "react";
import "./App.css";

function Cards(props) {
    if (props.paises === undefined) {
        return (
            <div>
                <input type="text" />
            </div>
        );
    } else {
        return props.paises.map((element) => {
            return (
                <div>
                    <img src={element.flags[0]} alt="" />
                    <h1>{element.name.common}</h1>
                </div>
            );
        });
    }
}

function App() {
    const [paises, setPaises] = useState([]);

    const [responseApi, setResponseApi] = useState([]);

    const api = useEffect(() => {
        const api = fetch("https://restcountries.com/v3/all");

        api.then(function (retorno) {
            const promisseRetorno = retorno.json();

            promisseRetorno.then(function (body) {
                setPaises(body);
                setResponseApi(body);
            });
        });
    }, []);

    const [pais, setPais] = useState([]);

    useEffect(() => {
        let arr = [];

        const pesquisa = paises.filter(e => String(e.name.common).toUpperCase() === String(pais).toUpperCase())

        if (pesquisa.length > 0) {
            setPaises(pesquisa)
        } else {
            setPaises(responseApi)
        }

    }, [pais]);

    return (
        <div className="App">
            <input type="text" onChange={(event) => setPais(event.target.value)} />
            <div>
                <Cards paises={paises} />
            </div>
        </div>
    );
}

export default App;