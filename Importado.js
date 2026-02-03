const data = [
    {
        link_foto: "Foto/Carros/Importados/328I 4 portas.png",
        modelo: "328i Sedan",
        valor: "100.000",
        level: "2",
        descricao: "Sedã esportivo, equilíbrio perfeito entre conforto e desempenho."
    },
    {
        link_foto: "Foto/Carros/Importados/Civic Vtec.png",
        modelo: "Civic VTI",
        valor: "110.000",
        level: "2",
        descricao: "Ícone esportivo, leve, confiável e com pegada racing."
    },
    {
        link_foto: "Foto/Carros/Importados/Civic EK9.png",
        modelo: "Civic Type R EK9",
        valor: "115.000",
        level: "2",
        descricao: "Hatch lendário, focado em performance e alta rotação."
    },
    {
        link_foto: "Foto/Carros/Importados/328I coupe.png",
        modelo: "328i Coupê",
        valor: "120.000",
        level: "2",
        descricao: "Visual esportivo, tração traseira e condução envolvente."
    },
    {
        link_foto: "Foto/Carros/Importados/500E.png",
        modelo: "500e V8",
        valor: "120.000",
        level: "2",
        descricao: "Projeto extremo, compacto com proposta totalmente fora do padrão."
    },
    {
        link_foto: "Foto/Carros/Importados/Ibiza El Coupre.png",
        modelo: "Ibiza 6L Cupra",
        valor: "120.000",
        level: "2",
        descricao: "Hatch esportivo europeu, leve, rápido e agressivo."
    },
    {
        link_foto: "Foto/Carros/Importados/Leon.png",
        modelo: "Leon",
        valor: "130.000",
        level: "2",
        descricao: "Hatch médio com desempenho equilibrado e visual moderno."
    },
    {
        link_foto: "Foto/Carros/Importados/Lancer Rally.png",
        modelo: "Lancer Rally",
        valor: "150.000",
        level: "2",
        descricao: "Sedã esportivo com DNA de competição e tração integral."
    },
    {
        link_foto: "Foto/Carros/Importados/Ibiza.png",
        modelo: "Ibiza FR 2021",
        valor: "150.000",
        level: "2",
        descricao: "Hatch moderno, esportivo e bem equipado."
    },
    {
        link_foto: "Foto/Carros/Importados/Trueno AE86.png",
        modelo: "Corolla Trueno AE86",
        valor: "150.000",
        level: "2",
        descricao: "Lenda do drift, leve, tração traseira e puro carisma."
    },
    {
        link_foto: "Foto/Carros/Importados/Eclipse.png",
        modelo: "Eclipse GSX",
        valor: "160.000",
        level: "2",
        descricao: "Esportivo AWD clássico, forte presença nos anos 90."
    },
    {
        link_foto: "Foto/Carros/Importados/Lancer EVO VIII.png",
        modelo: "Lancer EVO VIII",
        valor: "225.000",
        level: "3",
        descricao: "Ícone japonês, tração integral e performance extrema."
    },
    {
        link_foto: "Foto/Carros/Importados/Lancer EVO X.png",
        modelo: "Lancer EVO X",
        valor: "230.000",
        level: "3",
        descricao: "Evolução moderna, agressiva e pronta para pista."
    },
    {
        link_foto: "Foto/Carros/Importados/Subaro WRX 2006.png",
        modelo: "Impreza WRX STI 2006",
        valor: "230.000",
        level: "3",
        descricao: "Rally car de rua, potente e extremamente estável."
    },
    {
        link_foto: "Foto/Carros/Importados/350z.png",
        modelo: "350z",
        valor: "270.000",
        level: "3",
        descricao: "Esportivo V6, tração traseira e design musculoso."
    },
    {
        link_foto: "Foto/Carros/Importados/BRZ.png",
        modelo: "BRZ",
        valor: "280.000",
        level: "3",
        descricao: "Leve, equilibrado e focado na diversão ao dirigir."
    },
    {
        link_foto: "Foto/Carros/Importados/M3 E36.png",
        modelo: "M3 E39",
        valor: "300.000",
        level: "4",
        descricao: "Sedã esportivo raro, potência e elegância clássica."
    },
    {
        link_foto: "Foto/Carros/Importados/RX7.png",
        modelo: "RX7",
        valor: "300.000",
        level: "4",
        descricao: "Ícone rotativo, leve e extremamente esportivo."
    },
    {
        link_foto: "Foto/Carros/Importados/Evoque.png",
        modelo: "Evoque",
        valor: "320.000",
        level: "4",
        descricao: "SUV premium, luxo e desempenho urbano."
    },
    {
        link_foto: "Foto/Carros/Importados/370z.png",
        modelo: "370z",
        valor: "320.000",
        level: "4",
        descricao: "Esportivo moderno, potente e agressivo."
    },
    {
        link_foto: "Foto/Carros/Importados/M3 E46.png",
        modelo: "M3 E46",
        valor: "340.000",
        level: "4",
        descricao: "Esportivo moderno, potente e agressivo."
    },
    {
        link_foto: "Foto/Carros/Importados/180sx.png",
        modelo: "180sx",
        valor: "340.000",
        level: "4",
        descricao: "Esportivo moderno, potente e agressivo."
    },
    {
        link_foto: "Foto/Carros/Importados/Subaru STI.png",
        modelo: "Impreza WRX STI 2019",
        valor: "360.000",
        level: "4",
        descricao: "Evolução moderna do rally, tecnologia e força."
    },
    {
        link_foto: "Foto/Carros/Importados/Honda S200.png",
        modelo: "S2000",
        valor: "380.000",
        level: "4",
        descricao: "Roadster lendário, alta rotação e dirigibilidade pura."
    },
    {
        link_foto: "Foto/Carros/Importados/Charger 69.png",
        modelo: "Charger 1969",
        valor: "420.000",
        level: "4",
        descricao: "Muscle car clássico, visual brutal e presença imponente."
    },
    {
        link_foto: "Foto/Carros/Importados/M5 E34.png",
        modelo: "M5 E34",
        valor: "420.000",
        level: "4",
        descricao: "Sedã V8 clássico, luxo com alma esportiva."
    },
    {
        link_foto: "Foto/Carros/Importados/DMC.png",
        modelo: "DMC",
        valor: "520.000",
        level: "5",
        descricao: "Ícone futurista, portas asa-de-gaivota e história lendária."
    },
    {
        link_foto: "Foto/Carros/Importados/R33.png",
        modelo: "Skyline R33",
        valor: "1.300.000",
        level: "6",
        descricao: "JDM lendário, tração integral e potência refinada."
    },
    {
        link_foto: "Foto/Carros/Importados/R34.png",
        modelo: "Skyline R34",
        valor: "1.500.000",
        level: "7",
        descricao: "O ápice dos JDMs, tecnologia, performance e status lendário."
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