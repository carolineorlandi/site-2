const carrinho = document.querySelector(".carrinho-compras");
const numeroItens = document.querySelector(".numero-itens");
const itensCarrinho = document.querySelector(".itens-carrinho");
const valorTotal = document.querySelector(".valor-total");
const botaoCheckout = document.querySelector(".botao-checkout");

let carrinhoDados = [];

function atualizarCarrinho() {
    numeroItens.textContent = carrinhoDados.length;
    valorTotal.textContent = "R$" + calcularTotalCarrinho();

    itensCarrinho.innerHTML = "";

    carrinhoDados.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="<span class="math-inline">\{item\.imagem\}" alt\="</span>{item.nome}">
            <h3><span class="math-inline">\{item\.nome\}</h3\>
<p\>R</span> <span class="math-inline">\{item\.preco\}</p\>
<button data\-id\="</span>{item.id}">Remover</button>
        `;

        itensCarrinho.appendChild(li);

        const botaoRemover = li.querySelector("button");
        botaoRemover.addEventListener("click", () => removerItemCarrinho(item.id));
    });
}

function calcularTotalCarrinho() {
    let total = 0;
    carrinhoDados.forEach(item => {
        total += item.preco;
    });
    return total.toFixed(2);
}

function adicionarItemCarrinho(produtoId) {
    const produto = getProdutoById(produtoId);

    if (produto) {
        const itemCarrinho = {
            id: produto.id,
            nome: produto.nome,
            imagem: produto.imagem,
            preco: produto.preco
        };

        carrinhoDados.push(itemCarrinho);
        atualizarCarrinho();
    }
}

function removerItemCarrinho(produtoId) {
    carrinhoDados = carrinhoDados.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

function getProdutoById(produtoId) {
    const produtos = document.querySelectorAll}
