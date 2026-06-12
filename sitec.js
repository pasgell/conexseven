window.onload = function(){
const produtos = [
{
    nome: "Teclados",
    imagem: "cap1.png",
},

{
    nome: "Celulares",
    imagem: "cap3.png",
},

{
    nome: "Headsets",
    imagem: "cap4.png",
},

{
    nome: "Controles",
    imagem: "cap5.png",
},

{
    nome: "Alexa",
    imagem: "cap6.png",
},

{
    nome: "Celulares",
    imagem: "cap2.png",
},

{
    nome: "Som",
    imagem: "cap7.png",
},

{
    nome: "Mouses",
    imagem: "cap8.png",
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

