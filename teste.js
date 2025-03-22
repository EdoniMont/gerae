document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem da logo
    const logo = document.getElementById('gerae-inicial');
    
    // Adiciona o evento de clique
    logo.addEventListener('click', function() {
        // Redireciona para a página principal
        window.location.href = "index.html"; // Substitua pelo caminho correto se necessário
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
const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
