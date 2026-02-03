const data = [
    {
    link_foto: "Foto/Carros/Basico/Gol G3.png",
    modelo:"Gol G3 1.8",
    valor: "19.000",
    level: "0",
    descricao: "Clássico brasileiro com visual retrô e mecânica robusta, símbolo das décadas passadas."
    },

    {
    link_foto: "Foto/Carros/Basico/Clio 1.6.png",
    modelo:"Clio 1.6",
    valor: "20.000",
    descricao: "Compacto ágil e econômico, ideal para cidade, com dirigibilidade leve e prática.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/207.png",
    modelo:"207",
    valor: "22.000",
    descricao: "Hatch confortável, com bom acabamento e visual moderno para sua época.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/Corsa geração nova.png",
    modelo:"Corsa 1.4 Hatch",
    valor: "24.000",
    descricao: "Modelo versátil e confiável, muito usado no dia a dia pela economia e manutenção simples.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/Gol G4 Rally.png",
    modelo:"Gol G4 Rally",
    valor: "29.000",
    descricao: "Versão com visual aventureiro, mantendo robustez e bom desempenho urbano.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/Funsion 2.4.png",
    modelo:"Fusion SEL 2.3",
    valor: "30.000",
    descricao: "Sedã grande, confortável e elegante, ideal para quem busca espaço e presença.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/I30.png",
    modelo:"I30",
    valor: "30.000",
    descricao: "Hatch médio moderno, com bom nível de conforto e dirigibilidade equilibrada.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/Azera.png",
    modelo:"Azera 2008",
    valor: "35.000",
    descricao: "Sedã de luxo, conhecido pelo conforto, silêncio e acabamento refinado.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/Tl 1600.png",
    modelo:"Variant 1600",
    valor: "35.000",
    descricao: "Clássico familiar, espaçoso e com design retrô marcante.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/C4.png",
    modelo:"C4 VTR",
    valor: "35.000",
    descricao: "Hatch esportivo, visual ousado e dirigibilidade firme.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/Gol G6.png",
    modelo:"Gol G6 1.6",
    valor: "35.000",
    descricao: "Evolução do Gol, com design mais moderno e bom equilíbrio entre desempenho e economia.",
    level: "0"
    },


    {
    link_foto: "Foto/Carros/Basico/Palio 1.6 16v.png",
    modelo:"Palio 1.6 16v",
    valor: "39.000",
    descricao: "Hatch ágil e confiável, com motor esperto e boa estabilidade.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/New Fiesta.png",
    modelo:"New Fiesta Sport",
    valor: "40.000",
    descricao: "Compacto esportivo, com visual marcante e boa resposta ao volante.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/Civic EXS.png",
    modelo:"Civic EXS",
    valor: "45.000",
    descricao: "Sedã confiável, confortável e com excelente reputação de durabilidade.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/Kwid.png",
    modelo:"Kwid",
    valor: "49.000",
    descricao: "Compacto urbano, econômico e fácil de dirigir, ideal para iniciantes.",
    level: "0"
    },

    {
    link_foto: "Foto/Carros/Basico/Veloster.png",
    modelo:"Veloster 1.6",
    valor: "55.000",
    descricao: "Hatch esportivo com design diferenciado e proposta moderna.",
    level: "1"
    },

    {
    link_foto: "Foto/Carros/Basico/Ka.png",
    modelo:"ka Dragon",
    valor: "58.000",
    descricao: "Hatch compacto com visual esportivo, focado em agilidade e estilo.",
    level: "1"
    },
    
    



    
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