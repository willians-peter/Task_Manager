[M01S09] Exercício 1: Gerenciador de tarefas - Adição de tarefas
Descrição
🔧 Objetivo: Criar um componente para adicionar tarefas diárias a um gerenciador de tarefas.

Requisitos:

Crie um componente chamado NovaTarefa.

Este componente deve conter:

Um campo de texto para o descrição da tarefa;

Um seletor (dropdown ou radio) para escolher o período: Manhã, Tarde ou Noite;

Um botão “Adicionar”.

Ao clicar no botão:

A nova tarefa deve ser armazenada em um state do componente principal (App), que armazena a lista completa de tarefas.

💡 Dica: Use useState para armazenar a lista de tarefas no componente App, e passe uma função de adição como prop para o NovaTarefa.