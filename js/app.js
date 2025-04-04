let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    // Validações
    if (!produto) {
        alert("Por favor, selecione um produto válido.");
        return;
    }
    
    if (!quantidade || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.')); // Converter string para float
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
  </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}