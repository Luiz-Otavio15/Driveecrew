const data = [
    {
        link_foto: "Foto/Carros/Muscle/Camaro ZL1.png",
        modelo: "Camaro ZL1",
        valor: "600.000",
        level: "5",
        descricao: "Muscle car moderno, potência extrema e presença imponente."
    },
    {
        link_foto: "Foto/Carros/Muscle/Helcat.png",
        modelo: "Hellcat",
        valor: "800.000",
        level: "5",
        descricao: "Brutalidade pura, motor supercharged e desempenho insano."
    },
    {
        link_foto: "Foto/Carros/Muscle/Shelby.png",
        modelo: "Shelby Cobra",
        valor: "2.500.000",
        level: "12",
        descricao: "Clássico lendário, leve, agressivo e feito para performance."
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