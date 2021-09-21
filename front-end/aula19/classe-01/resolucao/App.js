import { useState } from "react";


function Tarefa(props) {

    return (
        <li className={'liTarefa'}>
            <span
                onClick={() => props.completarTarefa(props.id)}
                className={props.completa ? 'line_through' : ''}
            // style={{textDecoration: props.completa ? 'line-through' : ''}}
            >
                {props.children}
            </span>
            <button onClick={() => props.handleClick(props.id)}>x</button>
        </li>
    )
}

function App() {

    const [arrLiPers, setArrLiPers] = useState([]);
    const [arrLi, setArrLi] = useState([]);

    //
    //

    function handleKey(event) {

        const newArr = [...arrLi, { id: Math.random() * 10, text: event.target.value, completa: false }]

        if (event.key === 'Enter') {
            setArrLi(newArr)
            setArrLiPers(newArr)
            event.target.value = '';
        }
    }

    //
    //

    function handleClick(id) {

        const newArr = arrLi.filter(element => {
            return element.id !== id
        });

        setArrLi(newArr)
        setArrLiPers(newArr)
    }

    //
    //

    function handleDelAllComplete() {

        const newArr = arrLiPers.filter(element => {
            return element.completa !== true
        });

        setArrLi(newArr)
        setArrLiPers(newArr)
    }

    //
    //

    function handleCompleteAll() {
        const newArr = arrLiPers.filter(element => {
            return element.completa === true
        });
        setArrLi(newArr)
    }

    //
    //

    function handleActiveAll() {
        const newArr = arrLiPers.filter(element => {
            return element.completa !== true
        });
        setArrLi(newArr)
    }

    //
    //

    function handleClickViewAll() {
        setArrLi(arrLiPers)
    }

    //
    //

    function completarTarefa(id) {
        const novasTarefas = [...arrLi];
        const achandoTarefaCompletada = novasTarefas.find(function (cadaTarefa) {
            return cadaTarefa.id === id
        });
        achandoTarefaCompletada.completa = !achandoTarefaCompletada.completa

        setArrLi(novasTarefas);
        console.log(arrLi)
    }


    return (
        <div>
            <h1>TAREFAS</h1>
            <input onKeyPress={(i) => handleKey(i)} type="text" />
            <ul className={'listaPrincipal'}>
                {arrLi.map(element => {
                    return (
                        <Tarefa
                            completa={element.completa}
                            id={element.id}
                            completarTarefa={completarTarefa}
                            handleClick={handleClick}
                        >
                            {element.text}
                        </Tarefa>
                    )
                })}
                <li className={'liRodape'}>
                    <button>
                        items restantes
                    </button>
                    <ul>
                        <li><button onClick={handleClickViewAll}>Todas</button></li>
                        <li><button onClick={handleActiveAll}>Ativa</button></li>
                        <li><button onClick={handleCompleteAll}>Completada</button></li>
                    </ul>
                    <button onClick={handleDelAllComplete}>
                        Limpar completadas
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default App;