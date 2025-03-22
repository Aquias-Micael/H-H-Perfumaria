let carrinho = [];
let total = 0;

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinhoLista');
    const carrinhoTotal = document.getElementById('carrinhoTotal');
    const carrinhoContador = document.querySelector('.carrinho-contador');

    // Limpa a lista
    carrinhoLista.innerHTML = '';

    // Adiciona os itens ao carrinho
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoLista.appendChild(li);
    });

    // Atualiza o total e o contador
    carrinhoTotal.textContent = total.toFixed(2);
    carrinhoContador.textContent = carrinho.length;
}

// Função para remover itens do carrinho
function removerDoCarrinho(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para abrir/fechar o pop-up do carrinho
function toggleCarrinho() {
    const carrinhoPopup = document.getElementById('carrinhoPopup');
    carrinhoPopup.style.display = carrinhoPopup.style.display === 'block' ? 'none' : 'block';
}

function fecharCarrinho() {
    document.getElementById('carrinhoPopup').style.display = 'none';
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const mensagem = `Olá, gostaria de comprar os seguintes produtos:\n\n${
        carrinho.map(item => `${item.nome} - R$ ${item.preco.toFixed(2)}`).join('\n')
    }\n\nTotal: R$ ${total.toFixed(2)}`;

    const url = `https://wa.me/558188374875?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

    // Limpa o carrinho após a compra
    carrinho = [];
    total = 0;
    atualizarCarrinho();
    fecharCarrinho();
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
    mostrarNotificacao(); // Mostra a notificação
}

// Função para mostrar a notificação
function mostrarNotificacao() {
    const notificacao = document.getElementById('notificacao');
    notificacao.style.display = 'block';

    // Oculta a notificação após 5 segundos
    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 5000); // 5000ms = 5 segundos
}

// Função para redirecionar para a sacola
function irParaSacola() {
    toggleCarrinho(); // Abre o pop-up do carrinho
}

document.getElementById('menuIcon').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});