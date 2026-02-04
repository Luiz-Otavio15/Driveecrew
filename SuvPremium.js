const data = [
    {
        link_foto: "Foto/Carros/Suv Premium/SW4.png",
        modelo: "SW4",
        valor: "400.000",
        level: "4",
        descricao: "Robustez, conforto e confiabilidade lendária."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Defender.png",
        modelo: "Defender",
        valor: "550.000",
        level: "5",
        descricao: "Off-road extremo com história e presença."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/X6 M.png",
        modelo: "X6 M",
        valor: "560.000",
        level: "5",
        descricao: "SUV esportivo, agressivo e extremamente potente."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Jagua Fspace.png",
        modelo: "F-Pace S",
        valor: "650.000",
        level: "5",
        descricao: "Performance esportiva com elegância britânica."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/X3.png",
        modelo: "X3",
        valor: "650.000",
        level: "5",
        descricao: "Equilíbrio entre esportividade, conforto e versatilidade."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Velar.png",
        modelo: "Velar",
        valor: "650.000",
        level: "5",
        descricao: "Design sofisticado com tecnologia premium."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Cayenne.png",
        modelo: "Cayenne Turbo",
        valor: "950.000",
        level: "5",
        descricao: "SUV de luxo com desempenho de esportivo."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Urus.png",
        modelo: "Urus",
        valor: "1.400.000",
        level: "6",
        descricao: "O SUV mais agressivo já criado."
    },
    {
        link_foto: "Foto/Carros/Suv Premium/Ecalade.png",
        modelo: "Escalade",
        valor: "1.900.000",
        level: "7",
        descricao: "Luxo absoluto, tamanho e presença dominante."
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