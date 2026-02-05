const data = [
    // Anti Elétricos
    { modelo: "Dolphin Diesel", level: 2, preco: "100.000" },
    { modelo: "Seal B58", level: 3, preco: "250.000" },

    // Antigos
    { modelo: "Twingo", level: 0, preco: "5.000" },
    { modelo: "Brasilia", level: 0, preco: "6.000" },
    { modelo: "Corsa Wind", level: 0, preco: "6.500" },
    { modelo: "Uno Millie", level: 0, preco: "8.000" },
    { modelo: "Fusca 1600", level: 0, preco: "8.000" },
    { modelo: "Escort 1.6", level: 0, preco: "10.000" },
    { modelo: "Chevette", level: 0, preco: "12.000" },
    { modelo: "Tigra", level: 0, preco: "15.000" },
    { modelo: "Gol CL", level: 0, preco: "15.000" },
    { modelo: "Voyage", level: 0, preco: "18.000" },
    { modelo: "Chevette Tubarão", level: 0, preco: "20.000" },
    { modelo: "Golf GLX MK3", level: 0, preco: "25.000" },
    { modelo: "Escort XR3", level: 0, preco: "25.000" },
    { modelo: "Uno 1.6R", level: 0, preco: "28.000" },
    { modelo: "X12 1.6 Tocantins", level: 0, preco: "29.000" },
    { modelo: "Vectra 2.2", level: 0, preco: "33.000" },
    { modelo: "Golf GTI MK3", level: 0, preco: "40.000" },
    { modelo: "Vectra GSI", level: 1, preco: "40.000" },
    { modelo: "Uno Turbo 1996", level: 0, preco: "48.000" },
    { modelo: "Omega 4.1", level: 1, preco: "50.000" },
    { modelo: "Tempra Turbo", level: 1, preco: "50.000" },
    { modelo: "Astra GSI", level: 1, preco: "55.000" },
    { modelo: "Kadett GSI", level: 1, preco: "55.000" },
    { modelo: "Gol GTS", level: 1, preco: "60.000" },
    { modelo: "Corsa GSI", level: 1, preco: "60.000" },
    { modelo: "Golf GTI MK4", level: 1, preco: "65.000" },
    { modelo: "Marea Turbo", level: 1, preco: "70.000" },
    { modelo: "Golf GTI MK4.5", level: 1, preco: "70.000" },
    { modelo: "Gol GTI", level: 1, preco: "80.000" },
    { modelo: "Landau", level: 1, preco: "80.000" },
    { modelo: "A3 20v", level: 1, preco: "80.000" },
    { modelo: "Civic SI 2000", level: 1, preco: "99.000" },
    { modelo: "Opala Comodoro", level: 2, preco: "105.000" },
    { modelo: "Veraneio 4.3", level: 2, preco: "105.000" },
    { modelo: "Opala Diplomata", level: 2, preco: "110.000" },
    { modelo: "Opala Sedan", level: 2, preco: "125.000" },
    { modelo: "Opala Luxo 1972", level: 2, preco: "130.000" },
    { modelo: "SP2 VW Boxer", level: 2, preco: "140.000" },
    { modelo: "Opala SS 1979", level: 2, preco: "145.000" },
    { modelo: "Maveric GT", level: 2, preco: "160.000" },
    { modelo: "Opala SS 1972", level: 2, preco: "170.000" },

    // Básicos
    { modelo: "Gol G3 1.8", level: 0, preco: "19.000" },
    { modelo: "Clio 1.6", level: 0, preco: "20.000" },
    { modelo: "207", level: 0, preco: "22.000" },
    { modelo: "Corsa 1.4 Hatch", level: 0, preco: "24.000" },
    { modelo: "Gol G4 Rally", level: 0, preco: "29.000" },
    { modelo: "Fusion SEL 2.3", level: 0, preco: "30.000" },
    { modelo: "I30", level: 0, preco: "30.000" },
    { modelo: "Azera 2008", level: 0, preco: "35.000" },
    { modelo: "Variant 1600", level: 0, preco: "35.000" },
    { modelo: "C4 VTR", level: 0, preco: "35.000" },
    { modelo: "Gol G6 1.6", level: 0, preco: "35.000" },
    { modelo: "Palio 1.6 16v", level: 0, preco: "39.000" },
    { modelo: "New Fiesta Sport", level: 0, preco: "40.000" },
    { modelo: "Civic EXS", level: 0, preco: "45.000" },
    { modelo: "Kwid", level: 0, preco: "49.000" },
    { modelo: "Veloster 1.6", level: 1, preco: "55.000" },
    { modelo: "Ka Dragon 1.5", level: 1, preco: "58.000" },

    // Importados
    { modelo: "328i Sedan", level: 2, preco: "100.000" },
    { modelo: "Civic VTI", level: 2, preco: "110.000" },
    { modelo: "Civic Type R EK9", level: 2, preco: "115.000" },
    { modelo: "328i Coupê", level: 2, preco: "120.000" },
    { modelo: "500e V8", level: 2, preco: "120.000" },
    { modelo: "Ibiza 6L Cupra", level: 2, preco: "120.000" },
    { modelo: "Leon", level: 2, preco: "130.000" },
    { modelo: "Lancer Rally", level: 2, preco: "150.000" },
    { modelo: "Ibiza FR 2021", level: 2, preco: "150.000" },
    { modelo: "Corolla Trueno AE86", level: 2, preco: "150.000" },
    { modelo: "Eclipse GSX", level: 2, preco: "160.000" },
    { modelo: "Lancer EVO VIII", level: 3, preco: "225.000" },
    { modelo: "Lancer EVO X", level: 3, preco: "230.000" },
    { modelo: "Impreza WRX STI 2006", level: 3, preco: "230.000" },
    { modelo: "350z", level: 3, preco: "270.000" },
    { modelo: "BRZ", level: 3, preco: "280.000" },
    { modelo: "M3 E39", level: 4, preco: "300.000" },
    { modelo: "RX7", level: 4, preco: "300.000" },
    { modelo: "Evoque", level: 4, preco: "320.000" },
    { modelo: "370z", level: 4, preco: "320.000" },
    { modelo: "M3 E46", level: 4, preco: "340.000" },
    { modelo: "180sx", level: 4, preco: "340.000" },
    { modelo: "Impreza WRX STI 2019", level: 4, preco: "360.000" },
    { modelo: "S200", level: 4, preco: "380.000" },
    { modelo: "Charger 1969", level: 4, preco: "420.000" },
    { modelo: "M5 E34", level: 4, preco: "420.000" },
    { modelo: "DMC", level: 5, preco: "520.000" },
    { modelo: "Skyline R33", level: 6, preco: "1.300.000" },
    { modelo: "Skyline R34", level: 7, preco: "1.500.000" },

    // Intermediários
    { modelo: "Up TSI", level: 1, preco: "50.000" },
    { modelo: "Onix Turbo", level: 1, preco: "60.000" },
    { modelo: "Focus", level: 1, preco: "60.000" },
    { modelo: "Fluence GT", level: 1, preco: "60.000" },
    { modelo: "208 GT 1.6", level: 1, preco: "65.000" },
    { modelo: "HB20 Turbo", level: 1, preco: "65.000" },
    { modelo: "DS-3", level: 2, preco: "69.900" },
    { modelo: "Sandero RS", level: 1, preco: "70.000" },
    { modelo: "Lancer GT", level: 1, preco: "70.000" },
    { modelo: "C30 T5", level: 1, preco: "80.000" },
    { modelo: "Polo TSI", level: 1, preco: "80.000" },
    { modelo: "Golf TSI", level: 1, preco: "80.000" },
    { modelo: "120i", level: 1, preco: "90.000" },
    { modelo: "Nivus", level: 1, preco: "90.000" },
    { modelo: "Cruze Turbo", level: 1, preco: "90.000" },
    { modelo: "Civic SI", level: 2, preco: "100.000" },
    { modelo: "Civic 1.5", level: 2, preco: "120.000" },
    { modelo: "Corolla Sedan", level: 2, preco: "125.000" },
    { modelo: "Corolla GR", level: 2, preco: "125.000" },
    { modelo: "Fusca TSI", level: 2, preco: "140.000" },
    { modelo: "Polo GTS", level: 2, preco: "150.000" },
    { modelo: "Civic SI 2.4 2014", level: 2, preco: "150.000" },
    { modelo: "Troller T4", level: 2, preco: "180.000" },
    { modelo: "320i", level: 2, preco: "190.000" },
    { modelo: "Golf GTI MK 7.5", level: 2, preco: "190.000" },
    { modelo: "Passat", level: 3, preco: "200.000" },
    { modelo: "Jetta GLI", level: 3, preco: "220.000" },
    { modelo: "A3 Sportback", level: 3, preco: "250.000" },
    { modelo: "A3 Sedan", level: 3, preco: "280.000" },
    { modelo: "TT-S", level: 3, preco: "420.000" },

    // Motos
    { modelo: "CRF 450RX", level: 1, preco: "80.000" },
    { modelo: "Hornet 2000", level: 2, preco: "110.000" },
    { modelo: "Hornet 2014", level: 2, preco: "135.000" },
    { modelo: "Ninja ZX-6r", level: 2, preco: "177.000" },

    // Muscle
    { modelo: "Camaro ZL1", level: 5, preco: "600.000" },
    { modelo: "HellCat", level: 5, preco: "800.000" },
    { modelo: "Shelby Cobra", level: 12, preco: "2.500.000" },

    // Perua
    { modelo: "Elba", level: 0, preco: "22.000" },
    { modelo: "Marajó Coruja", level: 0, preco: "27.000" },
    { modelo: "Parati GLS", level: 0, preco: "30.000" },
    { modelo: "Marajo SE", level: 0, preco: "30.000" },
    { modelo: "Parati Surf", level: 0, preco: "34.000" },
    { modelo: "Santana Quantum", level: 0, preco: "35.000" },
    { modelo: "Elba Turbo", level: 1, preco: "52.000" },
    { modelo: "Jetta Variant", level: 1, preco: "50.000" },
    { modelo: "Omega Suprema", level: 1, preco: "55.000" },
    { modelo: "Passant Variant 20v", level: 1, preco: "55.000" },
    { modelo: "Marea Weekend Turbo", level: 1, preco: "70.000" },
    { modelo: "Caravan SS", level: 1, preco: "90.000" },
    { modelo: "Caravan Comodoro", level: 2, preco: "115.000" },
    { modelo: "Karavan K24 ZF8", level: 3, preco: "200.000" },

    // Picapes Grandes
    { modelo: "Amarok Cabine Simples", level: 3, preco: "100.000" },
    { modelo: "F1000 Alcool", level: 3, preco: "110.000" },
    { modelo: "C10", level: 3, preco: "130.000" },
    { modelo: "Silverado", level: 3, preco: "140.000" },
    { modelo: "D20", level: 3, preco: "140.000" },
    { modelo: "F-250", level: 3, preco: "170.000" },
    { modelo: "F350", level: 4, preco: "220.000" },
    { modelo: "3500", level: 6, preco: "500.000" },
    { modelo: "F450 Platinum", level: 6, preco: "850.000" },

    // Picapes Intermediárias
    { modelo: "S10 Colina", level: 3, preco: "105.000" },
    { modelo: "Toro 2.2 Diesel", level: 3, preco: "170.000" },
    { modelo: "Maverick Pickup", level: 4, preco: "200.000" },

    // Picapes Médias
    { modelo: "Hilux 2012", level: 3, preco: "100.000" },
    { modelo: "Frontier", level: 3, preco: "150.000" },
    { modelo: "Amarok V6", level: 4, preco: "200.000" },
    { modelo: "S10 2.8 Turbo Diesel", level: 4, preco: "205.000" },
    { modelo: "L200 Triton", level: 4, preco: "240.000" },
    { modelo: "Hilux 2024", level: 5, preco: "320.000" },
    { modelo: "1500", level: 5, preco: "400.000" },
    { modelo: "F-150 Raptor", level: 5, preco: "480.000" },

    // Picapes Pequena
    { modelo: "Chevy 500", level: 1, preco: "28.000" },
    { modelo: "Saveiro CL", level: 1, preco: "30.000" },
    { modelo: "Saveiro G3 1.8", level: 1, preco: "39.000" },
    { modelo: "Montana 2017", level: 2, preco: "52.000" },
    { modelo: "Saveiro Summer", level: 2, preco: "70.000" },
    { modelo: "Saveiro Sunset", level: 2, preco: "80.000" },
    { modelo: "Saveiro 2025", level: 2, preco: "99.000" },

    // Premium
    { modelo: "240i", level: 3, preco: "265.000" },
    { modelo: "S60", level: 3, preco: "270.000" },
    { modelo: "A45 AMG", level: 4, preco: "320.000" },
    { modelo: "Golf MK8", level: 4, preco: "430.000" },
    { modelo: "CLS 63S", level: 4, preco: "450.000" },
    { modelo: "TT-RS", level: 5, preco: "540.000" },
    { modelo: "M2 Competition", level: 5, preco: "550.000" },
    { modelo: "M2 2023", level: 5, preco: "560.000" },
    { modelo: "RS-3 Sportback", level: 5, preco: "650.000" },
    { modelo: "RS-3 Sedan", level: 5, preco: "700.000" },
    { modelo: "M5 F90", level: 5, preco: "700.000" },
    { modelo: "RS5 Competition", level: 5, preco: "900.000" },
    { modelo: "Polestar One", level: 5, preco: "900.000" },
    { modelo: "M3 G80", level: 5, preco: "900.000" },
    { modelo: "Supra A90", level: 6, preco: "1.000.000" },
    { modelo: "GranTurismo", level: 6, preco: "1.050.000" },
    { modelo: "RS7", level: 6, preco: "1.100.000" },
    { modelo: "GT-R nimo", level: 9, preco: "3.000.000" },
    { modelo: "Ghost", level: 11, preco: "6.000.000" },

    // Suv
    { modelo: "Equinox", level: 2, preco: "110.000" },
    { modelo: "FastBack", level: 2, preco: "120.000" },
    { modelo: "Corolla Cross", level: 2, preco: "150.000" },
    { modelo: "TrailBlazer 2.8", level: 2, preco: "160.000" },
    { modelo: "HR-V", level: 3, preco: "200.000" },
    { modelo: "Bronco", level: 3, preco: "260.000" },
    { modelo: "Tiguan", level: 3, preco: "280.000" },
    { modelo: "H6", level: 3, preco: "290.000" },

    // Suv Premium
    { modelo: "SW4", level: 4, preco: "400.000" },
    { modelo: "Defender", level: 5, preco: "550.000" },
    { modelo: "X6 M", level: 5, preco: "560.000" },
    { modelo: "F-PACE S", level: 5, preco: "650.000" },
    { modelo: "Velar", level: 5, preco: "650.000" },
    { modelo: "X3", level: 5, preco: "650.000" },
    { modelo: "Cayanne Turbo", level: 5, preco: "950.000" },
    { modelo: "Urus", level: 6, preco: "1.400.000" },
    { modelo: "Escalade", level: 7, preco: "1.900.000" },

    // Super
    { modelo: "Corvette C6", level: 4, preco: "400.000" },
    { modelo: "718 Boxter", level: 5, preco: "800.000" },
    { modelo: "Gallador", level: 6, preco: "1.400.000" },
    { modelo: "992 Turbos S", level: 7, preco: "1.900.000" },
    { modelo: "R8 V10", level: 8, preco: "2.000.000" },
    { modelo: "Corvette C8", level: 8, preco: "2.225.000" },
    { modelo: "GT3 RS", level: 8, preco: "2.500.000" },
    { modelo: "Huracan", level: 9, preco: "3.000.000" },
    { modelo: "458 Spider", level: 9, preco: "3.300.000" },
    { modelo: "488", level: 10, preco: "4.100.000" },
    { modelo: "720s", level: 10, preco: "4.200.000" },
    { modelo: "Aventador", level: 10, preco: "4.300.000" },
    { modelo: "993 Turbo", level: 10, preco: "5.000.000" },
    { modelo: "812 SuperFast", level: 11, preco: "6.500.000" },
    { modelo: "Senna", level: 11, preco: "8.000.000" },
    { modelo: "918", level: 11, preco: "13.900.000" },
    { modelo: "F40", level: 11, preco: "16.000.000" },
    { modelo: "Sian", level: 12, preco: "22.000.000" },
    { modelo: "Agera RS", level: 12, preco: "30.000.000" },
    { modelo: "Lavoiture Noire", level: 12, preco: "89.000.000" },

    // Vans
    { modelo: "Fiorino", level: 1, preco: "50.000" },
    { modelo: "Kombi", level: 3, preco: "100.000" },
    { modelo: "Sprinter", level: 5, preco: "350.000" }
];

// Seleciona elementos
const tabelaCarros = document.querySelector('.tableBody');
const searchInput = document.querySelector('#searchInput');

// Função para exibir dados
const displayData = data => {
    tabelaCarros.innerHTML = "";
    
    if (data.length === 0) {
        tabelaCarros.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: #666;">
                    Nenhum carro encontrado
                </td>
            </tr>
        `;
        return;
    }
    
    data.forEach(e => {
        tabelaCarros.innerHTML += `
            <tr>
                <td>${e.modelo}</td>
                <td>${e.level}</td>
                <td>${e.preco}</td>
            </tr>
        `;
    });
}

// Evento de pesquisa
searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i => 
        i.modelo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayData(search);
});

// Carrega os dados quando a página abre
window.addEventListener("load", () => {
    displayData(data);
});

searchInput.addEventListener("keyup", filtrarTabela);
filterLevel.addEventListener("change", filtrarTabela);

function filtrarTabela() {
    const termo = searchInput.value.toLowerCase();
    const level = filterLevel.value;
    
    const resultado = data.filter(carro => {
        const matchTexto = carro.modelo.toLowerCase().includes(termo);
        const matchLevel = level === "" || carro.level.toString() === level;
        return matchTexto && matchLevel;
    });
    
    displayData(resultado);
}