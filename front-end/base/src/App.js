import { useState } from 'react';


function Gerenciador(props) {
  return (
        <li>
          <span
            onClick={() => props.handleComplete(props.id)}
            style={{ 
              textDecoration: props.completa ? 'line-through' : '', 
              color: props.completa ?'#D1D2DA': '#000' 
            }}
          >
            {props.children}
          </span>
          <button onClick={() => props.handleDelete(props.id)}>X</button>
        </li>
  );
}

function Controles(props) {
  return (
    <ul className="controles">
      <li> {props.restantes} itens restantes</li>
      <li>
        <span
          onClick={props.onGetAllTasks}
        >Todas</span>
        <span
          onClick={props.onGetActiveTasks}
        >Ativas</span>
        <span
          onClick={props.onGetCompleteTasks}
        >
          Completada</span>
      </li>
      <li
        onClick={props.onCleanCompleteTasks}
      >Limpar completadas</li>
    </ul>
  );
}



function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasFiltradas, setTarefasFiltradas] = useState([]);
  const [lista, setLista] = useState("Todas");
  const [qtdTarefasRestantes, setQtdTarefasRestantes] = useState(0);

  function handleKeyDown(event){
    if (event.key !== 'Enter' || event.target.value === '') return;
    const listaTarefas = [...tarefas, { id: Math.random(), texto: event.target.value, completa: false }];
    setTarefas(listaTarefas);
    setQtdTarefasRestantes((prevState) => prevState + 1);
    event.target.value = '';
  }


  function handleDelete(id){
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  }


  function handleComplete(id){
    // const novasTarefas = [...tarefas];
    // const tarefaCompletada = novasTarefas.find(tarefa => tarefa.id === id);
    // tarefaCompletada.completa = !tarefaCompletada.completa;

    setTarefas((prevState) => prevState.map(tarefa => tarefa.id === id ? {...tarefa, completa: true} : tarefa));
  }

  function handleGetCompleteTasks(){
    const tarefasCompletas = tarefas.filter(tarefa => tarefa.completa === true);
    setTarefasFiltradas(tarefasCompletas);
    setLista("Filtrado");
    setQtdTarefasRestantes(0);
  }

  function handleGetActiveTasks() {
    const tarefasCompletas = tarefas.filter(tarefa => tarefa.completa === false);
    setTarefasFiltradas(tarefasCompletas);
    setLista("Filtrado");
    setQtdTarefasRestantes(tarefasCompletas.length);
  }

  function handleGetAllTasks(){
    setLista("Todas");
    setQtdTarefasRestantes(tarefas.filter(tarefa => !tarefa.completa).length);
  }

  function handleCleanCompleteTasks(){
    setTarefas((prevState) => prevState.filter(tarefa => tarefa.completa === false));
    setTarefasFiltradas((prevState) => prevState.filter(tarefa => tarefa.completa === false));
  }
  

  return (
    <div className="App">
       <h2>Gerenciador de Tarefas</h2>
       <input type="text" onKeyDown={handleKeyDown} />
       <ul className="tarefas">
        {lista === "Filtrado" ? (
          tarefasFiltradas.map(tarefa => (
            <Gerenciador
              key={tarefa.id}
              id={tarefa.id}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              completa={tarefa.completa}>
              {tarefa.texto}
            </Gerenciador>
          ))
        ) : (
            tarefas.map(function (tarefa) {
                return (
                  <Gerenciador
                    key={tarefa.id}
                    id={tarefa.id}
                    handleDelete={handleDelete}
                    handleComplete={handleComplete}
                    completa={tarefa.completa}>
                    {tarefa.texto}
                  </Gerenciador>
                );
              })
        )}
        <Controles 
          restantes={qtdTarefasRestantes}
          onGetCompleteTasks={handleGetCompleteTasks}
          onGetAllTasks={handleGetAllTasks}
          onGetActiveTasks={handleGetActiveTasks}
          onCleanCompleteTasks={handleCleanCompleteTasks}
        />
       </ul>
     </div>
  );
}

export default App;


// {
//   tarefas.map(function (tarefa) {
//     return (
//       <Gerenciador
//         key={tarefa.id}
//         id={tarefa.id}
//         handleDelete={handleDelete}
//         handleComplete={handleComplete}
//         completa={tarefa.completa}>
//         {tarefa.texto}
//       </Gerenciador>
//     );
//   })
// }