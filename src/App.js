import { useEffect, useState } from "react";
import Style from "./global.css";

function App() {

  const [ listaTarefas, setListaTarefas] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "", status: ""} );

  function addTarefa()
  {
      if( tarefa.texto !== "") {
        setListaTarefas([...listaTarefas, tarefa ]);
      }
  }

  function excluirTarefa( id )
  {
     const novaLista =  listaTarefas.filter( ( tarefa ) => tarefa.id !== id );
     setListaTarefas( novaLista );
  }

  function statusTarefa( id, status)
  {
      const index = listaTarefas.findIndex( ( tarefa ) => tarefa.id === id );
      listaTarefas[index].status = !status;
      setListaTarefas( [...listaTarefas] );
  }

  useEffect( () => {
      setTarefa( { id: "" , texto: "", status: "" } );
  }, [ listaTarefas ] )

  return (
    <>
        <header className="lista">
          <h1>Lista de Tarefas para Fazer:</h1>
        </header>
        <div>
          <input className="escreva" type="text" name="tarefa" placeholder="Escreva a sua tarefa..." value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false} ) }/>
          <button className="ver" onClick={addTarefa}>Ver tarefas</button>
        </div>
        <div className="tarefas">
          <ul className="resolver">
            {listaTarefas.map( (item, index) => (
              <li className="item"key={item.id}><div className="texto-agendamento">{item.texto}</div><button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluida' : 'Não Concluida' }</button> <button className="deletar" onClick={ () => excluirTarefa(item.id) }>Excluir</button></li>
            ))}
          </ul>
        </div>
    </>
  );
}

export default App;
