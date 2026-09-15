// let nome = "Diogo"
// let idade = 30

// //Concatenação

// console.log("nome: " + nome + ", idade: " + idade);

// //Interpolação

// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores

// let numero = 53 //String

// let convertido = Number(numero) //converte o valor para number

// console.log(typeof convertido);

//! OPERADORES RELACIONAIS


// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALMENTE DE VALOR E TIPO DE DADO
// "10" === 10 -> false

//let opcao 2 

// switch(opcao2) {
//     case1:
//     hedhashdhahd
//     break;
//     case2:
// }



//ESTRUTURA DE REPETICAO

// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(fruta));

//! FUNCOES NATIVAS JS

//FUNCÃO MAP()
//Percorre uma lista e cria uma nova lista com base em uma condicao

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// numeros dobrados = {2, 4, 6, 8}

// console.log(numerosDobrados)

// ou assim
// Arrow function com retorno implicito

// let numerosDobradosArrow = numeros.map(num => num * 2)

// Filter 
// Filtra os elementos com base em uma condicao

// let numeros = [5, 10, 15, 20]

// let maioresQueDez = numeros.filter(num => num > 10)

// maioresQueDez = [15, 20]
// console.log(maioresQueDez);

// REDUCE
// Reduz os valores de um array para um unico valor

// let numeros = [1, 2, 3, 4]


//Acumulador inicia em 0
//variavel auxiliar

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)

//acumular comeca em 0 e soma com o auxiliar ate o ultimo valor do array

// console.log(soma)

//FIND
//Retorna o primeiro elemento que atende a condicao

// let produtos = [
//     {id: 1, nome: "Teclado", preço: 50}, //produto
//     {id: 2, nome: "Mouse", preço: 30},
//     {id: 2, nome: "Caderno", preço: 30}
// ]

// let item = produtos.find(produto => produto.id === 2)

// console.log(item);
