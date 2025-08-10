import React, { useState, useEffect } from "react";
import NovaTarefa from "../../NovaTarefa/NovaTarefa";
import "./TarefaPage.css";

function TarefaPage() {
  const [tarefas, setTarefas] = useState(() => {
  const tarefasStorage = localStorage.getItem("tarefas");
  return tarefasStorage ? JSON.parse(tarefasStorage) : [];
});

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const toggleConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const tarefasManha = tarefas.filter((tarefa) => tarefa.turno === "Manhã");
  const tarefasTarde = tarefas.filter((tarefa) => tarefa.turno === "Tarde");
  const tarefasNoite = tarefas.filter((tarefa) => tarefa.turno === "Noite");

  return (
    <div>
      <NovaTarefa setTarefas={setTarefas} tarefas={tarefas} />
      <div className="tarefa-columns">
        <div className="tarefa-column">
          <h2>Manhã</h2>
          <ul>
            {tarefasManha.map((tarefa) => (
              <li key={tarefa.id}>
                {tarefa.descricao}
                <label htmlFor={`concluida-${tarefa.id}`} className="concluida-label">Concluída</label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => toggleConcluida(tarefa.id)}
                />
                
                
              </li>
            ))}
          </ul>
        </div>
        <div className="tarefa-column">
          <h2>Tarde</h2>
          <ul>
            {tarefasTarde.map((tarefa) => (
              <li key={tarefa.id}>
                {tarefa.descricao}
                <label htmlFor={`concluida-${tarefa.id}`} className="concluida-label">Concluída</label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => toggleConcluida(tarefa.id)}
                />
                
              </li>
            ))}
          </ul>
        </div>
        <div className="tarefa-column">
          <h2>Noite</h2>
          <ul>
            {tarefasNoite.map((tarefa) => (
              <li key={tarefa.id}>
                {tarefa.descricao}
                <label htmlFor={`concluida-${tarefa.id}`} className="concluida-label">Concluída</label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => toggleConcluida(tarefa.id)}
                />
                
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tarefa-resumo">
  <p>
    Tarefas manhã: {tarefasManha.filter((tarefa) => tarefa.concluida).length} concluídas de {tarefasManha.length}no total.
  </p>
  <p>
    Tarefas tarde: {tarefasTarde.filter((tarefa) => tarefa.concluida).length} concluídas de {tarefasTarde.length} no total.
  </p>
  <p>
    Tarefas noite: {tarefasNoite.filter((tarefa) => tarefa.concluida).length} concluídas de {tarefasNoite.length}no total.
  </p>
</div>
<div className="tarefa-progresso">
  <div
    className="tarefa-progresso-barra"
    style={{
      width: `${(tarefas.filter((tarefa) => tarefa.concluida).length / tarefas.length) * 100}%`,
    }}
  ></div>
  <span className="tarefa-progresso-texto">
    {Math.round(
      (tarefas.filter((tarefa) => tarefa.concluida).length / tarefas.length) * 100
    )}% concluído
  </span>
</div>
    </div>
    
  );
}

export default TarefaPage;