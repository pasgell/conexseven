window.onload = function(){
const produtos = [
{
    nome: "produto1",
    imagem: "https://i.pinimg.com/236x/58/83/71/5883719edede80221436679dd1438d7d.jpg",
},

{
    nome: "produto2",
    imagem: "https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg",
},

{
    nome: "produto3",
    imagem: "https://cdn.pixabay.com/photo/2016/11/22/23/53/starfish-1851289_1280.jpg",
},

{
    nome: "produto4",
    imagem: "https://s2.glbimg.com/Sdia9HsRP4V_FCb874if-ml_4is=/620x520/e.glbimg.com/og/ed/f/original/2020/08/11/31669212-8603391-a_king_eidar_duck_bathing_in_some_shallow_water-a-28_1596787696775.jpg",
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

