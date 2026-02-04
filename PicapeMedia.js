const data = [
    {
        link_foto: "Foto/Carros/Picape Medias/Hilux 2012.png",
        modelo: "Hilux 2012",
        valor: "100.000",
        level: "3",
        descricao: "Durabilidade lendária e força comprovada."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/Frontier.png",
        modelo: "Frontier",
        valor: "150.000",
        level: "3",
        descricao: "Robustez, conforto e excelente desempenho off-road."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/Amarok V6.png",
        modelo: "Amarok V6",
        valor: "200.000",
        level: "4",
        descricao: "Potência bruta, luxo e performance elevada."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/S10 2.8.png",
        modelo: "S10 2.8 Diesel",
        valor: "205.000",
        level: "4",
        descricao: "Torque forte, resistência e versatilidade."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/L200.png",
        modelo: "L200 Triton",
        valor: "240.000",
        level: "4",
        descricao: "Picape valente, pronta pra qualquer terreno."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/Hilux.png",
        modelo: "Hilux 2024",
        valor: "320.000",
        level: "5",
        descricao: "Evolução moderna, força e tecnologia."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/1500.png",
        modelo: "1500",
        valor: "400.000",
        level: "5",
        descricao: "Conforto premium com potência absurda."
    },
    {
        link_foto: "Foto/Carros/Picape Medias/F150 Raptor.png",
        modelo: "F150 Raptor",
        valor: "480.000",
        level: "5",
        descricao: "Off-road extremo, desempenho brutal e presença dominante."
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