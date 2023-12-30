// 1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code. 
// https://github.com/alura-cursos/js-curso-2.git


/* 2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio. */

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

/* 3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado. */

function verificarConsole() {
  console.log('O botão foi clicado');
}


/* 4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. */

function verificarAlerta() {
  alert('Eu amo JavaScript');
}

/* 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. */

function verificarPrompt() {
  let nomeDacidade = prompt('Em que cidade você esteve?');

  alert(` Estive em ${nomeDacidade}, e lembrei de você!`);
}



// 6. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
 

/* Utilizando a function Number para transformar uma variável que veio do prompt, do tipo string em tipo number no JavaScript, podemos usar a função Number(). A função Number() converte uma string para um número inteiro ou um número com casas decimais.*/

function somar() {
  alert('Essa função soma 2 números e exibe o resultado da soma em um alerta');
  let numero1 = Number(prompt('Digite o primeiro número: '));
  let numero2 = Number(prompt('Digite o segundo número'));
  let resultado = numero1 + numero2;
  alert(`A soma de ${numero1} + ${numero2} é igual a ${resultado}`);
}

/* Outra forma de converter uma variável que veio do prompt, do tipo string em tipo number no JavaScript, é usar a função parseInt(). A função parseInt() converte uma string para um número inteiro.*/

// function somar() {

//   alert('Essa função soma 2 números e exibe o resultado da soma em um alerta');
 
//   let numero1 = parseInt(prompt('Digite o primeiro número: '));
//   let numero2 = parseInt(prompt('Digite o segundo número'));
//   let resultado = numero1 + numero2;
//   alert(`A soma de ${numero1} + ${numero2} é igual a ${resultado}`);
// }