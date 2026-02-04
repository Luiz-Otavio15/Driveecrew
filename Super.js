const data = [
    {
        link_foto: "Foto/Carros/Super/C6.png",
        modelo: "Corvette C6",
        valor: "400.000",
        level: "4",
        descricao: "Esportivo americano, potente e visceral."
    },
    {
        link_foto: "Foto/Carros/Super/718 Boxter.png",
        modelo: "718 Boxter",
        valor: "800.000",
        level: "5",
        descricao: "Roadster equilibrado, leve e preciso."
    },
    {
        link_foto: "Foto/Carros/Super/Gallador.png",
        modelo: "Gallardo",
        valor: "1.400.000",
        level: "6",
        descricao: "Superesportivo italiano icônico."
    },
    {
        link_foto: "Foto/Carros/Super/992 Turbo s.png",
        modelo: "992 Turbo S",
        valor: "1.900.000",
        level: "7",
        descricao: "Performance extrema com controle absoluto."
    },
    {
        link_foto: "Foto/Carros/Super/R8 V10.png",
        modelo: "R8 V10",
        valor: "2.000.000",
        level: "8",
        descricao: "Motor aspirado, som marcante e visual agressivo."
    },
    {
        link_foto: "Foto/Carros/Super/C8 V8.png",
        modelo: "Corvette C8",
        valor: "2.225.000",
        level: "8",
        descricao: "Motor central e performance de supercarro."
    },
    {
        link_foto: "Foto/Carros/Super/GT3 RS.png",
        modelo: "GT3 RS",
        valor: "2.500.000",
        level: "8",
        descricao: "Focado em pista, aerodinâmica extrema."
    },
    {
        link_foto: "Foto/Carros/Super/Huracan.png",
        modelo: "Huracan",
        valor: "3.000.000",
        level: "9",
        descricao: "Brutalidade italiana com tecnologia moderna."
    },
    {
        link_foto: "Foto/Carros/Super/458 Spider.png",
        modelo: "458 Spider",
        valor: "3.300.000",
        level: "9",
        descricao: "Elegância, som e emoção a céu aberto."
    },
    {
        link_foto: "Foto/Carros/Super/488 Pista.png",
        modelo: "488 Pista",
        valor: "4.100.000",
        level: "10",
        descricao: "Performance moderna com engenharia refinada."
    },
    {
        link_foto: "Foto/Carros/Super/720s.png",
        modelo: "720s",
        valor: "4.200.000",
        level: "10",
        descricao: "Leveza extrema e aceleração brutal."
    },
    {
        link_foto: "Foto/Carros/Super/Aventador.png",
        modelo: "Aventador",
        valor: "4.300.000",
        level: "10",
        descricao: "V12 puro, agressividade máxima."
    },
    {
        link_foto: "Foto/Carros/Super/993.png",
        modelo: "993 Turbo",
        valor: "5.000.000",
        level: "10",
        descricao: "Clássico lendário, engenharia atemporal."
    },
    {
        link_foto: "Foto/Carros/Super/812.png",
        modelo: "812 SuperFast",
        valor: "6.500.000",
        level: "11",
        descricao: "V12 brutal com sofisticação italiana."
    },
    {
        link_foto: "Foto/Carros/Super/Senna.png",
        modelo: "Senna",
        valor: "8.000.000",
        level: "11",
        descricao: "Máquina de pista, extrema e sem concessões."
    },
    {
        link_foto: "Foto/Carros/Super/918.png",
        modelo: "918",
        valor: "13.900.000",
        level: "11",
        descricao: "Tecnologia híbrida com performance absurda."
    },
    {
        link_foto: "Foto/Carros/Super/F40.png",
        modelo: "F40",
        valor: "16.000.000",
        level: "11",
        descricao: "Lenda absoluta, crua e imortal."
    },
    {
        link_foto: "Foto/Carros/Super/Sian.png",
        modelo: "Sian",
        valor: "22.000.000",
        level: "12",
        descricao: "Exclusividade extrema e tecnologia futurista."
    },
    {
        link_foto: "Foto/Carros/Super/Agera RS.png",
        modelo: "Agera RS",
        valor: "30.000.000",
        level: "12",
        descricao: "Engenharia extrema, velocidade sem limites."
    },
    {
        link_foto: "Foto/Carros/Super/Bugatti.png",
        modelo: "La Voiture Noire",
        valor: "89.000.000",
        level: "12",
        descricao: "Luxo supremo e exclusividade absoluta."
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