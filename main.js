function adivinhacao() {
  let secretNumber = Number(Math.floor(Math.random() * 10 + 1));
  let typedNumber = document.getElementsByName("btnAdivinhar")[0].value;

  if (
    getFieldValueByName("btnAdivinhar") < 1 ||
    getFieldValueByName("btnAdivinhar") > 10
  ) {
    fillLabel("lbl-result", `Número inválido: ${typedNumber}`);
    return;
  }

  let result = document.getElementsByClassName("lbl-result")[0];
  let correct = secretNumber == typedNumber;
  if (correct) fillLabel("lbl-result", "Parabéns! Você acertou");
  else
    fillLabel(
      "lbl-result",
      `Poxa...tente novamente! O número era ${secretNumber}`
    );
}

function getFieldValueByName(name) {
  return document.getElementsByName(name)[0].value;
}

function fillLabel(name, text) {
  document.getElementsByName(name)[0].innerHTML = text;
}

function isBissexto(year) {
  let formattedYear = Number(year);
  return (
    formattedYear % 4 === 0 &&
    (formattedYear % 100 > 0 || formattedYear % 400 === 0)
  );
}

function verificarBissexto() {
  let year = Number(getFieldValueByName("btnYear"));
  if (isNaN(year)) {
    fillLabel("lbl-result", `Ano inválido!`);
    return;
  }

  let bissexto = isBissexto(year);
  let message = "";
  if (bissexto) message = `O ano ${year} <b>É</b> bissexto!`;
  else message = `O ano ${year} <b>NÃO</b> é bissexto!`;

  fillLabel("lbl-result", message);
}

function mediaEscolar() {
  let nota01 = parseFloat(getFieldValueByName("nota01"));
  let nota02 = parseFloat(getFieldValueByName("nota02"));
  let nota03 = parseFloat(getFieldValueByName("nota03"));
  let nota04 = parseFloat(getFieldValueByName("nota04"));

  if (isNaN(nota01) || isNaN(nota02) || isNaN(nota03) || isNaN(nota04)) {
    fillLabel("lbl-result", "É preciso digitar todas as notas!");
    return;
  }

  let media = (nota01 + nota02 + nota03 + nota04) / 4;
  let message =
    media >= 7 ? "Aprovado!" : media < 5 ? "Reprovado!" : "Recuperação!";
  fillLabel("lbl-result", message);
}

function gorjeta() {
  let bill = parseFloat(getFieldValueByName("valorConta"));
  let avaliation = document.querySelector('input[name="satisfacao"]:checked');
  let message = "";
  if (isNaN(bill)) message = "O valor da conta é obrigatório";
  if (avaliation == null)
    message == ""
      ? (message = "A avaliação é obrigatória")
      : (message += "</br> A avaliação é obrigatória");

  if (message != "") {
    fillLabel("lbl-result", message);
    return;
  }

  let fullBill =
    avaliation.value == "BOM"
      ? bill + bill * 0.1
      : avaliation.value == "OTIMO"
      ? bill + bill * 0.15
      : bill + bill * 0.2;
  fillLabel("lbl-result", `O valor da conta é R$: ${fullBill.toFixed(2)}`);
}

function saudar() {
  let currentHour = new Date().getHours();
  let message = "";
  if (currentHour >= 0 && currentHour < 12) message = "Bom dia!";
  else if (currentHour < 18) message = "Boa tarde";
  else message = "Boa noite!";

  fillLabel("lbl-result", message);
}
