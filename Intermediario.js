const data = [
    {
        link_foto: "Foto/Carros/Intermediarios/Up TSI.png",
        modelo: "Up TSI",
        valor: "50.000",
        level: "1",
        descricao: "Compacto leve, turbo esperto e surpreendentemente rápido."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Onix Turbo.png",
        modelo: "Onix Turbo",
        valor: "60.000",
        level: "1",
        descricao: "Hatch moderno, econômico e ágil para o dia a dia urbano."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Focus RS.png",
        modelo: "Focus",
        valor: "60.000",
        level: "1",
        descricao: "Conforto, estabilidade e ótima dirigibilidade em um hatch completo."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Fluence GT.png",
        modelo: "Fluence GT",
        valor: "60.000",
        level: "1",
        descricao: "Sedã turbo com visual esportivo e ótimo conforto."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/208 GT.png",
        modelo: "208 GT 1.6",
        valor: "65.000",
        level: "1",
        descricao: "Hatch esportivo, leve e divertido de dirigir."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/HB20 Turbo.png",
        modelo: "HB20 Turbo",
        valor: "65.000",
        level: "1",
        descricao: "Compacto moderno com bom desempenho e eficiência."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/DS3.png",
        modelo: "DS-3",
        valor: "69.900",
        level: "2",
        descricao: "Hatch premium com design marcante e pegada esportiva."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Sandero RS.png",
        modelo: "Sandero RS",
        valor: "70.000",
        level: "1",
        descricao: "Esportivo raiz, focado em desempenho e emoção."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Lancer GT.png",
        modelo: "Lancer GT",
        valor: "70.000",
        level: "1",
        descricao: "Sedã com visual esportivo e bom nível de conforto."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/C30 T5.png",
        modelo: "C30 T5",
        valor: "80.000",
        level: "1",
        descricao: "Hatch potente, exclusivo e com forte desempenho."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Polo TSI.png",
        modelo: "Polo TSI",
        valor: "80.000",
        level: "1",
        descricao: "Equilíbrio entre desempenho, tecnologia e conforto."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Golf TSI.png",
        modelo: "Golf TSI",
        valor: "80.000",
        level: "1",
        descricao: "Hatch refinado com ótima performance e dirigibilidade."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/120I.png",
        modelo: "120I",
        valor: "90.000",
        level: "1",
        descricao: "Hatch premium com condução esportiva."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Nivus.png",
        modelo: "Nivus",
        valor: "90.000",
        level: "1",
        descricao: "SUV compacto moderno e eficiente."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Cruze Turbo.png",
        modelo: "Cruze Turbo",
        valor: "90.000",
        level: "1",
        descricao: "Sedã confortável com bom desempenho turbo."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Civic SI.png",
        modelo: "Civic SI",
        valor: "100.000",
        level: "2",
        descricao: "Esportivo confiável, alto giro e ótima performance."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Civic 1.5.png",
        modelo: "Civic 1.5 Turbo",
        valor: "120.000",
        level: "2",
        descricao: "Equilíbrio perfeito entre conforto, tecnologia e potência."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Corolla Sedan.png",
        modelo: "Corolla Sedan",
        valor: "125.000",
        level: "2",
        descricao: "Confiabilidade, conforto e durabilidade reconhecida."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Corolla GR.png",
        modelo: "Corolla GR",
        valor: "125.000",
        level: "2",
        descricao: "Versão esportiva com DNA de competição."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Fusca TSi.png",
        modelo: "Fusca TSI",
        valor: "140.000",
        level: "2",
        descricao: "Clássico reinventado com motor turbo e muito estilo."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Polo GTS.png",
        modelo: "Polo GTS",
        valor: "150.000",
        level: "2",
        descricao: "Hatch esportivo moderno e bem equipado."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Civic SI 2014].png",
        modelo: "Civic SI 2.4 2014",
        valor: "150.000",
        level: "2",
        descricao: "Esportivo forte, confiável e divertido de dirigir."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Trole T4.png",
        modelo: "Troller T4",
        valor: "180.000",
        level: "2",
        descricao: "Off-road raiz, robusto e pronto para qualquer terreno."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/320i.png",
        modelo: "320i",
        valor: "190.000",
        level: "2",
        descricao: "Sedã premium com conforto e desempenho equilibrados."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Gol GTI MK7,5.png",
        modelo: "Golf GTI MK 7.5",
        valor: "190.000",
        level: "2",
        descricao: "Hatch esportivo refinado e extremamente rápido."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/Passat.png",
        modelo: "Passat",
        valor: "200.000",
        level: "3",
        descricao: "Sedã grande, confortável e potente."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/jetta GLI.png",
        modelo: "Jetta GLI",
        valor: "220.000",
        level: "3",
        descricao: "Sedã esportivo com visual agressivo e alta performance."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/A3 Hacth.png",
        modelo: "A3 Sportback",
        valor: "250.000",
        level: "3",
        descricao: "Hatch premium moderno com excelente dirigibilidade."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/A3 SEDAN.png",
        modelo: "A3 Sedan",
        valor: "280.000",
        level: "3",
        descricao: "Elegância, tecnologia e desempenho em um sedã premium."
    },
    {
        link_foto: "Foto/Carros/Intermediarios/TT-S.png",
        modelo: "TT-S",
        valor: "420.000",
        level: "4",
        descricao: "Esportivo compacto com tração integral e visual marcante."
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