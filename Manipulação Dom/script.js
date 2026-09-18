 

// const elementos = document.querySelectorAll(".texto")

//percorrendo a lista e imprimindo cada um dos elementos
// elementos.forEach(elemento => console.log(elemento))

//percorrendo a lista e pegando o texto do elemento (InnerText)
// elementos.forEach(elemento => console.log(elemento.innerText))

//alterando texto
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado"

    // elemento.textContent = "Alterado" vem com a formatação do elemento
// })

//Trocando as tags - InnerHtml
// elementos.forEach(elemento => {
//     elemento.innerHTML = "<h2>item<h2>"
// })

//trocar a cor do elemento
// elementos.forEach(elemento => {
//     elemento.style.color = "#0000FF"
// })


//EVENTOS COM JS
// o que são eventos? Ações do usuário

// Evento click
// const botao = document.getElementById("btn")
// botao.addEventListener("click", () => {
//     alert("Você clicou!")
// })


// Evento de digitação (input/ keyup)

// const campo = document.getElementById("campo")
// const resultado = document.getElementById("resultado")

//INPUT
// evento input -> dispara sempre que digita em tempo real
// campo.addEventListener("input", () => {

//  value -> o que esta sendo digitado dentro do campo
//     resultado.innerText = campo.value 
// })

// KEYUP

// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value 
// })

//Evento de mouse
// const elemento = document.getElementById("troca-cor")

// Mouseover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })

// Mouseout -> qunado ele sai do elemento
// elemento.addEventListener("mouseout", () => {
//     elemento.style.backgroundColor = "#0000FF"
//     elemento.style.backgroundColor = ""
// })

//mousemove
//pega a posição do mouse

// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientX}`);
// })

// EVENTO DE FORMULARIO (submit)

// const form = document.querySelector("form") //pegando direto pela tag form

// form.addEventListener("submit", (e) => {

    //Impede o comportamento padrão do formulario
//     e.preventDefault()

//     const nome = document.getElementById("nome").value 

//     console.log(`Nome: ${nome}`)
// })

//Criando elementos na pagina
// const novoElemento = document.createElement("p") //cria um elemento 1px
// novoElemento.innerText("Elemento novo criado.") //cria um texto no elemento

// const form = document.getElementById("form")

//estamos adicionando um elemento filho(a),  dentre do pai form
// form.appendChild(novoElemento)

//criar um botao
// const botao = document.createElement("button")
// botao.innerText = "Excluir elemento"

// form.appendChild(botao)

// botao.addEventListener("click", (e) => {
//     e.preventDefault()

//     novoElemento.remove()

//     form.removeChild(novoElemento)
// })

// Adicionando elementos em uma lista a partir de um input 
const input = document.getElementById("input");
const botao = document.getElementById("add");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {

    const valorDigitado =input.value //pega o valor que foi digitado na caixinha

    const li = document.createElement("li"); //criando<li>
    li.innerText = valorDigitado;

    //colocando o filho (li) dentro do pai 
    lista.appendChild(li)

    input.value = "";
})
