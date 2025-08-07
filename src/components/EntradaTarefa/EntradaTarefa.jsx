import React, { useState } from "react";

function EntradaTarefa() {
  const [descricao, setDescricao] = useState("");
  const [turno, setTurno] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaTarefa = {
      id: Date.now(),
      descricao,
      turno,
    };
    setTarefas([...tarefas, novaTarefa]);
    setDescricao("");
    setTurno("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
        <select value={turno} onChange={(e) => setTurno(e.target.value)}>
          <option value="">Selecione o turno</option>
          <option value="Manhã">Manhã</option>
          <option value="Tarde">Tarde</option>
          <option value="Noite">Noite</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
      <h2>Tarefas:</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.descricao} ({tarefa.turno})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntradaTarefa;
