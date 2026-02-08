const data1 = [
    {
        link_foto: "Foto/Foto_gerentes/Lino.jpg",
        modelo: 'Lino Romanov',
        descricao: "Dono da DriveCrew"
    },
    {
        link_foto: "Foto/Foto_gerentes/Danilo.jpg",
        modelo: 'Danilo Romanov',
        descricao: "Dono da DriveCrew"
    }
];

const data = [
    {
        link_foto: "Foto/Foto_gerentes/Nescau1.jpg",
        modelo: 'Nescau Krueger',
        descricao: "Gerente da DriveCrew"
    },
    {
        link_foto: "Foto/Foto_gerentes/Eros.webp",
        modelo: 'Eros Harma',
        descricao: "Gerente da DriveCrew"
    },
    {
        link_foto: "Foto/Foto_gerentes/Rasteira1.jpg",
        modelo: 'Otavio Rasteira',
        descricao: "Gerente da DriveCrew"
    }
];

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