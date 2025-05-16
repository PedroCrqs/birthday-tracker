// Adiciona um formulário para pegar a data de aniversário via inputs HTML
document.getElementById("formData").addEventListener("submit", function (e) {
  e.preventDefault();

  // Pega os valores dos inputs data de aniversário
  var diaAniversario = parseInt(document.getElementById("dia").value, 10);
  var mesAniversario = parseInt(document.getElementById("mes").value, 10);

  // Data atual do sistema
  var hojeData = new Date();
  var diaHoje = hojeData.getDate();
  var mesAtual = hojeData.getMonth() + 1;

  // Numero de dias de cada mês em um array
  const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verifica quantos dias faltam para acabar o mês atual
  function diasRestantesMesAtual() {
    return diasDoMes[mesAtual - 1] - diaHoje;
  }

  // Soma todos os dias contidos nos meses entre o mês atual e o mês do aniversário
  function somarDiasEntreMeses(inicio, fim) {
    let total = 0;
    for (let i = inicio; i < fim; i++) {
      total += diasDoMes[i];
    }
    return total;
  }

  let diasRestantes = 0;

  //Fórmula final para calcular os dias restantes
  //Se o aniversário é ainda esse ano
  if (
    mesAtual < mesAniversario ||
    (mesAtual === mesAniversario && diaHoje < diaAniversario)
  ) {
    diasRestantes =
      diasRestantesMesAtual() +
      somarDiasEntreMeses(mesAtual, mesAniversario - 1) +
      diaAniversario;
  } // Se o aniversário é hoje
  else if (mesAtual === mesAniversario && diaHoje === diaAniversario) {
    console.log("Hoje é seu aniversário!");
    return;
  } // Se o aniversário é no próximo ano
  else {
    let diasRestantesAnoAtual =
      diasRestantesMesAtual() + somarDiasEntreMeses(mesAtual, 12);
    let diasInicioProximoAno = somarDiasEntreMeses(0, mesAniversario - 1);
    diasRestantes =
      diasRestantesAnoAtual + diasInicioProximoAno + diaAniversario;
  }

  if (diasRestantes > 0) {
    console.log("Faltam " + diasRestantes + " dias para o seu aniversário!");
  }
});
