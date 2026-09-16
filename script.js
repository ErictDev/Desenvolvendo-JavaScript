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

//Diferenca entre filter e find 
//Find -> retorna somente o primeiro elemento que ele encontra com a condição
//Filter -> retorna todos os elementos que encontra com a condição
//Arrow function  /  função lambda

// let itemFiltrado = produtos.filter(produto => produto.id === 2)

// console.log(itemFiltrado);

// let frase = "JavaScript é top"

// let palavras = frase.split("")
// console.log(palavras);

//TRIM
//Trim remove espaços no inicio e final da string

// let nome = "     Paulo"
// let nomeLimpo = nome.trim()

// console.log(nome);
// console.log(nomeLimpo);

//INCLUDES
//Verifica se existe um valor dentro de uma lista e retorna um booleano
//Verdadeiro ou falso

// let frutas = ["maçã", "banana"]

// let frutasIncludes = frutas.includes("maçã")
// console.log(frutasIncludes); //true

//toLowerCase() -> Transforma o texto em minusculo
//toUpperCase() -> Transforma o texto em maisuculo
// let nome = "KESSIA"
// let cargo = "instrutora"

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

// FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// console.log(nomes);

// nomes.forEach(nome => console.log(nome));

// SOME
// Verifica se pelo menos um item atende a condição
// retorna booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar); // true

//  EVERY
//  Verifica se TODOS os elementos atendem a condição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

// SORT
// Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4];
// let letras = ["c", "a", "x", "h"];

//para letras
// letras.sort();
// console.log(letras);

//para números
// numeros.sort((a, b) => a - b);
// console.log(numeros);

//Reverse
//Inverta a ordem dos elementos no array
// let numeros = [1, 2, 3]

// numeros.reverse()
// console.log(numeros);

// Join
//  junta os elementos de um array em uma string

// let palavras = ["js", "é", "top"]

// let frase = palavras.join(" ")
// console.log(frase);

//Adicionando e removendo elementos do array
// PUSH
// POP 
// SHIFT
// UNSHIFT

// let lista = ["A", "B"]

// PUSH
// lista.push("C") adiciona a lista
// console.log(lista);

// POP -> Remove o elemento no final da lista
// lista.pop()
// console.log(lista);

// SHIFT -> Remove elementos no começo da lista

// lista.shift() //Remove
// console.log(lista);

// UNSHIFT -> Adicionar elementos no inicio da lista

// lista.unshift("A")
// console.log(lista);

//SLICE 
// Cria uma cópia de uma parte da lista

/* array.slice(inicial, final)
    inicial -> onde começa
    final -> once termina
*/
//  let numeros = [1, 2, 3, 4]

// let parte = numeros.slice(1, 3) //posições do array
// console.log(parte);

//SPLICE
// Remove ou adiciona elementos em qualquer posição

/*
    array.splice(index, posição, count, iteml, ..., itemx)

    index -> indice(posição do elemento no array)
    count -> numero de elementos a sereme removidos (pode ser 0)
    iteml -> itemX  -> items a serem adicionados
*/
// let numeros = [1, 2, 3, 4]

//removendo elementos sem adicionar
// numeros.splice(1, 1)
// console.log(numeros);

//removendo elementos e adicionando mais dois elementos 

// let frutas = ["Banana", "Laranja", "Maçã", "Manga"]

// frutas.splice(0, 3, "Limão", "Kiwi")
// console.log(frutas);

//Adicionando elementos sem remover

// frutas.splice(2, 0, "Limão", "Kiwi")
// console.log(frutas);

//Replace 
//Substitiu uma parte da string 

/*
    replace(valorProcurado, "valorQueSubstitiu" )
*/

// let texto = "Ola, mundo!"

// let novoTexto = texto.replace("mundo", "cliente")
// console.log(novoTexto);

// NOSSAS FUNÇÕES 

//Funcao comum

// function exibirMensagem() {
//     console.log("Bem vindo(a)!");    
// }

// exibirMensagem()

//funcoes com parâmetros
// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`);
// }

// cumprimentar("Ana")
// cumprimentar("Carlos")

//funcao com ais de um parâmetro
// function somar(n1, n2) {
//     soma = n1 + n2
//     console.log(soma);
// }

// somar(2, 3)

// const somar = (n1, n2) => n1 + n2

// console.log(somar(1,2));

//PROMPT
// receber ou solicita uma informação do usuário
// o valor recebido pelo prompt normalmente é string

// let nome = prompt("Digite o seu nome")
// console.log(nome);
// alert(nome)

//recebendo um numero e convertendo

// Number() -> converte de forma genérica
// let idade = Number(prompt("Digite sua idade: "))

// ParseInt() -> Converte o valor para um numero inteiro
// idade = parseInt(prompt("Digite sua idade: "))

// parseFloat() -> converte o valor para numeor decimal/ponto flutuante
// idade = parseFloat(prompt("Digite sua idade: "))

