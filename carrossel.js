let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel-slide');
const totalSlides = slides.length;

function moverCarrossel(direcao) {
    // Atualiza o índice atual
    currentIndex += direcao;

    // Verifica os limites do carrossel
    if (currentIndex < 0) {
        currentIndex = 0; // Volta para o primeiro slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = totalSlides - 1; // Vai para o último slide
    }

    // Calcula o deslocamento com base no número de slides visíveis
    const offset = -currentIndex * 100; // 100% por slide
    document.querySelector('.carrossel-inner').style.transform = `translateX(${offset}%)`;
}

// Adiciona event listeners para as setas de navegação
document.querySelector('.carrossel-seta-esquerda').addEventListener('click', () => moverCarrossel(-1));
document.querySelector('.carrossel-seta-direita').addEventListener('click', () => moverCarrossel(1));