

const dono = document.querySelector('.Dono');
const gerente = document.querySelector('.Gerente');

// Função única para renderizar cards
function renderCards(container, items) {
    container.innerHTML = "";
    items.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.link_foto}" alt="${item.modelo}">
                <h3>${item.modelo}</h3>
                <p>${item.descricao}</p>
            </div>
        `;
    });
}

window.addEventListener("load", () => {
    renderCards(dono, data1);
    renderCards(gerente, data);
});