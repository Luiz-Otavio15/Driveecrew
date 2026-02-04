const data = [
    {
        link_foto: "Foto/Carros/Premium/240i.png",
        modelo: "240i",
        valor: "265.000",
        level: "3",
        descricao: "Esportivo equilibrado, rápido e refinado."
    },
    {
        link_foto: "Foto/Carros/Premium/Volvo S60.png",
        modelo: "S60",
        valor: "270.000",
        level: "3",
        descricao: "Sedã elegante com desempenho e segurança."
    },
    {
        link_foto: "Foto/Carros/Premium/A45 AMG.png",
        modelo: "A45 AMG",
        valor: "320.000",
        level: "4",
        descricao: "Hatch extremo, potência absurda e tração integral."
    },
    {
        link_foto: "Foto/Carros/Premium/Golf MK8 GTI.png",
        modelo: "Golf MK8",
        valor: "430.000",
        level: "4",
        descricao: "Evolução moderna, tecnologia e esportividade."
    },
    {
        link_foto: "Foto/Carros/Premium/CLS 63 AMG.png",
        modelo: "CLS 63S AMG",
        valor: "450.000",
        level: "4",
        descricao: "Luxo agressivo com desempenho brutal."
    },
    {
        link_foto: "Foto/Carros/Premium/TT -RS.png",
        modelo: "TT-RS",
        valor: "540.000",
        level: "5",
        descricao: "Compacto extremo, som marcante e aceleração brutal."
    },
    {
        link_foto: "Foto/Carros/Premium/M2 F90 Competion.png",
        modelo: "M2 Competition",
        valor: "550.000",
        level: "5",
        descricao: "Esportivo puro, tração traseira e agressividade."
    },
    {
        link_foto: "Foto/Carros/Premium/M2 2023 G80.png",
        modelo: "M2 2023",
        valor: "560.000",
        level: "5",
        descricao: "Nova geração, força e visual musculoso."
    },
    {
        link_foto: "Foto/Carros/Premium/RS3 SportBack.png",
        modelo: "RS-3 SportBack",
        valor: "650.000",
        level: "5",
        descricao: "Hatch insano, tração integral e motor lendário."
    },
    {
        link_foto: "Foto/Carros/Premium/M5 F90.png",
        modelo: "M5 F90",
        valor: "700.000",
        level: "5",
        descricao: "Sedã executivo com alma de superesportivo."
    },
    {
        link_foto: "Foto/Carros/Premium/RS3 Sedan.png",
        modelo: "RS-3 Sedan",
        valor: "700.000",
        level: "5",
        descricao: "Performance extrema com elegância."
    },
    {
        link_foto: "Foto/Carros/Premium/RS5.png",
        modelo: "RS5 Competition",
        valor: "900.000",
        level: "5",
        descricao: "Esportivo refinado, potência e precisão."
    },
    {
        link_foto: "Foto/Carros/Premium/Volvo Alphine.png",
        modelo: "Polestar One",
        valor: "900.000",
        level: "5",
        descricao: "Tecnologia avançada, design exclusivo e desempenho premium."
    },
    {
        link_foto: "Foto/Carros/Premium/M3 G80.png",
        modelo: "M3 G80",
        valor: "900.000",
        level: "5",
        descricao: "Ícone moderno, agressivo e feito para pista."
    },
    {
        link_foto: "Foto/Carros/Premium/Supra MK5.png",
        modelo: "Supra A90",
        valor: "1.000.000",
        level: "6",
        descricao: "Lenda japonesa moderna, potência e emoção."
    },
    {
        link_foto: "Foto/Carros/Premium/Gran Turismo.png",
        modelo: "Gran Turismo",
        valor: "1.050.000",
        level: "6",
        descricao: "Elegância italiana com som e performance."
    },
    {
        link_foto: "Foto/Carros/Premium/RS7.png",
        modelo: "RS7",
        valor: "1.100.000",
        level: "6",
        descricao: "Luxo, brutalidade e presença imponente."
    },
    {
        link_foto: "Foto/Carros/Premium/Nissan GTR R35 Nismo.png",
        modelo: "Nissan GTR Nismo",
        valor: "3.000.000",
        level: "9",
        descricao: "Superesportivo japonês, tecnologia extrema e respeito máximo."
    },
    {
        link_foto: "Foto/Carros/Premium/Roll Royce.png",
        modelo: "Ghost",
        valor: "6.000.000",
        level: "11",
        descricao: "Luxo absoluto, silêncio e exclusividade."
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