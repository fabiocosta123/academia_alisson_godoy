    var map = L.map('map').setView([-24.520513, -47.825136], 18); // Latitude e longitude aproximadas

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(map);

    var greenIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',  // Ícone verde padrão
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    L.marker([-24.520513, -47.825136], {icon: greenIcon}).addTo(map)
        .bindPopup('<b>Academia Alisson Godoy</b><br>Avenida Andre Franco Montoro, 348').openPopup();

