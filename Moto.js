const data = [
    {
        link_foto: "Foto/Carros/Moto/Crf.png",
        modelo: "CRF 450RX",
        valor: "80.000",
        level: "1",
        descricao: "Moto off-road de alto desempenho, ideal para trilhas e competições, com força e excelente controle em terrenos difíceis."
    },
    {
        link_foto: "Foto/Carros/Moto/Hornet 2000.png",
        modelo: "Hornet 2000",
        valor: "110.000",
        level: "2",
        descricao: "Clássica e potente, oferece motor forte e pilotagem esportiva, perfeita para cidade e estrada."
    },
    {
        link_foto: "Foto/Carros/Moto/Hornet 2014.png",
        modelo: "Hornet 2014",
        valor: "135.000",
        level: "2",
        descricao: "Versão moderna da Hornet, com design atualizado, boa ciclística e equilíbrio entre conforto e esportividade."
    },
    {
        link_foto: "Foto/Carros/Moto/Ninja ZX-6R.png",
        modelo: "Ninja ZX-6R",
        valor: "177.000",
        level: "2",
        descricao: "Superesportiva focada em velocidade e precisão, com visual agressivo e desempenho digno de pista."
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