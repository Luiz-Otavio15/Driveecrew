const data = [
    {
        link_foto: "Foto/Carros/Picape Grande/Amarok Cabine Simples.png",
        modelo: "Amarok Cabine Simples",
        valor: "100.000",
        level: "3",
        descricao: "Picape forte, robusta e pronta para o trabalho pesado."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/F1000 Alcool.png",
        modelo: "F1000 Alcool",
        valor: "110.000",
        level: "3",
        descricao: "Clássica nacional, resistente e feita para durar."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/C10.png",
        modelo: "C10",
        valor: "130.000",
        level: "3",
        descricao: "Picape clássica americana, estilo e força bruta."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/D-20.png",
        modelo: "D-20",
        valor: "140.000",
        level: "3",
        descricao: "Ícone do trabalho pesado no Brasil."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/Silverado.png",
        modelo: "Silverado",
        valor: "140.000",
        level: "3",
        descricao: "Potência, conforto e presença imponente."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/F-250.png",
        modelo: "F-250",
        valor: "170.000",
        level: "3",
        descricao: "Força extrema, robustez e grande capacidade de carga."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/F350.png",
        modelo: "F-350",
        valor: "220.000",
        level: "4",
        descricao: "Picape pesada, feita para serviços extremos."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/3500.png",
        modelo: "3500",
        valor: "500.000",
        level: "6",
        descricao: "Monstro do torque, capacidade absurda e respeito na estrada."
    },
    {
        link_foto: "Foto/Carros/Picape Grande/F450.png",
        modelo: "F450",
        valor: "850.000",
        level: "6",
        descricao: "Luxo extremo aliado à força máxima."
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