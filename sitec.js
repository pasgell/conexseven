window.onload = function(){
const produtos = [
{
    nome: "teclado",
    imagem: "https://cdn.sistemawbuy.com.br/arquivos/a4456ac015133534fb513a1cb95ceb43/produtos/67008d67b40ea/tomate-mtem105-67afa9fd461f6.png",
},

{
    nome: "oi2",
    imagem: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
},

{
    nome: "teste",
    imagem: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
},

{
    nome: "ksk",
    imagem: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
},

{
    nome: "Bkrk",
    imagem: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
},


];

let atual = 0;
const nome = document.getElementById("nome");

function mostrarProduto(){
    let produto = produto[atual];
    nome.innerText = produto.nome;  
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

