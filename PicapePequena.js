const data = [
    {
        link_foto: "Foto/Carros/Picape pequena/Chevy 500.png",
        modelo: "Chevy 500",
        valor: "28.000",
        level: "1",
        descricao: "Picape compacta, simples e funcional."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Saveiro G1.png",
        modelo: "Saveiro CL",
        valor: "30.000",
        level: "1",
        descricao: "Clássica e confiável para o dia a dia."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Saveiro G3.png",
        modelo: "Saveiro G3 1.8",
        valor: "39.000",
        level: "1",
        descricao: "Compacta, forte e com pegada esportiva."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Montana.png",
        modelo: "Montana 2017",
        valor: "52.000",
        level: "2",
        descricao: "Moderno, confortável e versátil."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Saveiro G1 Summer.png",
        modelo: "Saveiro Summer",
        valor: "70.000",
        level: "2",
        descricao: "Estilo descontraído com espírito urbano."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Saveiro Sunset.png",
        modelo: "Saveiro Sunset",
        valor: "80.000",
        level: "2",
        descricao: "Versão especial, visual marcante e exclusiva."
    },
    {
        link_foto: "Foto/Carros/Picape pequena/Saveiro G7.png",
        modelo: "Saveiro 2025",
        valor: "99.000",
        level: "2",
        descricao: "Nova geração, tecnologia e visual moderno."
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