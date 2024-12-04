let cabecalho = ["Código", "Nome", "Preço"];
let produto = ["ABC123", "Fone de Ouvido", 150.0];

console.log(
  `Detalhes do Produto:
    ${cabecalho[0]} : ${produto[0]};
    ${cabecalho[1]} : ${produto[1]};
    ${cabecalho[2]} : ${produto[2].toFixed(2)};    
    `
);

console.log(`\n\n\n\n*******SPLICE********`);
let letras = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letras);
console.log(
  `\nRetorna os elementos DELETADOS a partir de um index + quantidade de elementos deletados\n`
);
console.log(`splice(2,4)\n`);

console.log(letras.splice(2, 4));

console.log(`\n\n\n\n*******SLICE********`);
let letrasv2 = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letrasv2);
console.log(
  `\nRetorna um conjunto SELECIONADO de elementos a partir de um index inicial + index final(não inclusivo)\n`
);
console.log(`slice(2,4)\n`);

console.log(letrasv2.slice(2, 4));

// 1. Você está responsável por atualizar um catálogo de tintas. O array `cores` armazena as cores disponíveis: `"Vermelho"`, `"Verde"`, `"Azul"`. Recentemente, foi decidido que a cor verde será substituída por amarelo. Sua tarefa é modificar o array para refletir essa mudança e exibir a terceira cor disponível no catálogo.
// 2. Um zoológico precisa organizar a lista de seus animais. Atualmente, a lista `animais` contém: `"Gato"`, `"Cachorro"`, `"Pássaro"`. O zoológico adquiriu um novo animal, um elefante, e ele deve ser adicionado ao final da lista. Além disso, o zoológico decidiu transferir o gato para outro local, então ele deve ser removido da lista. Exiba a lista atualizada.
// 3. Durante um levantamento internacional, foi criada uma lista de países chamada `paises`, que contém: `"Brasil"`, `"Argentina"`, `"Chile"`, `"Uruguai"`. Sua tarefa é contar quantos países estão listados e exibir essa informação.
// 4. Em uma pesquisa, você tem um array de números chamado `numeros`: `[10, 20, 30, 40, 50]`. Você precisa localizar o índice do número `30` dentro do array para usar essa informação em um relatório para encontrar o índice e exibi-lo.
// 5. Uma lista de alimentos contém: `"Arroz"`, `"Feijão"`, `"Batata"`, `"Macarrão"`, `"Carne"`. Para uma receita específica, você só precisa dos ingredientes `"Feijão"` e `"Batata"`. Crie uma nova lista que contenha apenas esses dois ingredientes e exiba o resultado.

// Exercício 1
const cores = ["Vermelho", "Verde", "Azul"];
cores[cores.indexOf("Verde")] = "Amarelo";
console.log("Cores atualizadas:", cores);
console.log("Terceira cor:", cores[2]);

// Exercício 2
const animais = ["Gato", "Cachorro", "Pássaro"];
animais.push("Elefante");
animais.splice(animais.indexOf("Gato"), 1);
console.log("Lista de animais atualizada:", animais);

// Exercício 3
const paises = ["Brasil", "Argentina", "Chile", "Uruguai"];
console.log("Número de países:", paises.length);

// Exercício 4
const numeros = [10, 20, 30, 40, 50];
console.log("O índice do número 30 é:", numeros.indexOf(30));

// Exercício 5
const alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
const ingredientes = alimentos.filter(
  (item) => item === "Feijão" || item === "Batata"
);
console.log("Ingredientes necessários:", ingredientes);
