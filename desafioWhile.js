const prompt = require("prompt-sync")();
const tentativas = 5;
let tentativaAtual = 0;
let acertou = false;
const numeroSecreto = Math.floor(Math.random() * 10 + 1);
let entrada;
do {
  tentativaAtual++;
  if (tentativaAtual == 1)
    entrada = Number(prompt("Adivinhe o número de 1-10: "));
  else
    entrada = Number(
      prompt(
        `Não foi dessa vez, tentativa ${tentativaAtual} de ${tentativas}, tente novamente... `
      )
    );

  if (parseInt(entrada) == numeroSecreto) {
    console.log("Você acertou! O número era mesmo " + numeroSecreto);
    acertou = true;
    break;
  }
} while (tentativaAtual < tentativas || numeroSecreto == parseInt(entrada));
if (!acertou) console.log("Você não acertou, o número era: " + numeroSecreto);
