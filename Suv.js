const data = [
    {
        link_foto: "Foto/Carros/Suv/Equinox.png",
        modelo: "Equinox",
        valor: "110.000",
        level: "2",
        descricao: "Conforto, espaço e versatilidade."
    },
    {
        link_foto: "Foto/Carros/Suv/Abath.png",
        modelo: "Fastback",
        valor: "120.000",
        level: "2",
        descricao: "Design esportivo com praticidade urbana."
    },
    {
        link_foto: "Foto/Carros/Suv/Corolla Cross.png",
        modelo: "Corolla Cross",
        valor: "150.000",
        level: "2",
        descricao: "Confiável, confortável e eficiente."
    },
    {
        link_foto: "Foto/Carros/Suv/Trail-blazer.png",
        modelo: "Trail-blazer",
        valor: "160.000",
        level: "2",
        descricao: "SUV robusto com capacidade off-road."
    },
    {
        link_foto: "Foto/Carros/Suv/fastBack.png",
        modelo: "HR-V Turbo",
        valor: "200.000",
        level: "2",
        descricao: "Compacto moderno, eficiente e confortável."
    },
    {
        link_foto: "Foto/Carros/Suv/Bronco.png",
        modelo: "Bronco",
        valor: "260.000",
        level: "3",
        descricao: "Off-road raiz com visual clássico."
    },
    {
        link_foto: "Foto/Carros/Suv/Tiguan.png",
        modelo: "Tiguan",
        valor: "280.000",
        level: "3",
        descricao: "SUV familiar com conforto e tecnologia."
    },
    {
        link_foto: "Foto/Carros/Suv/H6.png",
        modelo: "H6",
        valor: "290.000",
        level: "3",
        descricao: "SUV moderno, tecnológico e potente."
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