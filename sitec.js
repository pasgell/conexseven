window.onload = function(){
const produtos = [
{
    nome: "Teclados",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap1.png?raw=true",
},

{
    nome: "Celulares",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap3.png?raw=true",
},

{
    nome: "Headsets",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap4.png?raw=true",
},

{
    nome: "Controles",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap5.png?raw=true",
},

{
    nome: "Alexa",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap6.png?raw=true",
},

{
    nome: "Celulares",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap2.png?raw=true",
},

{
    nome: "Som",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap7.png?raw=true",
},

{
    nome: "Mouses",
    imagem: "https://github.com/pasgell/conexseven/blob/main/cap8.png?raw=true",
},

];

let atual = 0;
const nome = document.getElementById("produto-nome");
const imagem = document.getElementById("produto-imagem");

function mostrarProduto(){
    const produto = produtos[atual];
    nome.innerText = produto.nome;
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
}

window.proxima = function(){
    atual++;
    if(atual >= produtos.length){
        atual = 0;
    }
    mostrarProduto();
}
window.anterior = function(){
    atual--;
    if(atual < 0){
        atual = produtos.length - 1;
    }
    mostrarProduto();
}

mostrarProduto();

}

