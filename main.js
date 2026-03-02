const data = [
    {
    link_foto: "Foto/Foto_modelo/Seal_disel-removebg-preview.png",
    modelo:'Anti Elétricos',
    link_tela: "TelaCarrosEletricos.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Omega-removebg-preview.png",
    modelo:'Antigos',
    link_tela: "TelaCarrosAntigos.html"
    },
    
    {
    link_foto: "Foto/Foto_modelo/New_Fiesta-removebg-preview.png",
    modelo:'Basico',
    link_tela: "TelaCarrosBasico.html"
    },

    {
    link_foto: "Foto/Foto_modelo/350z-removebg-preview.png",
    modelo:'Importados',
    link_tela: "TelaCarroImportados.html"
    },

    {
    link_foto: "Foto/Foto_modelo/jetta_GLI-removebg-preview.png",
    modelo:'Intermediários',
    link_tela: "TelaCarroIntermediario.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Ninja_ZX-6R-removebg-preview.png",
    modelo:'Motos',
    link_tela: "TelaMoto.html"
    },
    {
    link_foto: "Foto/Foto_modelo/Camaro_ZL1-removebg-preview.png",
    modelo:'Muscle',
    link_tela: "TelaCarroMuscle.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Caravan_SS-removebg-preview.png",
    modelo:'Peruas',
    link_tela: "TelaCarroPerua.html"
    },

    {
    link_foto: "Foto/Foto_modelo/3500-removebg-preview.png",
    modelo:'Picapes Grandes',
    link_tela: "TelaCarrosPicapeGrande.html"
    },

    {
    link_foto: "Foto/Foto_modelo/S10-removebg-preview.png",
    modelo:'Picapes Intermediárias',
    link_tela: "TelaCarrosPicapeIntermediaria.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Hilux-removebg-preview.png",
    modelo:'Picapes Médias',
    link_tela: "TelaCarrosPicapeMedia.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Saveiro_G7-removebg-preview.png",
    modelo:'Picapes pequenas',
    link_tela: "TelaCarrosPicapePequena.html"
    },

    {
    link_foto: "Foto/Foto_modelo/TT_-RS-removebg-preview.png",
    modelo:'Premium',
    link_tela: "TelaCarrosPremium.html"
    },


    {
    link_foto: "Foto/Foto_modelo/Bronco-removebg-preview.png",
    modelo:'Suv',
    link_tela: "TelaCarrosSuv.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Defender-removebg-preview.png",
    modelo:'Suv Premium',
    link_tela: "TelaCarrosSuvPremium.html"
    },

    {
    link_foto: "Foto/Foto_modelo/488_Pista-removebg-preview.png",
    modelo:'Super',
    link_tela: "TelaCarrosSuper.html"
    },

    {
    link_foto: "Foto/Foto_modelo/Sprinter-removebg-preview.png",
    modelo:'Vans',
    link_tela: "TelaCarrosVans.html"
    },




    
]

const tabelaCarros = document.querySelector('.carros-grid');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
    tabelaCarros.innerHTML = "";
    data.forEach(e => {
        tabelaCarros.innerHTML += `
    <form action="${e.link_tela}" class="card">
                <button>
                    <img src="${e.link_foto}" alt="${e.modelo}">
                    <h3>${e.modelo}</h3>
                </button>
          
            </form>
        `
    })

}

searchInput.addEventListener("keyup",(e) => {
    const search = data.filter(i => i.modelo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})
window.addEventListener("load", displayData.bind(null, data))