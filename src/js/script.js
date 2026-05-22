// Array de objetos representando os vinhos da vinícola
const vinhos = [
  {
    nome: "Agnello Reserva",
    tipo: "tinto",
    safra: 2018,
    estoque: 12
  },
  {
    nome: "Branco da Serra",
    tipo: "branco",
    safra: 2021,
    estoque: 4
  },
  {
    nome: "Rose Aurora",
    tipo: "rose",
    safra: 2022,
    estoque: 7
  },
  {
    nome: "Tinto Imperial",
    tipo: "tinto",
    safra: 2016,
    estoque: 3
  }
];

// Função para adicionar um novo vinho ao array
function adicionarVinho(nome, tipo, safra, estoque) {
  const novoVinho = {
    nome: nome,
    tipo: tipo,
    safra: safra,
    estoque: estoque
  };

  vinhos.push(novoVinho);

  console.log(`Vinho adicionado com sucesso: ${novoVinho.nome}`);
}

// Função para listar todos os vinhos cadastrados usando forEach
function listarVinhos(listaDeVinhos) {
  console.log("========================================");
  console.log("LISTA COMPLETA DE VINHOS");
  console.log("========================================");

  listaDeVinhos.forEach((vinho, indice) => {
    console.log(`Vinho ${indice + 1}`);
    console.log(`Nome: ${vinho.nome}`);
    console.log(`Tipo: ${vinho.tipo}`);
    console.log(`Safra: ${vinho.safra}`);
    console.log(`Estoque: ${vinho.estoque} unidade(s)`);
    console.log("----------------------------------------");
  });
}

// Função para filtrar os vinhos com estoque abaixo de 5 usando filter
function obterVinhosComEstoqueBaixo(listaDeVinhos) {
  return listaDeVinhos.filter((vinho) => vinho.estoque < 5);
}

// Função para exibir no console os vinhos com estoque baixo
function exibirVinhosComEstoqueBaixo(listaDeVinhos) {
  console.log("========================================");
  console.log("VINHOS COM ESTOQUE ABAIXO DE 5");
  console.log("========================================");

  if (listaDeVinhos.length === 0) {
    console.log("Nenhum vinho esta com estoque baixo.");
    console.log("----------------------------------------");
    return;
  }

  listaDeVinhos.forEach((vinho) => {
    console.log(`Nome: ${vinho.nome}`);
    console.log(`Tipo: ${vinho.tipo}`);
    console.log(`Safra: ${vinho.safra}`);
    console.log(`Estoque atual: ${vinho.estoque} unidade(s)`);
    console.log("----------------------------------------");
  });
}

// Função para calcular o estoque total da vinícola usando reduce
function calcularEstoqueTotal(listaDeVinhos) {
  return listaDeVinhos.reduce((total, vinho) => total + vinho.estoque, 0);
}

// Função para obter os nomes dos vinhos em caixa alta usando map
function obterNomesEmCaixaAlta(listaDeVinhos) {
  return listaDeVinhos.map((vinho) => vinho.nome.toUpperCase());
}

// Função para exibir os nomes dos vinhos em caixa alta
function exibirNomesEmCaixaAlta(nomes) {
  console.log("========================================");
  console.log("NOMES DOS VINHOS EM CAIXA ALTA");
  console.log("========================================");

  nomes.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`);
  });

  console.log("----------------------------------------");
}

// Função para exibir o estoque total no console
function exibirEstoqueTotal(estoqueTotal) {
  console.log("========================================");
  console.log("ESTOQUE TOTAL DA VINICOLA");
  console.log("========================================");
  console.log(`Estoque total: ${estoqueTotal} unidade(s)`);
  console.log("----------------------------------------");
}

// Função para exibir um resumo final usando alert
function exibirResumoFinal(totalVinhos, totalEstoque, totalEstoqueBaixo) {
  alert(
    `Checkpoint 03 - Vinheria Agnello\n\n` +
    `Cadastro e analise concluidos!\n\n` +
    `Total de vinhos cadastrados: ${totalVinhos}\n` +
    `Estoque total da vinicola: ${totalEstoque} unidade(s)\n` +
    `Vinhos com estoque abaixo de 5: ${totalEstoqueBaixo}\n\n` +
    `Abra o console do navegador para visualizar os detalhes.`
  );
}

// Função principal responsável por executar todo o sistema
function executarSistema() {
  alert(
    "Bem-vindo ao sistema da Vinheria Agnello!\n\n" +
    "Os dados serao processados automaticamente.\n" +
    "Em seguida, consulte o console do navegador para visualizar os resultados."
  );

  // Adicionando novos vinhos ao array por meio da função criada
  adicionarVinho("Agnello Gran Selecao", "tinto", 2015, 2);
  adicionarVinho("Vale Dourado", "branco", 2020, 9);
  adicionarVinho("Rose Delicado", "rose", 2023, 5);

  // Listagem completa de vinhos
  listarVinhos(vinhos);

  // Filtragem dos vinhos com estoque abaixo de 5
  const vinhosComEstoqueBaixo = obterVinhosComEstoqueBaixo(vinhos);
  exibirVinhosComEstoqueBaixo(vinhosComEstoqueBaixo);

  // Cálculo do estoque total
  const estoqueTotal = calcularEstoqueTotal(vinhos);
  exibirEstoqueTotal(estoqueTotal);

  // Conversão dos nomes para caixa alta
  const nomesEmCaixaAlta = obterNomesEmCaixaAlta(vinhos);
  exibirNomesEmCaixaAlta(nomesEmCaixaAlta);

  // Exibição do resumo final
  exibirResumoFinal(vinhos.length, estoqueTotal, vinhosComEstoqueBaixo.length);
}

// Execução do sistema
executarSistema();