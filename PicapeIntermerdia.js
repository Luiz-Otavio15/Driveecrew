const data = [
    {
        link_foto: "Foto/Carros/Picape Intermediaria/S10.png",
        modelo: "S10 Colina",
        valor: "105.000",
        level: "3",
        descricao: "Picape confiável, robusta e pronta pro trabalho diário."
    },
    {
        link_foto: "Foto/Carros/Picape Intermediaria/Toro.png",
        modelo: "Toro 2.2 Diesel",
        valor: "170.000",
        level: "3",
        descricao: "Conforto de SUV com força de picape."
    },
    {
        link_foto: "Foto/Carros/Picape Intermediaria/Maverick.png",
        modelo: "Maverick Pickup",
        valor: "200.000",
        level: "4",
        descricao: "Clássica americana, estilo retrô e atitude."
    }
];

const tabelaCarros = document.querySelector('.carros-grid');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
    tabelaCarros.innerHTML = "";
    data.forEach(e => {
        tabelaCarros.innerHTML += `
      <div class="card">
                <img src="${e.link_foto}" alt="${e.modelo}">
                <h3>${e.modelo}</h3>
                <p>Valor: ${e.valor}</p>
                <p>Level: ${e.level}</p>


                <div class="descricao">
                    <p>
                        ${e.descricao}
                    </p>
                </div>
            </div>
            
        `
    })

}

searchInput.addEventListener("keyup",(e) => {
    const search = data.filter(i => i.modelo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})
window.addEventListener("load", displayData.bind(null, data))