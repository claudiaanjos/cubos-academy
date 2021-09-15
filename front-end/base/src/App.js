import { useState } from 'react';


function Gerenciador(props) {
  return (
    <li>
      <span
        onClick={() => props.handleComplete(props.id)}
        style={{ textDecoration: props.completa ? 'line-through' : '' }}
      >
        {props.children}
      </span>
      <button onClick={() => props.handleDelete(props.id)}>x</button>
    </li>
  )
}



function App() {
  const [tarefas, setTarefas] = useState([]);

  function handleKeyDown(event){
    if (event.key !== 'Enter') return;

    const listaTarefas = [...tarefas, { id: Math.random(), texto: event.target.value, completa: false }];
    console.log(listaTarefas)
    setTarefas(listaTarefas);

    event.target.value = '';
  }

  function handleDelete(id){
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  }

  function handleComplete(id){
    const novasTarefas = [...tarefas];
    const tarefaCompletada = novasTarefas.find(tarefa => tarefa.id === id);
    tarefaCompletada.completa = !tarefaCompletada.completa;
    
    setTarefas(novasTarefas);
  }

  return (
    <div className="App">
       <h2>Gerenciador de Tarefas</h2>
       <input type="text" onKeyDown={handleKeyDown} />
       <ul>
        {tarefas.map(function(tarefa){
          return (
            <Gerenciador
              key={tarefa.id}
              id={tarefa.id}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              completa={tarefa.completa}
            >
              {tarefa.texto}
            </Gerenciador>
          );
        })}
       </ul>
     </div>
  );
}

export default App;
