var dataDeAniversario = [5, 6, 1997];

// Função para transformar a data de hoje em um array
function dataDeHoje(dia, mes, ano) {
  var hoje = [dia, mes, ano];
  if (dataDeAniversario[1] === hoje[1] && dataDeAniversario[0] === hoje[0]) {
    console.log("Hoje é seu aniversário!");
  }
  return hoje;
}

var hoje = dataDeHoje(16, 5, 2025);
var diaHoje = hoje[0];
var mesAtual = hoje[1];

// Array com o número de dias em cada mês (considerando não bissexto)
const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Função para calcular os dias restantes do mês atual
function diasRestantesMesAtual() {
  return diasDoMes[mesAtual - 1] - diaHoje;
}

// Soma os dias dos meses intermediários
function somarDiasEntreMeses(inicio, fim) {
  let total = 0;
  for (let i = inicio; i < fim; i++) {
    total += diasDoMes[i];
  }
  return total;
}

let diasRestantes = 0;

if (
  mesAtual < dataDeAniversario[1] ||
  (mesAtual === dataDeAniversario[1] && diaHoje < dataDeAniversario[0])
) {
  // Aniversário ainda este ano
  diasRestantes =
    diasRestantesMesAtual() +
    somarDiasEntreMeses(mesAtual, dataDeAniversario[1] - 1) +
    dataDeAniversario[0];
} else if (
  mesAtual === dataDeAniversario[1] &&
  diaHoje === dataDeAniversario[0]
) {
  console.log("Hoje é seu aniversário!");
} else {
  // Aniversário já passou — contar até o do próximo ano
  let diasRestantesAnoAtual =
    diasRestantesMesAtual() + somarDiasEntreMeses(mesAtual, 12);
  let diasInicioProximoAno = somarDiasEntreMeses(0, dataDeAniversario[1] - 1);
  diasRestantes =
    diasRestantesAnoAtual + diasInicioProximoAno + dataDeAniversario[0];
}

if (diasRestantes > 0) {
  console.log("Faltam " + diasRestantes + " dias para o seu aniversário!");
}
