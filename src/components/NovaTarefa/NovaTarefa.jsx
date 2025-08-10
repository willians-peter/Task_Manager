import React, { useState } from "react";
import "./NovaTarefa.css";

function NovaTarefa({ setTarefas, tarefas }) {
  const [descricao, setDescricao] = useState("");
  const [turno, setTurno] = useState("");

  const entradaTarefa = (e) => {
    e.preventDefault();
    if (!descricao || !turno) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    const novaTarefa = {
      id: Date.now(),
      descricao,
      turno,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setDescricao("");
    setTurno("");
  };

  return (
    <div className="tarefa-form">
  <form onSubmit={entradaTarefa}>
    <div className="campo">
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
    </div>
    <button type="submit">Adicionar</button>
  </form>
</div>
  );
}

export default NovaTarefa;