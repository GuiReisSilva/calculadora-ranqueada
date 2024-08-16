const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularNivelRankeadas(saldoVitorias) {
  let nivel;

  // Determinando o nível do jogador com base no saldo de vitórias
  if (saldoVitorias < 10) {
    nivel = 'Ferro';
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = 'Bronze';
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = 'Prata';
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = 'Ouro';
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = 'Diamante';
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = 'Lendário';
  } else if (saldoVitorias >= 101) {
    nivel = 'Imortal';
  } else {
    nivel = 'Desconhecido';
  }

  // mensagem final
  console.log(
    `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`,
  );
}

function nomeDoHeroi() {
  rl.question('Qual é o nome do seu herói? ', (nome) => {
    console.log(`O nome do seu herói é ${nome}`);

    rl.question('Quantas vitórias você conseguiu? ', (vitorias) => {
      rl.question('Quantas derrotas você teve? ', (derrotas) => {
        vitorias = parseInt(vitorias); // Convertendo a entrada para número
        derrotas = parseInt(derrotas);

        const saldoVitorias = vitorias - derrotas;

        calcularNivelRankeadas(saldoVitorias);

        rl.close();
      });
    });
  });
}

// Chama a função nomeDoHeroi para iniciar o processo
nomeDoHeroi();
