
// Espera o DOM ser completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem com o ID 'gerae-inicial'
    const image = document.getElementById('gerae-inicial');
    
    // Adiciona o evento de clique
    image.addEventListener('click', function() {
      // Recarrega a página
      location.reload();
    });
  });





const items = document.querySelectorAll(".carousel-item");
const container = document.querySelector(".carousel-container");
let currentIndex = 2; // Item central no início

function updateCarousel() {
    // Atualiza as classes para cada item baseado no índice central
    items.forEach((item, index) => {
        item.classList.remove("middle", "near-middle");

        if (index === currentIndex) {
            item.classList.add("middle");
        } else if (
            index === (currentIndex - 1 + items.length) % items.length || 
            index === (currentIndex + 1) % items.length
        ) {
            item.classList.add("near-middle");
        }
    });

    // Calcula o deslocamento para centralizar o carrossel
    const itemWidth = items[0].offsetWidth + 20; // Largura do item + margem
    const offset = -(currentIndex - 1) * itemWidth; // Para centralizar no item da frente

    container.style.transform = `translateX(${offset}px)`;
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function moveRight() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// Inicializa o carrossel
updateCarousel();





// Revista

const pages1 = document.querySelector('.pages1');
const pages2 = document.querySelector('.pages2');
let currentPage = 0;

document.addEventListener('DOMContentLoaded', () => {
    pages1.style.zIndex = "2";
    pages2.style.zIndex = "1";
});

document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', (event) => {
        const side = event.currentTarget.dataset.side;

        if (side === "right" && currentPage === 0) {
            pages1.classList.add('open');
            pages2.style.zIndex = "2";
            currentPage++;
        } else if (side === "right" && currentPage === 1) {
            pages2.classList.add('open');
            pages1.style.zIndex = "1";
            currentPage++;
        } else if (side === "left" && currentPage === 2) {
            pages2.classList.remove('open');
            setTimeout(() => {
                pages1.style.zIndex = "2";
            }, 1000);
            currentPage--;
        } else if (side === "left" && currentPage === 1) {
            pages1.classList.remove('open');
            currentPage--;
        }
    });
});