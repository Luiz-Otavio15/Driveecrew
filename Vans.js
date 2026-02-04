const data = [
    {
        link_foto: "Foto/Carros/Vans/Fiorino.png",
        modelo: "Fiorino",
        valor: "50.000",
        level: "1",
        descricao: "Utilitário compacto, simples e eficiente."
    },
    {
        link_foto: "Foto/Carros/Vans/Kombi.png",
        modelo: "Kombi",
        valor: "200.000",
        level: "3",
        descricao: "Ícone nacional, versátil e histórico."
    },
    {
        link_foto: "Foto/Carros/Vans/Sprinter.png",
        modelo: "Sprinter",
        valor: "350.000",
        level: "5",
        descricao: "Capacidade, robustez e confiabilidade profissional."
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