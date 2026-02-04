const data = [
    {
        link_foto: "Foto/Carros/Perua/Elba.png",
        modelo: "Elba",
        valor: "22.000",
        level: "0",
        descricao: "Familiar clássica, simples e funcional."
    },
    {
        link_foto: "Foto/Carros/Perua/Marajo.png",
        modelo: "Marajó coruja",
        valor: "27.000",
        level: "0",
        descricao: "Wagon clássica com visual marcante e estilo antigo."
    },
    {
        link_foto: "Foto/Carros/Perua/Parati GLS.png",
        modelo: "Parati GLS 1990",
        valor: "30.000",
        level: "0",
        descricao: "Conforto e espaço em uma perua versátil."
    },
    {
        link_foto: "Foto/Carros/Perua/Marajo DL.png",
        modelo: "Marajó SE",
        valor: "30.000",
        level: "0",
        descricao: "Clássica brasileira, prática e resistente."
    },
    {
        link_foto: "Foto/Carros/Perua/Parati Surf.png",
        modelo: "Parati Surf",
        valor: "34.000",
        level: "0",
        descricao: "Estilo jovem, espaço e versatilidade."
    },
    {
        link_foto: "Foto/Carros/Perua/Santana Quantum.png",
        modelo: "Santana Quantum",
        valor: "35.000",
        level: "0",
        descricao: "Perua grande, confortável e robusta."
    },
    {
        link_foto: "Foto/Carros/Perua/Elba Turbo.png",
        modelo: "Elba Turbo",
        valor: "52.000",
        level: "1",
        descricao: "Clássica preparada, desempenho acima do esperado."
    },
    {
        link_foto: "Foto/Carros/Perua/Jetta variant.png",
        modelo: "Jetta Variant",
        valor: "55.000",
        level: "1",
        descricao: "Clássica preparada, desempenho acima do esperado."
    },
    {
        link_foto: "Foto/Carros/Perua/Suprema.png",
        modelo: "Omega Suprema",
        valor: "55.000",
        level: "1",
        descricao: "Luxo, espaço e motor forte."
    },
    {
        link_foto: "Foto/Carros/Perua/Passat variant antiga.png",
        modelo: "Passat variant 20v",
        valor: "55.000",
        level: "1",
        descricao: "Performance turbo com espaço e sofisticação."
    },
    {
        link_foto: "Foto/Carros/Perua/Marea Weekend.png",
        modelo: "Marea Weekend Turbo",
        valor: "70.000",
        level: "1",
        descricao: "Perua esportiva, rápida e intensa."
    },
    {
        link_foto: "Foto/Carros/Perua/Caravan SS.png",
        modelo: "Caravan SS",
        valor: "90.000",
        level: "1",
        descricao: "Clássica esportiva, motor forte e presença marcante."
    },
    {
        link_foto: "Foto/Carros/Perua/Caravan Comodoro.png",
        modelo: "Caravan Comodoro",
        valor: "115.000",
        level: "2",
        descricao: "Elegância clássica com conforto e robustez."
    },
    {
        link_foto: "Foto/Carros/Perua/Karavan Ricardinho.png",
        modelo: "Karavan K24 ZF8",
        valor: "200.000",
        level: "3",
        descricao: "Um ícone brasileiro reinventado. A Karavan K representa a força da cultura automotiva nacional, unindo a tradição das peruas clássicas com a ousadia da engenharia moderna. Mais que um carro, um símbolo de paixão, criatividade e identidade do Brasil."
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