function addTask() {
  // Captura os valores dos campos de entrada
  const task = document.getElementById("task").value;
  const creationDate = document.getElementById("creation-date").value;
  const completionDate = document.getElementById("completion-date").value;
  const status = document.getElementById("status").value;

  // Verifica se todos os campos foram preenchidos
  if (!task || !creationDate || !completionDate || !status) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Cria uma nova linha na tabela
  const tableBody = document.getElementById("task-table-body");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
          <td>${task}</td>
          <td>${creationDate}</td>
          <td>${completionDate}</td>
          <td>
            <select class="status-select">
              <option value="Pendente" ${
                status === "Pendente" ? "selected" : ""
              }>Pendente</option>
              <option value="Concluído" ${
                status === "Concluído" ? "selected" : ""
              }>Concluído</option>
            </select>
          </td>
          <td>    
          <button class="delete-button" onclick="deleteTask(this)">Excluir</button>
          </td>
        `;

  // Adiciona a nova linha ao corpo da tabela
  tableBody.appendChild(newRow);

  // Limpa os campos de entrada
  document.getElementById("task").value = "";
  document.getElementById("creation-date").value = "";
  document.getElementById("completion-date").value = "";
  document.getElementById("status").value = "Pendente";
}

// Função para deletar uma tarefa
function deleteTask(button) {
  // Remove a linha correspondente ao botão clicado
  const row = button.parentElement.parentElement;
  row.remove();
}
