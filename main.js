const data = [
    {
    link_foto: "Foto/Carros/Anti_Elétricos/Dolphin_disel.png",
    modelo:'Anti Elétricos',
    link_tela: "TelaCarrosEletricos.html",
    descricao: "Tradição, motor e a verdadeira sensação de dirigir."
    },

    {
    link_foto: "Foto/Carros/Antigos/Corsa Wind.png",
    modelo:'Antigos',
    link_tela: "TelaCarrosAntigos.html",
    descricao: "Clássicos que marcaram época, valorizando pelo design retrô e pela história que carregam."
    },
    
    {
    link_foto: "Foto/Carros/Basico/Gol G3.png",
    modelo:'Basico',
    link_tela: "TelaCarrosBasico.html",
    descricao: "Modelos simples e eficientes, ideias para quem quer economia e praticidade no dia a dia."
    },

    {
    link_foto: "Foto/Carros/Importados/Charger 69.png",
    modelo:'Importados',
    link_tela: "TelaCarroImportados.html",
    descricao: "Carros estrangerios que trazem tecnologia, elegancia e desempenho diferenciados."
    },

    {
    link_foto: "Foto/Carros/Intermediarios/Civic Si.png",
    modelo:'Intermediários',
    link_tela: "TelaCarroIntermediarios.html",
    descricao: "Veiculos que equilibram conforto e performance, perfeitos para quem ja tem experiência. e custo-benefício para o uso diário."
    },

    {
    link_foto: "Foto/Carros/Moto/Hornet 2014.png",
    modelo:'Motos',
    link_tela: "TelaMoto.html",
    descricao: "Duas rodas para liberdade total, com opções que vão do urbano ao esportivo."
    },
    {
    link_foto: "Foto/Carros/Muscle/Shelby.png",
    modelo:'Muscle',
    link_tela: "TelaCarroMuscle.html",
    descricao: "Carros potentes com Visual marcante, feitos para quem busca força e tradição."
    },

    {
    link_foto: "Foto/Carros/Perua/Karavan Ricardinho.png",
    modelo:'Peruas',
    link_tela: "TelaCarroPerua.html",
    descricao: "Modelo versáteis com amplo espaço interno, ideais para famílias e carga sem abrir mão de estilo."
    },

    {
    link_foto: "Foto/Carros/Picape Grande/F450.png",
    modelo:'Picapes Grandes',
    link_tela: "TelaCarrosPicapeGrande.html",
    descricao: "Caminhonetes robustas com capacidade de carga e presença dominante nas estradas."
    },

    {
    link_foto: "Foto/Carros/Picape Intermediaria/Maverick.png",
    modelo:'Picapes Intermediárias',
    link_tela: "TelaCarrosPicapeIntermediaria.html",
    descricao: "Versão mais versátil das picapes, unindo força e agilidade para uso urbano e trabalho."
    },

    {
    link_foto: "Foto/Carros/Picape Medias/F150 Raptor.png",
    modelo:'Picapes Médias',
    link_tela: "TelaCarrosPicapeMedia.html",
    descricao: "Modelo equilibrado entre tamanho, força e conforto para diversas necessidades."
    },

    {
    link_foto: "Foto/Carros/Picape pequena/Saveiro Sunset.png",
    modelo:'Picapes pequenas',
    link_tela: "TelaCarrosPicapePequena.html",
    descricao: "Compactas e práticas, perfeitas para quem quer utilidade sem exageros."
    },

    {
    link_foto: "Foto/Carros/Premium/M2 F90 Competion.png",
    modelo:'Premium',
    link_tela: "TelaCarrosPremium.html",
    descricao: "Carros com acabmento superior, tecnologia e conforto além do básico."
    },


    {
    link_foto: "Foto/Carros/Suv/Trail-blazer.png",
    modelo:'Suv',
    link_tela: "TelaCarrosSuv.html",
    descricao: "Versões tradicionais de utilitarios esportivos, combinando espaço e versatilidade."
    },

    {
    link_foto: "Foto/Carros/Suv Premium/Cayenne.png",
    modelo:'Suv Premium',
    link_tela: "TelaCarrosSuvPremium.html",
    descricao: "SUVs com performance elevada, luxo e recursos tecnológicos de ponta."
    },

    {
    link_foto: "Foto/Carros/Super/Agera RS.png",
    modelo:'Super',
    link_tela: "TelaCarrosSuper.html",
    descricao: "Carros de alta performance, potência e emoção, perfeitos para quem busca o máximo."
    },

    {
    link_foto: "Foto/Carros/Vans/Sprinter.png",
    modelo:'Vans',
    link_tela: "TelaCarrosVans.html",
    descricao: "Espaço, conforto e versatilidade para transporte de pessoas ou carga."
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
                
                 <div class="descricao">
                    <p>${e.descricao}</p>
                </div>
          
            </form>
        `
    })

}

searchInput.addEventListener("keyup",(e) => {
    const search = data.filter(i => i.modelo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})
window.addEventListener("load", displayData.bind(null, data))