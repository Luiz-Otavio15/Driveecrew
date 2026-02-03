const data = [
    {
    link_foto: "Foto/Carros/Anti_Elétricos/Dolphin_disel.png",
    modelo:"Dolphin Diesel",
    valor: "100.000",
    level: "2"},

    {
    link_foto: "Foto/Carros/Anti_Elétricos/Seal_disel.png",
    modelo:"Seal B58",
    valor: "250.000",
    level: "3"},

  





    
]

const tabelaCarros = document.querySelector('.carros-grid');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
    tabelaCarros.innerHTML = "";
    data.forEach(e => {
        tabelaCarros.innerHTML += `
      <div class="card">
            <img src="${e.link_foto}" alt="${e.modelo}">
            <h3>${e.modelo}</h3>
            <p>Valor: R$ ${e.valor}</p>
            <p>Level: ${e.level}</p>
        </div>
            
        `
    })

}

searchInput.addEventListener("keyup",(e) => {
    const search = data.filter(i => i.modelo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})
window.addEventListener("load", displayData.bind(null, data))